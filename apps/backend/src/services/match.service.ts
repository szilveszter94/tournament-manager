import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseResponse } from '../../custom-models/api/base-response';
import { UpdateMatchWinnerDto } from '../../custom-models/api/match';

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
      const match = await this.prisma.match.findUnique({
        where: { id: matchId },
      });

      if (!match) {
        this.logger.warn(`Match with id ${matchId} not found`);
        return { ok: false, error: `Match with id ${matchId} not found` };
      }

      await this.prisma.$transaction(async (tx) => {
        // 1️⃣ Update winner stats
        if (entity.winnerId) {
          const [participant, participantTournament] = await Promise.all([
            tx.participant.findUnique({ where: { id: entity.winnerId } }),
            tx.participantTournament.findFirst({
              where: { participantId: entity.winnerId, tournamentId },
            }),
          ]);

          if (!participant || !participantTournament) {
            throw new Error(
              `Winner with id ${entity.winnerId} not found in tournament`,
            );
          }

          await Promise.all([
            tx.participant.update({
              where: { id: participant.id },
              data: { wins: { increment: 1 }, updatedAt: new Date() },
            }),
            tx.participantTournament.update({
              where: { id: participantTournament.id },
              data: { wins: { increment: 1 }, updatedAt: new Date() },
            }),
          ]);
        }

        // 2️⃣ Update loser stats
        if (entity.loserId) {
          const loserTournament = await tx.participantTournament.findFirst({
            where: { participantId: entity.loserId, tournamentId },
          });

          if (loserTournament) {
            await tx.participantTournament.update({
              where: { id: loserTournament.id },
              data: { losses: { increment: 1 }, updatedAt: new Date() },
            });
          }
        }

        // 3️⃣ Update the match itself
        await tx.match.update({ where: { id: matchId }, data: entity });
      });

      return { ok: true };
    } catch (e) {
      this.logger.error(
        `Database error while updating match ${matchId}`,
        e.stack,
      );
      return {
        ok: false,
        error: 'An unexpected error occurred during mathc update',
      };
    }
  }
}
