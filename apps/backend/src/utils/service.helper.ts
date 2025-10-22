import {
  minParticipantNameLength,
  minTournamentNameLength,
} from '../../custom-models/shared/common';
import { MatchType } from '../../generated/client';
import type { CreateGroupMatch } from '../../custom-models/api/match';
import { TournamentPhaseDataDto } from '../../custom-models/api/tournament-phase';

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
  entity: TournamentPhaseDataDto,
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

export const shuffle = <T>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const generateRobinRoundMatches = (
  participants: number[],
  tournamentPhaseId: number,
  tournamentGroupId: number,
  matchType: MatchType,
): CreateGroupMatch[] => {
  const generatedMatches: CreateGroupMatch[] = [];
  const shuffledPlayers = shuffle(participants);
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
        });
      }
    }

    const fixed = list[0];
    const rotated = [fixed, ...list.slice(-1), ...list.slice(1, -1)];
    list = rotated;
  }

  return generatedMatches;
};
