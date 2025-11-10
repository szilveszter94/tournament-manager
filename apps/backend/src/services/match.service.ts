import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseResponse } from '../../custom-models/api/base-response';
import { UpdateMatchWinnerDto } from '../../custom-models/api/match';
import { DoubleEliminationBracket, Prisma } from '../../generated/client';
import { Match } from '../../generated/models/match.entity';
import { Participant } from '../../generated/models/participant.entity';
import { handleEloChange } from '../utils/service.helper';
import { MatchOutcome } from 'src/utils/service.types';

@Injectable()
export class MatchService {
  private readonly logger = new Logger(MatchService.name);

  constructor(private readonly prisma: PrismaService) {}

  async update(
    matchId: number,
    tournamentId: number,
    entity: UpdateMatchWinnerDto,
  ): Promise<BaseResponse> {
    try {
      const match = await this.validateMatchData(matchId, entity);
      const earlyResponse = this.handleAlreadyFinishedMatch(match, entity);
      if (earlyResponse) return earlyResponse;

      const [winner, loser] = await Promise.all([
        this.prisma.participant.findUnique({
          where: { id: entity.winnerId ?? undefined },
        }),
        this.prisma.participant.findUnique({
          where: { id: entity.loserId ?? undefined },
        }),
      ]);

      if (!winner || !loser) {
        throw new BadRequestException(`One or both participants not found`);
      }

      const isUpdate = Boolean(match.isOver && match.winnerId && match.loserId);
      const {
        winnerStats,
        loserStats,
        winnerElo,
        loserElo,
        winnerEloChange,
        loserEloChange,
        eloWon,
        eloLost,
      } = this.calculateMatchOutcome(match, winner, loser, isUpdate);

      await this.prisma.$transaction(async (tx) => {
        await Promise.all([
          this.updateParticipantStats(
            tx,
            entity.winnerId,
            tournamentId,
            winnerStats,
            winnerEloChange,
            match,
            true,
          ),
          this.updateParticipantStats(
            tx,
            entity.loserId,
            tournamentId,
            loserStats,
            -loserEloChange,
            match,
            false,
          ),
          tx.match.update({
            where: { id: matchId },
            data: {
              ...entity,
              isOver: true,
              winnerElo,
              loserElo,
              eloWon,
              eloLost,
            },
          }),
        ]);
      });
      return { ok: true };
    } catch (e) {
      this.logger.error(
        `Database error while updating match ${matchId}`,
        e.stack,
      );
      if (e instanceof BadRequestException) {
        const message = e.message ?? 'Bad request';
        return { ok: false, error: message };
      }
      return {
        ok: false,
        error: 'An unexpected error occurred during match update',
      };
    }
  }

  private async updateParticipantStats(
    tx: Prisma.TransactionClient,
    participantId: number | null,
    tournamentId: number,
    stats: { wins: number; losses: number },
    eloChange: number,
    match: Match,
    isWinner: boolean,
  ) {
    // 1️⃣ Update participant stats
    if (participantId) {
      const [participant, participantTournament] = await Promise.all([
        tx.participant.findUnique({ where: { id: participantId } }),
        tx.participantTournament.findFirst({
          where: { participantId: participantId, tournamentId },
        }),
      ]);

      if (!participant || !participantTournament) {
        throw new BadRequestException(
          `Participant ${participantId} not found or not part of tournament ${tournamentId}`,
        );
      }

      const updates: Promise<unknown>[] = this.getParticipantUpdates(
        tx,
        participant,
        participantTournament.id,
        stats,
        eloChange,
      );
      this.updateGroupStageParticipant(tx, match, participant, stats, updates);
      await this.updateDoubleEliminationParticipant(
        tx,
        match,
        participant,
        isWinner,
        stats,
        updates,
      );

      await Promise.all(updates);
    }
  }

  private getStatChange = (
    isUpdate: boolean,
  ): {
    winnerStats: { wins: number; losses: number };
    loserStats: { wins: number; losses: number };
  } => {
    return isUpdate
      ? {
          winnerStats: { wins: 1, losses: -1 },
          loserStats: { wins: -1, losses: 1 },
        }
      : {
          winnerStats: { wins: 1, losses: 0 },
          loserStats: { wins: 0, losses: 1 },
        };
  };

  private getParticipantElos(
    match: Match,
    isEloUpdate: boolean,
    winner: Participant,
    loser: Participant,
  ): { winnerElo: number; loserElo: number } {
    const winnerElo = Number(isEloUpdate ? match.loserElo : winner.elo);
    const loserElo = Number(isEloUpdate ? match.winnerElo : loser.elo);

    return { winnerElo, loserElo };
  }

  private getParticipantUpdates(
    tx: Prisma.TransactionClient,
    participant: Participant,
    participantTournamentId: number,
    stats: { wins: number; losses: number },
    eloChange: number,
  ) {
    return [
      tx.participant.update({
        where: { id: participant.id },
        data: {
          wins: { increment: stats.wins },
          losses: { increment: stats.losses },
          updatedAt: new Date(),
          elo: { increment: eloChange },
        },
      }),
      tx.participantTournament.update({
        where: { id: participantTournamentId },
        data: {
          wins: { increment: stats.wins },
          losses: { increment: stats.losses },
          updatedAt: new Date(),
        },
      }),
    ];
  }

