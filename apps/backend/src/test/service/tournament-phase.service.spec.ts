import { Test, TestingModule } from '@nestjs/testing';
import { TournamentPhaseService } from '../../services/tournament-phase.service';
import { PrismaService } from '../../services/prisma.service';
import { TournamentPhaseDataDto } from '../../../custom-models/api/tournament-phase';
import { PrismaClient } from '@prisma/client/extension';
import { Tournament } from '../../../generated/client';
import { TournamentGroup } from 'generated/models/tournamentGroup.entity';

const testData: TournamentPhaseDataDto = {
  groups: [
    {
      name: 'Group-1',
      participantIds: [1, 2, 3, 4, 5],
    },
  ],
};

describe('TournamentPhaseService', () => {
  let service: TournamentPhaseService;
  let prisma: PrismaService;
  console.log('✅ Testing tournament phase service...');
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TournamentPhaseService,
        {
          provide: PrismaService,
          useValue: {
            $transaction: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TournamentPhaseService>(TournamentPhaseService);
    prisma = module.get<PrismaService>(PrismaService);
    jest.spyOn(service['logger'], 'error').mockImplementation(() => {});
  });

  it('should return error if no groups are provided', async () => {
    const result = await service.createGroupStage({ groups: [] }, 1);
    expect(result).toEqual({ ok: false, error: 'Groups not provided.' });
    console.log('✅ Error if no groups provided passed');
  });

  it('should return error if tournamentId is invalid', async () => {
    const result = await service.createGroupStage(testData, 0);
    expect(result).toEqual({ ok: false, error: 'Invalid tournament ID: 0' });
    console.log('✅ Error if tournamentId is invalid passed');
  });

  it('should handle "tournament not found" error', async () => {
    prisma.$transaction = jest
      .fn()
      .mockImplementation(
        async (cb: (tx: Partial<PrismaClient>) => Promise<Tournament>) => {
          await cb({
            tournament: { findUnique: jest.fn().mockResolvedValue(null) },
          });
        },
      );

    const result = await service.createGroupStage(
      { groups: [{ name: 'Group-1', participantIds: [] }] },
      5,
    );

    expect(result).toEqual({ ok: false, error: 'Tournament not found' });
    console.log('✅ Error if tournament not found');
  });

  it('should create group stage successfully', async () => {
    prisma.$transaction = jest
      .fn()
      .mockImplementation(
        async (cb: (tx: Partial<PrismaClient>) => Promise<void>) => {
          await cb({
            tournament: {
              findUnique: jest.fn().mockResolvedValue({
                id: 1,
                phases: [],
              }),
            },
            tournamentPhase: {
              create: jest.fn().mockResolvedValue({ id: 1 }),
            },
            tournamentGroup: {
              create: jest
                .fn()
                .mockImplementation(
                  ({
                    data,
                  }: {
                    data: { groupNumber: number; tournamentPhaseId: number };
                  }): TournamentGroup[] => [
                    {
                      id: data.groupNumber,
                      groupNumber: data.groupNumber,
                      tournamentPhaseId: data.tournamentPhaseId,
                      isGroupMatchesEnded: false,
                      createdAt: new Date(),
                      updatedAt: new Date(),
                    },
                  ],
                ),
            },
            participantGroup: { createMany: jest.fn() },
            match: { createMany: jest.fn() },
          });
        },
      );

    const result = await service.createGroupStage(testData, 1);

    expect(result).toEqual({ ok: true });
    console.log('✅ Create group stages correctly passed');
  });
});
