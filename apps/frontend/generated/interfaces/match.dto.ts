import { MatchType } from './enums';

export interface MatchDto {
  id: number;
  round: number | null;
  serialNumber: number | null;
  isOver: boolean;
  matchType: MatchType;
  createdAt: Date;
  updatedAt: Date;
}