  private updateGroupStageParticipant(
    tx: Prisma.TransactionClient,
    match: Match,
    participant: Participant,
    stats: { wins: number; losses: number },
    updates: Promise<unknown>[],
  ) {
    if (!match.tournamentGroupId || !participant.id) {
      return;
    }

    updates.push(
      tx.participantGroup.update({
        where: {
          tournamentGroupId_participantId: {
            tournamentGroupId: match.tournamentGroupId,
            participantId: participant.id,
          },
        },
        data: {
          wins: { increment: stats.wins },
          losses: { increment: stats.losses },
          updatedAt: new Date(),
        },
      }),
    );
  }

  private async updateDoubleEliminationParticipant(
    tx: Prisma.TransactionClient,
    match: Match,
    participant: Participant,
    isWinner: boolean,
    stats: { wins: number; losses: number },
    updates: Promise<unknown>[],
  ) {
    if (!match.tournamentDoubleEliminationId || !participant.id) {
      return;
    }

    const tournamentDoubleElimination =
      await tx.tournamentDoubleElimination.findUnique({
        where: {
          id: match.tournamentDoubleEliminationId,
        },
      });

    const participantDoubleElim =
      await tx.participantDoubleElimination.findUnique({
        where: {
          tournamentDoubleEliminationId_participantId: {
            tournamentDoubleEliminationId: match.tournamentDoubleEliminationId,
            participantId: participant.id,
          },
        },
      });

    if (!participantDoubleElim || !tournamentDoubleElimination) {
      throw new BadRequestException('Double elimination data not found');
    }

    const roundNumber = tournamentDoubleElimination.roundNumber;
    const newBracketType = this.getDoubleEliminationBracketType(
      match,
      isWinner,
      participantDoubleElim.doubleEliminationBracket,
    );

    updates.push(
      tx.participantDoubleElimination.update({
        where: {
          tournamentDoubleEliminationId_participantId: {
            tournamentDoubleEliminationId: match.tournamentDoubleEliminationId,
            participantId: participant.id,
          },
        },
        data: {
          wins: { increment: stats.wins },
          losses: { increment: stats.losses },
          updatedAt: new Date(),
          doubleEliminationBracket: newBracketType,
          roundNumber: roundNumber,
        },
      }),
    );
  }

  private getDoubleEliminationBracketType(
    match: Match,
    isWinner: boolean,
    bracketType: DoubleEliminationBracket,
  ): DoubleEliminationBracket {
    if (!match.isOver && isWinner) return bracketType;

    // Match is over and participant won
    if (isWinner) {
      return bracketType === DoubleEliminationBracket.Eliminated
        ? DoubleEliminationBracket.Loser
        : DoubleEliminationBracket.Winner;
    }

    // Participant lost (whether match is over or not)
    return bracketType === DoubleEliminationBracket.Winner
      ? DoubleEliminationBracket.Loser
      : DoubleEliminationBracket.Eliminated;
  }

  private handleAlreadyFinishedMatch(
    match: Match,
    entity: UpdateMatchWinnerDto,
  ): BaseResponse | null {
    if (!match.isOver || !match.winnerId || !match.loserId) return null;

    if (
      match.winnerId !== entity.loserId ||
      match.loserId !== entity.winnerId
    ) {
      return {
        ok: false,
        error: `Cannot update match ${match.id}. Invalid participants.`,
      };
    }

    if (
      match.winnerId === entity.winnerId &&
      match.loserId === entity.loserId
    ) {
      return { ok: true };
    }

    return null;
  }

  private calculateMatchOutcome(
    match: Match,
    winner: Participant,
    loser: Participant,
    isUpdate: boolean,
  ): MatchOutcome {
    const { winnerStats, loserStats } = this.getStatChange(isUpdate);
    const isEloUpdate = Boolean(
      isUpdate &&
        match.eloWon &&
        match.eloLost &&
        match.winnerElo &&
        match.loserElo,
    );
    const { winnerElo, loserElo } = this.getParticipantElos(
      match,
      isEloUpdate,
      winner,
      loser,
    );
    const { winnerEloChange, loserEloChange, eloWon, eloLost } =
      handleEloChange(winner, loser, match, isEloUpdate);

    return {
      winnerStats,
      loserStats,
      winnerElo,
      loserElo,
      winnerEloChange,
      loserEloChange,
      eloWon,
      eloLost,
    };
  }

  private async validateMatchData(
    matchId: number,
    entity: UpdateMatchWinnerDto,
  ) {
    if (!entity.winnerId || !entity.loserId) {
      throw new BadRequestException(
        `Winner or loser ID missing for match ${matchId}`,
      );
    }

    const match = await this.prisma.match.findUnique({
      where: { id: matchId },
    });
    if (!match)
      throw new BadRequestException(`Match with id ${matchId} not found`);

    if (!match.participant1Id || !match.participant2Id) {
      throw new BadRequestException(
        `Match ${matchId} does not have participants`,
      );
    }

    const validIds = [match.participant1Id, match.participant2Id];
    if (
      !validIds.includes(entity.winnerId) ||
      !validIds.includes(entity.loserId)
    ) {
      throw new BadRequestException(
        `Invalid winner/loser for match ${matchId}`,
      );
    }

    return match;
  }
}
