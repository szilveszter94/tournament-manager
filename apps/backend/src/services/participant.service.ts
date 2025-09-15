import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  ParticipantResponse,
  ParticipantsResponse,
} from '../../custom-models/participant-response';
import { BaseResponse } from 'custom-models/base-response';
import { CreateParticipantDto } from '../../generated/models/create-participant.dto';
import { UpdateParticipantDto } from '../../generated/models/update-participant.dto';

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

  async findAll(): Promise<ParticipantsResponse> {
    try {
      const participants = await this.prisma.participant.findMany();
      return { ok: true, data: participants };
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
