import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseResponse } from '../../custom-models/api/base-response';
import { UpdateMatchWinnerDto } from '../../custom-models/api/match';
import { Prisma } from '../../generated/client';
import { Match } from '../../generated/models/match.entity';
import { Participant } from '../../generated/models/participant.entity';
import { handleEloChange } from '../utils/service.helper';

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
      if (!entity.winnerId || !entity.loserId) {
        this.logger.warn(
          `Match winner or loser was not provided with match id ${matchId}`,
        );
        return {
          ok: false,
          error: `Match winner or loser was not provided with match id ${matchId}`,
        };
      }

      const match = await this.prisma.match.findUnique({
        where: { id: matchId },
      });

      if (!match) {
        this.logger.warn(`Match with id ${matchId} not found`);
        return { ok: false, error: `Match with id ${matchId} not found` };
      }

      if (!match.participant1Id || !match.participant2Id) {
        this.logger.warn("The match doesn't have participants");
        return { ok: false, error: "The match doesn't have participants" };
      }

      const validIds = [match.participant1Id, match.participant2Id];

      if (
        !validIds.includes(entity.winnerId) ||
        !validIds.includes(entity.loserId)
      ) {
        this.logger.warn(
          'The match winner and loser is not provided correctly',
        );
        return {
          ok: false,
          error: 'The match winner and loser is not provided correctly',
        };
      }

      if (match.isOver && match.winnerId && match.loserId) {
        if (
          match.winnerId !== entity.loserId ||
          match.loserId !== entity.winnerId
        ) {
          return {
            ok: false,
            error: `Cannot update the match with id ${matchId}. Participants are not valid`,
          };
        }
        if (
          match.winnerId === entity.winnerId &&
          match.loserId === entity.loserId
        ) {
          return { ok: true };
        }
      }

      const [winner, loser] = await Promise.all([
        this.prisma.participant.findUnique({ where: { id: entity.winnerId } }),
        this.prisma.participant.findUnique({ where: { id: entity.loserId } }),
      ]);

      if (!winner || !loser) {
        throw new Error(`One or both participants not found`);
      }

      const isUpdate = Boolean(match.isOver && match.winnerId && match.loserId);
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

      await this.prisma.$transaction(async (tx) => {
        await Promise.all([
          this.updateParticipantStats(
            tx,
            entity.winnerId,
            tournamentId,
            winnerStats,
            winnerEloChange,
          ),
          this.updateParticipantStats(
            tx,
            entity.loserId,
            tournamentId,
            loserStats,
            -loserEloChange,
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
        throw new Error(
          `Participant with id ${participantId} not found in tournament`,
        );
      }

      await Promise.all([
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
          where: { id: participantTournament.id },
          data: {
            wins: { increment: stats.wins },
            losses: { increment: stats.losses },
            updatedAt: new Date(),
          },
        }),
      ]);
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
}
