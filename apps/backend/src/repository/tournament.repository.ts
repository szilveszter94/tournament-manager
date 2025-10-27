import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { PhaseType } from '../../generated/client';

@Injectable()
export class TournamentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findBasic(id: number) {
    return this.prisma.tournament.findUnique({ where: { id } });
  }

  async findWithParticipants(id: number) {
    return this.prisma.tournament.findUnique({
      where: { id },
      include: { participants: { include: { participant: true } } },
    });
  }

  async findGroupStageStarted(id: number) {
    return this.prisma.tournament.findUnique({
      where: { id },
      include: {
        participants: { include: { participant: true } },
        phases: {
          where: { phaseType: PhaseType.GroupStage },
          include: {
            groups: {
              include: {
                participantGroups: { include: { participant: true } },
              },
            },
            matches: {
              include: { participant1: true, participant2: true },
            },
          },
        },
      },
    });
  }
}
