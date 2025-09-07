import { KnockoutMatchType } from './enums';

export interface MatchDto {
  id: number;
  serialNumber: number | null;
  isOver: boolean;
  group: number | null;
  isKnockoutMatch: boolean;
  knockoutRound: number | null;
  knockoutMatchType: KnockoutMatchType;
  isDoubleEliminationMatch: boolean;
  isWinnersBracketMatch: boolean;
  nextMatchId: number | null;
  createdAt: Date;
  updatedAt: Date;
}
