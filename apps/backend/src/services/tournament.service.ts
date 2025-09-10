import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  TournamentResponse,
  TournamentsResponse,
} from '../../custom-models/tournament-response';
import { CreateTournamentDto } from '../../generated/models/create-tournament.dto';
import { UpdateTournamentDto } from '../../generated/models/update-tournament.dto';
import { BaseResponse } from '../../custom-models/base-response';

@Injectable()
export class TournamentService {
  private readonly logger = new Logger(TournamentService.name);

  constructor(private readonly prisma: PrismaService) {}

  async find(id: number): Promise<TournamentResponse> {
    try {
      const tournament = await this.prisma.tournament.findUnique({
        where: { id },
      });

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

  async findAll(): Promise<TournamentsResponse> {
    try {
      const tournaments = await this.prisma.tournament.findMany();
      return { ok: true, data: tournaments };
    } catch (e) {
      this.logger.error('Database error while fetching tournaments', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }

  async create(entity: CreateTournamentDto): Promise<TournamentResponse> {
    try {
      const tournament = await this.prisma.tournament.create({
        data: {
          name: entity.name,
          tournamentStat: entity.tournamentStat,
          isFirstRoundsValid: entity.isFirstRoundsValid,
        },
      });

      return { ok: true, data: tournament };
    } catch (e) {
      this.logger.error('Error creating tournament', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }

  async update(
    id: number,
    entity: UpdateTournamentDto,
  ): Promise<TournamentResponse> {
    try {
      const tournament = await this.prisma.tournament.update({
        where: { id },
        data: {
          name: entity.name,
          tournamentStat: entity.tournamentStat,
          isFirstRoundsValid: entity.isFirstRoundsValid,
        },
      });

      return { ok: true, data: tournament };
    } catch (e) {
      this.logger.error('Error updating tournament', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }

  async delete(id: number): Promise<BaseResponse> {
    try {
      await this.prisma.tournament.delete({
        where: { id: id },
      });

      return { ok: true };
    } catch (e) {
      this.logger.error('Error deleting tournament', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }
}
