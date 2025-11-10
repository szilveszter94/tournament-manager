import {
  minParticipantNameLength,
  minTournamentNameLength,
} from '../../custom-models/shared/common';
import { MatchType } from '../../generated/client';
import type {
  CreateDoubleEliminationMatch,
  CreateGroupMatch,
} from '../../custom-models/api/match';
import { GroupStagePhaseDataDto } from '../../custom-models/api/tournament-phase';
import { Participant } from '../../generated/models/participant.entity';
import { Match } from '../../generated/models/match.entity';
import { TournamentDoubleElimination } from '../../generated/models/tournamentDoubleElimination.entity';

export const validateTournamentNameLength = (
  name: string | undefined,
): boolean => {
  return name ? name.length >= minTournamentNameLength : false;
};

export const validateParticipantNameLength = (
  name: string | undefined,
): boolean => {
  return name ? name.length >= minParticipantNameLength : false;
};

export const generateRobinRounds = (
  entity: GroupStagePhaseDataDto,
  groupMap: Record<number, number>,
  tournamentPhaseId: number,
): CreateGroupMatch[] => {
  const matches: CreateGroupMatch[] = [];
  entity.groups.forEach((g, index) => {
    const groupId = groupMap[index];
    const participants = g.participantIds;
    const generatedGroupMatches = generateRobinRoundMatches(
      participants,
      tournamentPhaseId,
      groupId,
      MatchType.Group,
    );
    matches.push(...generatedGroupMatches);
  });

  return matches;
};

export const generateDoubleEliminationMatches = (
  pahseId: number,
  participantIds: number[],
  elimination: TournamentDoubleElimination,
  eliminationRound: number = 1,
  serialNumber: number = 1,
): CreateDoubleEliminationMatch[] => {
  let byePlayerId: number | undefined = undefined;
  if (participantIds.length % 2 !== 0) {
    byePlayerId = selectByePlayer(participantIds);
  }
  const filteredParticipantsIds = participantIds.filter(
    (p) => p !== byePlayerId,
  );
  return createDoubleEliminationMatches(
    filteredParticipantsIds,
    pahseId,
    elimination,
    eliminationRound,
    serialNumber,
  );
};

export const shuffle = <T>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const calculateEloChange = (
  winnerElo: number,
  loserElo: number,
  k = 32,
): { winnerEloChange: number; loserEloChange: number } => {
  const expectedWinner = 1 / (1 + 10 ** ((loserElo - winnerElo) / 400));
  const expectedLoser = 1 - expectedWinner;

  const winnerEloChange = Math.ceil(k * (1 - expectedWinner));
  const loserEloChange = Math.ceil(k * expectedLoser);

  return { winnerEloChange, loserEloChange };
};

export const handleEloChange = (
  winner: Participant,
  loser: Participant,
  match: Match,
  isReverse: boolean,
): {
  winnerEloChange: number;
  loserEloChange: number;
  eloWon: number;
  eloLost: number;
} => {
  const originalWinnerElo = match.winnerElo ?? 0; // e.g. 1500
  const originalLoserElo = match.loserElo ?? 0; // e.g. 1500
  const eloWon = match.eloWon ?? 0; // e.g. +8
  const eloLost = match.eloLost ?? 0; // e.g. +8

  if (isReverse) {
    // Step 2️⃣: Recalculate new deltas based on the reversed outcome
    const { winnerEloChange, loserEloChange } = calculateEloChange(
      originalLoserElo,
      originalWinnerElo,
    );

    // Step 3️⃣: Compute *final* change to apply to current elo
    return {
      winnerEloChange: eloLost + winnerEloChange, // e.g. 8 + 8 = 16
      loserEloChange: eloWon + loserEloChange, // e.g. 8 + 8 = 16
      eloWon: loserEloChange,
      eloLost: winnerEloChange,
    };
  }

  // Normal case — just calculate forward change
  const { winnerEloChange, loserEloChange } = calculateEloChange(
    winner.elo,
    loser.elo,
  );
  return {
    winnerEloChange,
    loserEloChange,
    eloWon: winnerEloChange,
    eloLost: loserEloChange,
  };
};

const generateRobinRoundMatches = (
  participants: number[],
  tournamentPhaseId: number,
  tournamentGroupId: number,
  matchType: MatchType,
): CreateGroupMatch[] => {
  const generatedMatches: CreateGroupMatch[] = [];
  const shuffledPlayers = shuffle(participants);
  let serialNumber = 1;
  let list = [...shuffledPlayers];

  const isOdd = list.length % 2 !== 0;
  if (isOdd) list.push(0);

  const length = list.length;
  const totalRounds = length - 1;

  for (let round = 0; round < totalRounds; round++) {
    for (let i = 0; i < length / 2; i++) {
      const p1 = list[i];
      const p2 = list[length - 1 - i];

      if (p1 !== 0 && p2 !== 0 && p1 !== p2) {
        generatedMatches.push({
          tournamentPhaseId,
          tournamentGroupId,
          participant1Id: p1,
          participant2Id: p2,
          matchType,
          serialNumber: serialNumber++,
        });
      }
    }

    const fixed = list[0];
    const rotated = [fixed, ...list.slice(-1), ...list.slice(1, -1)];
    list = rotated;
  }

  return generatedMatches;
};

const createDoubleEliminationMatches = (
  participantIds: number[],
  phaseId: number,
  elimination: TournamentDoubleElimination,
  eliminationRound: number,
  serialNumber: number,
): CreateDoubleEliminationMatch[] => {
  const matches: CreateDoubleEliminationMatch[] = [];
  const shuffledIds = shuffle(participantIds);

  for (let index = 0; index < shuffledIds.length; index += 2) {
    matches.push({
      serialNumber,
      tournamentPhaseId: phaseId,
      tournamentDoubleEliminationId: elimination.id,
      participant1Id: shuffledIds[index],
      participant2Id: shuffledIds[index + 1],
      matchType: MatchType.DoubleElimination,
      doubleEliminationRound: eliminationRound,
    } as CreateDoubleEliminationMatch);
    serialNumber++;
  }

  return matches;
};

const selectByePlayer = (participantIds: number[]) => {
  if (!participantIds.length) {
    return;
  }
  const shuffledIds = shuffle(participantIds);
  return shuffledIds[0];
};
