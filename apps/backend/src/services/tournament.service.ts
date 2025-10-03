import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  TournamentResponse,
  TournamentsResponse,
} from '../../custom-models/tournament-response';
import { UpdateTournamentDto } from '../../generated/models/update-tournament.dto';
import { BaseResponse } from '../../custom-models/base-response';
import { CreateTournamentDto } from '../../generated/models/create-tournament.dto';
import { ParticipantType, Prisma, TournamentStatus } from '@prisma/client';
import type { SortOrder, TournamentSortBy } from '../../custom-models/shared';
import handleDateRange from '../utils/helper';

@Injectable()
export class TournamentService {
  private readonly logger = new Logger(TournamentService.name);

  constructor(private readonly prisma: PrismaService) {}

  async find(id: number): Promise<TournamentResponse> {
    try {
      const tournament = await this.prisma.tournament.findUnique({
        where: { id },
        include: {
          phases: true,
        },
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
      return { ok: false, error: 'Database error. Failed to get tournament' };
    }
  }

  async findByQuery(
    query: string | undefined,
    currentPage: number,
    itemsPerPage: number,
    status?: TournamentStatus[],
    type?: ParticipantType[],
    sortBy: TournamentSortBy = 'createdAt',
    sortOrder: SortOrder = 'desc',
    createdFrom?: string,
    createdTo?: string,
    updatedFrom?: string,
    updatedTo?: string,
  ): Promise<TournamentsResponse> {
    try {
      const skip = (currentPage - 1) * itemsPerPage;

      const createdRange = handleDateRange(createdFrom, createdTo);
      const updatedRange = handleDateRange(updatedFrom, updatedTo);

      const where: Prisma.TournamentWhereInput = {
        ...(query && {
          name: { contains: query, mode: 'insensitive' },
        }),
        ...(status && status.length > 0 && { status: { in: status } }),
        ...(type && type.length > 0 && { type: { in: type } }),
        ...(createdRange && { createdAt: createdRange }),
        ...(updatedRange && { updatedAt: updatedRange }),
      };

      const [tournaments, totalCount] = await this.prisma.$transaction([
        this.prisma.tournament.findMany({
          where,
          skip,
          take: itemsPerPage,
          orderBy: { [sortBy]: sortOrder },
        }),
        this.prisma.tournament.count({ where }),
      ]);

      return {
        ok: true,
        data: tournaments,
        pagination: {
          totalPages: Math.ceil(totalCount / itemsPerPage),
        },
      };
    } catch (e) {
      this.logger.error('Database error while fetching tournaments', e.stack);
      return {
        ok: false,
        error: 'Database error. Failed to get tournaments.',
      };
    }
  }

  async create(entity: CreateTournamentDto): Promise<TournamentResponse> {
    try {
      const tournament = await this.prisma.tournament.create({
        data: {
          name: entity.name,
          type: entity.type,
        },
      });

      return { ok: true, data: tournament };
    } catch (e) {
      this.logger.error('Error creating tournament', e.stack);
      return {
        ok: false,
        error: 'Database error. Failed to create tournament.',
      };
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
        },
      });

      return { ok: true, data: tournament };
    } catch (e) {
      this.logger.error('Error updating tournament', e.stack);
      return {
        ok: false,
        error: 'Database error. Failed to update tournament.',
      };
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
      return {
        ok: false,
        error: 'Database error. Failed to delete tournament.',
      };
    }
  }
}
