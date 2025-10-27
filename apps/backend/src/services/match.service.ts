import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseResponse } from '../../custom-models/api/base-response';
import { UpdateMatchWinnerDto } from '../../custom-models/api/match';
import { Prisma } from '../../generated/client';

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

      const { winner, loser } = this.getStatChange(
        Boolean(match.isOver && match.winnerId && match.loserId),
      );
      await this.prisma.$transaction(async (tx) => {
        await Promise.all([
          this.updateParticipantStats(
            tx,
            entity.winnerId,
            tournamentId,
            winner,
          ),
          this.updateParticipantStats(tx, entity.loserId, tournamentId, loser),
          tx.match.update({
            where: { id: matchId },
            data: { ...entity, isOver: true },
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
    isReversal: boolean,
  ): {
    winner: { wins: number; losses: number };
    loser: { wins: number; losses: number };
  } => {
    return isReversal
      ? { winner: { wins: 1, losses: -1 }, loser: { wins: -1, losses: 1 } }
      : { winner: { wins: 1, losses: 0 }, loser: { wins: 0, losses: 1 } };
  };
}
