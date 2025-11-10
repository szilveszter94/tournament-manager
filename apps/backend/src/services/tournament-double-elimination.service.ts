import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseResponse } from '../../custom-models/api/base-response';
import {
  DoubleEliminationBracket,
  PhaseType,
  TournamentStatus,
} from '../../generated/client';
import { generateDoubleEliminationMatches } from '../utils/service.helper';
import { CreateDoubleEliminationMatch } from 'custom-models/api/match';

@Injectable()
export class TournamentDoubleEliminationService {
  private readonly logger = new Logger(TournamentDoubleEliminationService.name);

  constructor(private readonly prisma: PrismaService) {}

  async updateDoubleElimination(tournamentId: number): Promise<BaseResponse> {
    try {
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
          include: {
            phases: {
              include: {
                doubleElimination: {
                  include: {
                    participantDoubleEliminations: true,
                    matches: true,
                  },
                },
              },
            },
          },
        });
        if (!tournament) throw new BadRequestException('Tournament not found');
        const existingPhase = tournament.phases.find(
          (p) => p.phaseType === PhaseType.DoubleElimination,
        );
        if (!existingPhase) {
          throw new BadRequestException(
            'This tournament does not have Double Elimination phase',
          );
        }
        if (!existingPhase.doubleElimination) {
          throw new BadRequestException(
            'This tournament does not have Double Elimination phase',
          );
        }

        const participants =
          existingPhase.doubleElimination?.participantDoubleEliminations;
        const winners =
          participants
            ?.filter(
              (p) =>
                p.doubleEliminationBracket ===
                  DoubleEliminationBracket.Winner && p.participantId,
            )
            ?.map((p) => p.participantId) ?? [];
        const losers =
          participants
            ?.filter(
              (p) =>
                p.doubleEliminationBracket === DoubleEliminationBracket.Loser &&
                p.participantId,
            )
            ?.map((p) => p.participantId) ?? [];
        const eliminationRound =
          existingPhase.doubleElimination.roundNumber + 1;
        const lastSerialNumber =
          existingPhase.doubleElimination.matches.reduce(
            (max, match) => Math.max(max, match.serialNumber ?? 0),
            0,
          ) + 1;

        let allMatches: CreateDoubleEliminationMatch[] = [];
        if (winners.length === 1 && losers.length === 1) {
          const finalMatch = generateDoubleEliminationMatches(
            existingPhase.id,
            [...winners, ...losers],
            existingPhase.doubleElimination,
            eliminationRound,
            lastSerialNumber,
          );
          allMatches = finalMatch;
        } else {
          const winnersBracketMatches = generateDoubleEliminationMatches(
            existingPhase.id,
            winners,
            existingPhase.doubleElimination,
            eliminationRound,
            lastSerialNumber,
          );

          const losersBracketMatches = generateDoubleEliminationMatches(
            existingPhase.id,
            losers,
            existingPhase.doubleElimination,
            eliminationRound,
            lastSerialNumber + winnersBracketMatches.length,
          );
          allMatches = [...winnersBracketMatches, ...losersBracketMatches];
        }

        if (allMatches.length <= 0) {
          throw new BadRequestException('Matches not found.');
        }

        await tx.match.createMany({ data: allMatches });
        await tx.tournamentDoubleElimination.update({
          where: { id: existingPhase.doubleElimination.id },
          data: {
            roundNumber: eliminationRound,
            updatedAt: new Date(),
          },
        });
      });

      return { ok: true };
    } catch (e) {
      this.logger.error('Error creating double eliminations', e.stack);

      if (e instanceof BadRequestException) {
        const message = e.message ?? 'Bad request';
        return { ok: false, error: message };
      }

      return { ok: false, error: 'Unexpected server error occurred' };
    }
  }

  async finalizeDoubleElimination(tournamentId: number): Promise<BaseResponse> {
    try {
      if (tournamentId <= 0) {
        return { ok: false, error: `Invalid tournament ID: ${tournamentId}` };
      }

      await this.prisma.$transaction(async (tx) => {
        const tournament = await tx.tournament.findUnique({
          where: { id: tournamentId },
          include: {
            phases: {
              include: {
                doubleElimination: {
                  include: {
                    participantDoubleEliminations: true,
                    matches: true,
                  },
                },
              },
            },
          },
        });

        const phase = tournament?.phases.find(
          (p) => p.phaseType === PhaseType.DoubleElimination,
        )?.doubleElimination;

        if (!phase) {
          throw new BadRequestException(
            'Tournament does not have a Double Elimination phase',
          );
        }

        const participants = phase.participantDoubleEliminations ?? [];

        const sortedParticipants = [...participants]
          .filter((p) => p.participantId)
          .sort((a, b) => {
            const bracketOrder = {
              [DoubleEliminationBracket.Winner]: 1,
              [DoubleEliminationBracket.Loser]: 2,
              [DoubleEliminationBracket.Eliminated]: 3,
            };
            const bracketCompare =
              (bracketOrder[a.doubleEliminationBracket] ?? 4) -
              (bracketOrder[b.doubleEliminationBracket] ?? 4);
            if (bracketCompare !== 0) return bracketCompare;

            const roundsCompare = (b.roundNumber ?? 0) - (a.roundNumber ?? 0);
            if (roundsCompare !== 0) return roundsCompare;

            return (b.wins ?? 0) - (a.wins ?? 0);
          });

        const top3Participants = sortedParticipants.slice(0, 3);
        const top3ParticipantIds = top3Participants.map((p) => p.participantId);

        if (top3ParticipantIds.length !== 3) {
          throw new BadRequestException(
            `Cannot update tournament winners: expected 3 participants, got ${top3ParticipantIds.length}`,
          );
        }

        await tx.tournamentWinner.deleteMany({ where: { tournamentId } });
        await tx.tournamentWinner.createMany({
          data: top3ParticipantIds.map((participantId, index) => ({
            tournamentId,
            participantId,
            place: index + 1,
          })),
        });
        await tx.tournament.update({
          where: { id: tournamentId },
          data: {
            status: TournamentStatus.Over,
            updatedAt: new Date(),
          },
        });
      });

      return { ok: true };
    } catch (e) {
      this.logger.error('Error finalizing double elimination', e.stack);
      return {
        ok: false,
        error:
          e instanceof BadRequestException
            ? e.message
            : 'Unexpected server error occurred',
      };
    }
  }
}
