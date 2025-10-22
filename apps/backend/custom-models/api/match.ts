import { MatchType } from '../../generated/client';

export type CreateGroupMatch = {
  tournamentPhaseId: number;
  tournamentGroupId: number;
  participant1Id: number;
  participant2Id: number;
  matchType: MatchType;
  serialNumber: number;
};
