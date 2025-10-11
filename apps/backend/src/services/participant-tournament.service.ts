import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ParticipantTournamentsResponse } from '../../custom-models/api/participant-tournament';

@Injectable()
export class ParticipantTournamentService {
  private readonly logger = new Logger(ParticipantTournamentService.name);

  constructor(private readonly prisma: PrismaService) {}

  async find(tournamentId: number): Promise<ParticipantTournamentsResponse> {
    try {
      const participants = await this.prisma.participantTournament.findMany({
        where: { tournamentId: Number(tournamentId) },
        include: { participant: true },
      });

      if (!participants) {
        this.logger.warn(
          `Participant with tournamentId ${tournamentId} not found`,
        );
        return {
          ok: false,
          error: `Participant with tournamentId ${tournamentId} not found`,
        };
      }

      return { ok: true, data: participants };
    } catch (e) {
      this.logger.error(
        `Database error while finding participant with tournamentId ${tournamentId}`,
        e.stack,
      );
      return { ok: false, error: 'Database error' };
    }
  }
}
