import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UpdateTournamentDto } from '../../generated/models/update-tournament.dto';
import { CreateTournamentDto } from '../../generated/models/create-tournament.dto';
import { Prisma, TournamentStatus } from '../../generated/client';
import { handleDateRange } from '../utils/helper';
import {
  TournamentResponse,
  TournamentsResponse,
} from '../../custom-models/api/tournament';
import { BaseResponse } from '../../custom-models/api/base-response';
import { FindTournamentQueryDto } from '../../custom-models/api/tournament';
import { validateTournamentNameLength } from '../utils/service.helper';
import { TournamentRepository } from '../repository/tournament.repository';
import { TournamentLoader } from '../loader/tournament.loader';

@Injectable()
export class TournamentService {
  private readonly logger = new Logger(TournamentService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly repository: TournamentRepository,
    private readonly loader: TournamentLoader,
  ) {}

  async find(id: number): Promise<TournamentResponse> {
    try {
      const tournament = await this.repository.findBasic(id);

      if (!tournament) {
        this.logger.warn(`Tournament with ID ${id} not found`);
        return { ok: false, error: `Tournament ${id} not found` };
      }

      if (
        tournament.status === TournamentStatus.GroupStage ||
        tournament.status === TournamentStatus.GroupStageCompleted
      ) {
        return this.loader.loadGroupStages(id);
      }

      return this.loader.loadDefault(id);
    } catch (e) {
      this.logger.error(`Database error while finding tournament ${id}`, e);
      return { ok: false, error: 'Database error. Failed to get tournament' };
    }
  }

  async findByQuery({
    query,
    currentPage,
    itemsPerPage,
    status,
    type,
    sortBy,
    sortOrder,
    createdFrom,
    createdTo,
    updatedFrom,
    updatedTo,
  }: FindTournamentQueryDto): Promise<TournamentsResponse> {
    try {
      status = Array.isArray(status) ? status : status ? [status] : [];
      type = Array.isArray(type) ? type : type ? [type] : [];
      const convertedCurrentPage = +currentPage;
      const convertedItemsPerPage = +itemsPerPage;
      const skip = (convertedCurrentPage - 1) * convertedItemsPerPage;

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
          take: convertedItemsPerPage,
          orderBy: { [sortBy]: sortOrder },
        }),
        this.prisma.tournament.count({ where }),
      ]);

      return {
        ok: true,
        data: tournaments,
        pagination: {
          totalPages: Math.ceil(totalCount / convertedItemsPerPage),
          totalItems: totalCount,
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
      if (!validateTournamentNameLength(entity.name)) {
        return {
          ok: false,
          error: 'Tournament name must be at least 5 characters.',
        };
      }

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
      if (!validateTournamentNameLength(entity.name)) {
        return {
          ok: false,
          error: 'Tournament name must be at least 5 characters.',
        };
      }

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
