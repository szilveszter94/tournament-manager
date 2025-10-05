import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  ParticipantResponse,
  ParticipantsResponse,
} from '../../custom-models/participant-response';
import { BaseResponse } from 'custom-models/base-response';
import { CreateParticipantDto } from '../../generated/models/create-participant.dto';
import { UpdateParticipantDto } from '../../generated/models/update-participant.dto';
import { Prisma } from 'generated/client';

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

  async findByQuery(
    query: string | undefined,
    currentPage: number,
    itemsPerPage: number,
  ): Promise<ParticipantsResponse> {
    try {
      const skip = (currentPage - 1) * itemsPerPage;

      const where: Prisma.ParticipantWhereInput = {
        ...(query && {
          name: { contains: query, mode: 'insensitive' },
        }),
      };

      const [participants, totalCount] = await this.prisma.$transaction([
        this.prisma.participant.findMany({
          where,
          skip,
          take: itemsPerPage,
          orderBy: { createdAt: 'desc' },
        }),
        this.prisma.participant.count({ where }),
      ]);

      return {
        ok: true,
        data: participants,
        pagination: {
          totalPages: Math.ceil(totalCount / itemsPerPage),
          totalItems: totalCount,
        },
      };
    } catch (e) {
      this.logger.error('Database error while fetching participants', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }

  async create(entity: CreateParticipantDto): Promise<ParticipantResponse> {
    try {
      const participant = await this.prisma.participant.create({
        data: {
          name: entity.name,
          type: entity.type,
        },
      });

      return { ok: true, data: participant };
    } catch (e) {
      this.logger.error('Error creating participant', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }

  async update(
    id: number,
    entity: UpdateParticipantDto,
  ): Promise<ParticipantResponse> {
    try {
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
