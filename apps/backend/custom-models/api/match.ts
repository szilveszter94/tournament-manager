import { Match } from 'generated/models/match.entity';

export type CreateGroupMatch = Pick<
  Match,
  | 'tournamentPhaseId'
  | 'tournamentGroupId'
  | 'participant1Id'
  | 'participant2Id'
  | 'matchType'
  | 'serialNumber'
>;
