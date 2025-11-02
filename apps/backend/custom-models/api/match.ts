import { PickType } from '@nestjs/swagger';
import { Match } from '../../generated/models/match.entity';

export type CreateGroupMatch = Pick<
  Match,
  | 'tournamentPhaseId'
  | 'tournamentGroupId'
  | 'participant1Id'
  | 'participant2Id'
  | 'matchType'
  | 'serialNumber'
>;

export type CreateDoubleEliminationMatch = Pick<
  Match,
  | 'tournamentPhaseId'
  | 'eliminationId'
  | 'participant1Id'
  | 'participant2Id'
  | 'serialNumber'
  | 'matchType'
  | 'round'
>;

export class UpdateMatchWinnerDto extends PickType(Match, [
  'winnerId',
  'loserId',
  'isOver',
] as const) {}
