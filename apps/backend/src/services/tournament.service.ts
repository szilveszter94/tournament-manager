import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Tournament } from 'generated/models/tournament.entity';
import { ServiceResponse } from 'custom-interfaces/service-response';

@Injectable()
export class TournamentService {
  private readonly logger = new Logger(TournamentService.name);

  constructor(private readonly prisma: PrismaService) {}

  async find(id: number): Promise<ServiceResponse<Tournament>> {
    try {
      const tournament = (await this.prisma.tournament.findUnique({
        where: { id },
      })) as Tournament;

      if (!tournament) {
        this.logger.warn(`Tournament with ID ${id} not found`);
        return { ok: false, error: `Tournament with ID ${id} not found` };
      }

      return { ok: true, data: tournament };
    } catch (e) {
      this.logger.error(
        `Database error while finding tournament with ID ${id}`,
        e.stack,
      );
      return { ok: false, error: 'Database error' };
    }
  }

  async findAll(): Promise<ServiceResponse<Tournament[]>> {
    try {
      const tournaments =
        (await this.prisma.tournament.findMany()) as Tournament[];
      return { ok: true, data: tournaments };
    } catch (e) {
      this.logger.error('Database error while fetching tournaments', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }
}
