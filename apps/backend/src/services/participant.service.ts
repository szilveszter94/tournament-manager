import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateParticipantDto } from '../../generated/models/create-participant.dto';
import { UpdateParticipantDto } from '../../generated/models/update-participant.dto';
import { Prisma } from '../../generated/client';
import {
  AutocompleteParticipantQueryDto,
  FindParticipantQueryDto,
  ParticipantResponse,
  ParticipantsResponse,
} from '../../custom-models/api/participant';
import { BaseResponse } from '../../custom-models/api/base-response';
import {
  handleDateRange as getDateRange,
  handleNumberRange as getNumberRange,
} from '../utils/helper';
import { validateParticipantNameLength } from '../utils/service.helper';
import { minParticipantAutocompleteLength } from '../../custom-models/shared/common';

@Injectable()
export class ParticipantService {
  private readonly logger = new Logger(ParticipantService.name);

  constructor(private readonly prisma: PrismaService) {}

  async find(id: number): Promise<ParticipantResponse> {
    try {
      const participant = await this.prisma.participant.findUnique({
        where: { id },
      });

      if (!participant) {
        this.logger.warn(`Participant with ID ${id} not found`);
        return { ok: false, error: `Participant with ID ${id} not found` };
      }

      return { ok: true, data: participant };
    } catch (e) {
      this.logger.error(
        `Database error while finding participant with ID ${id}`,
        e.stack,
      );
      return { ok: false, error: 'Database error' };
    }
  }

  async findByQuery({
    query,
    currentPage,
    itemsPerPage,
    type,
    sortBy,
    sortOrder,
    createdFrom,
    createdTo,
    updatedFrom,
    updatedTo,
    eloFrom,
    eloTo,
    winsFrom,
    winsTo,
    lossesFrom,
    lossesTo,
  }: FindParticipantQueryDto): Promise<ParticipantsResponse> {
    try {
      type = Array.isArray(type) ? type : type ? [type] : [];
      const convertedCurrentPage = +currentPage;
      const convertedItemsPerPage = +itemsPerPage;
      const skip = (convertedCurrentPage - 1) * convertedItemsPerPage;

      const createdRange = getDateRange(createdFrom, createdTo);
      const updatedRange = getDateRange(updatedFrom, updatedTo);
      const eloRange = getNumberRange(eloFrom, eloTo);
      const winsRange = getNumberRange(winsFrom, winsTo);
      const lossesRange = getNumberRange(lossesFrom, lossesTo);

      const where: Prisma.ParticipantWhereInput = {
        ...(query && {
          name: { contains: query, mode: 'insensitive' },
        }),
        ...(type && type.length > 0 && { type: { in: type } }),
        ...(createdRange && { createdAt: createdRange }),
        ...(updatedRange && { updatedAt: updatedRange }),
        ...(eloRange && { elo: eloRange }),
        ...(winsRange && { wins: winsRange }),
        ...(lossesRange && { losses: lossesRange }),
      };

      const [participants, totalCount] = await this.prisma.$transaction([
        this.prisma.participant.findMany({
          where,
          skip,
          take: convertedItemsPerPage,
          orderBy: { [sortBy]: sortOrder },
        }),
        this.prisma.participant.count({ where }),
      ]);

      return {
        ok: true,
        data: participants,
        pagination: {
          totalPages: Math.ceil(totalCount / convertedItemsPerPage),
          totalItems: totalCount,
        },
      };
    } catch (e) {
      this.logger.error('Database error while fetching participants', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }

  async getAutocompleteParticipant(
    queryParams: AutocompleteParticipantQueryDto,
  ): Promise<ParticipantsResponse> {
    try {
      const query = queryParams.query?.trim();
      if (!query || query.length < minParticipantAutocompleteLength) {
        return {
          ok: false,
          error: `Autocomplete name must be at least ${minParticipantAutocompleteLength} characters.`,
        };
      }
      if (!queryParams.type) {
        return {
          ok: false,
          error: `Autocomplete type must be provided.`,
        };
      }

      const participant = await this.prisma.participant.findMany({
        where: {
          name: {
            contains: query,
            mode: 'insensitive',
          },
          type: queryParams.type,
        },
        take: 10,
        orderBy: { name: 'asc' },
      });

      return { ok: true, data: participant };
    } catch (e) {
      this.logger.error(
        `Database error while finding participant by query ${queryParams.query}`,
        e.stack,
      );
      return {
        ok: false,
        error: 'Error finding participants. Unexpected server errror.',
      };
    }
  }

  async create(entity: CreateParticipantDto): Promise<ParticipantResponse> {
    try {
      if (!entity.type) {
        return {
          ok: false,
          error: 'Participant type is not provided.',
        };
      }

      if (!validateParticipantNameLength(entity.name)) {
        const playerType = entity.type === 'Individual' ? 'Player' : 'Team';
        return {
          ok: false,
          error: `${playerType} name must be at least 5 characters.`,
        };
      }

      const participant = await this.prisma.participant.create({
        data: {
          name: entity.name,
          type: entity.type,
        },
      });

      return { ok: true, data: participant };
    } catch (e) {
      this.logger.error('Error creating participant', e.stack);
      return {
        ok: false,
        error: 'Error creating participant. Unexpected server errror.',
      };
    }
  }

  async update(
    id: number,
    entity: UpdateParticipantDto,
  ): Promise<ParticipantResponse> {
    try {
      if (!entity.type) {
        return {
          ok: false,
          error: 'Participant type is not provided.',
        };
      }

      if (!validateParticipantNameLength(entity.name)) {
        const playerType = entity.type === 'Individual' ? 'Player' : 'Team';
        return {
          ok: false,
          error: `${playerType} name must be at least 5 characters.`,
        };
      }

      const participant = await this.prisma.participant.update({
        where: { id },
        data: {
          name: entity.name,
          type: entity.type,
        },
      });

      return { ok: true, data: participant };
    } catch (e) {
      this.logger.error('Error updating participant', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }

  async delete(id: number): Promise<BaseResponse> {
    try {
      await this.prisma.participant.delete({
        where: { id: id },
      });

      return { ok: true };
    } catch (e) {
      this.logger.error('Error deleting participant', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }
}
