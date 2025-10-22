import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  phaseOrders,
  TournamentPhaseDataDto,
} from '../../custom-models/api/tournament-phase';
import { BaseResponse } from '../../custom-models/api/base-response';
import { PhaseType } from '../../generated/client';
import { generateRobinRounds } from '../utils/service.helper';
import { CreateGroupMatch } from '../../custom-models/api/match';

@Injectable()
export class TournamentPhaseService {
  private readonly logger = new Logger(TournamentPhaseService.name);

  constructor(private readonly prisma: PrismaService) {}

  async createGroupStage(
    entity: TournamentPhaseDataDto,
    tournamentId: number,
  ): Promise<BaseResponse> {
    try {
      if (!entity.groups?.length) {
        return { ok: false, error: 'Groups not provided.' };
      }

      if (tournamentId <= 0) {
        return {
          ok: false,
          error: `Invalid tournament ID: ${tournamentId}`,
        };
      }

      await this.prisma.$transaction(async (tx) => {
        // 1️⃣ Ensure the tournament exists
        const tournament = await tx.tournament.findUnique({
          where: { id: tournamentId },
          include: { phases: true },
        });
        if (!tournament) throw new BadRequestException('Tournament not found');

        const existingPhase = tournament.phases.find(
          (p) => p.phaseType === PhaseType.GroupStage,
        );
        if (existingPhase) {
          throw new BadRequestException(
            'This tournament already has a GroupStage phase',
          );
        }

        // 2️⃣ Create the phase
        const phase = await tx.tournamentPhase.create({
          data: {
            tournamentId,
            phaseType: PhaseType.GroupStage,
            order: phaseOrders[PhaseType.GroupStage],
          },
        });

        if (!phase) {
          throw new BadRequestException('Failed to create tournament phase');
        }

        const groupMap: Record<number, number> = {}; // map groupIndex -> groupId
        for (let i = 0; i < entity.groups.length; i++) {
          const group = await tx.tournamentGroup.create({
            data: {
              groupNumber: i + 1,
              tournamentPhaseId: phase.id,
            },
          });
          groupMap[i] = group.id;
        }

        if (Object.keys(groupMap).length === 0) {
          throw new BadRequestException('Failed to create tournament groups');
        }

        // 4️⃣ Create participantGroup records (flatten all)
        const participantGroupsData = entity.groups.flatMap((g, index) =>
          g.participantIds.map((pid) => ({
            tournamentGroupId: groupMap[index],
            participantId: pid,
          })),
        );

        await tx.participantGroup.createMany({
          data: participantGroupsData,
        });

        const matches: CreateGroupMatch[] = generateRobinRounds(
          entity,
          groupMap,
          phase.id,
        );

        if (matches.length > 0) {
          await tx.match.createMany({ data: matches });
        }
      });

      return { ok: true };
    } catch (e) {
      this.logger.error('Error creating tournament phase', e.stack);
      if (e.status === 400) {
        return { ok: false, error: `${e.message}` };
      }
      return { ok: false, error: 'Unexpected server error occurred' };
    }
  }
}
