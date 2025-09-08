import { MatchType } from './enums';

export interface CreateMatchDto {
  round?: number | null;
  serialNumber?: number | null;
  isOver?: boolean;
  matchType: MatchType;
  createdAt?: Date;
}
