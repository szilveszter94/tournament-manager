import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ParticipantTournamentsResponse } from '../../custom-models/api/participant-tournament';
import { ParticipantResponse } from 'custom-models/api/participant';
import { CreateParticipantDto } from 'generated/models/create-participant.dto';
import { BaseResponse } from 'custom-models/api/base-response';

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

  async addParticipantToTournament(
    entity: CreateParticipantDto,
    tournamentId: number,
  ): Promise<ParticipantResponse> {
    try {
      const result = await this.prisma.$transaction(async (tx) => {
        const tournament = await tx.tournament.findUnique({
          where: { id: tournamentId },
        });

        if (!tournament) {
          throw new BadRequestException('Tournament not found');
        }

        const participant = await tx.participant.upsert({
          where: { name: entity.name },
          update: {},
          create: { name: entity.name, type: entity.type },
        });

        if (tournament.type !== participant.type) {
          throw new BadRequestException(
            `Cannot add ${participant.type} participant to ${tournament.type} tournament.`,
          );
        }

        const existing = await tx.participantTournament.findUnique({
          where: {
            participantId_tournamentId: {
              participantId: participant.id,
              tournamentId: Number(tournamentId),
            },
          },
        });

        if (existing) {
          throw new BadRequestException(
            'Participant is already registered in this tournament',
          );
        }

        await tx.participantTournament.create({
          data: {
            participantId: participant.id,
            tournamentId: Number(tournamentId),
          },
        });

        return participant;
      });

      return { ok: true, data: result };
    } catch (e) {
      this.logger.error('Error creating participant', e.stack);
      if (e.status === 400) {
        return { ok: false, error: `${e.message}` };
      }

      return { ok: false, error: 'Unexpected server error occurred' };
    }
  }

  async deleteParticipantFromTournament(
    participantId: number,
    tournamentId: number,
  ): Promise<BaseResponse> {
    try {
      const existing = await this.prisma.participantTournament.findUnique({
        where: {
          participantId_tournamentId: {
            participantId: Number(participantId),
            tournamentId: Number(tournamentId),
          },
        },
      });

      if (!existing) {
        return {
          ok: false,
          error: 'Participant is not found in the tournament',
        };
      }

      await this.prisma.participantTournament.delete({
        where: { id: existing.id },
      });

      return { ok: true };
    } catch (e) {
      this.logger.error('Error deleting participant from tournament', e.stack);
      return { ok: false, error: 'Unexpected server error occurred' };
    }
  }
}
