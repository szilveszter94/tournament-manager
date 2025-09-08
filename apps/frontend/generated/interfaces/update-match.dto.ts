import { MatchType } from './enums';

export interface UpdateMatchDto {
  round?: number | null;
  serialNumber?: number | null;
  isOver?: boolean;
  matchType?: MatchType;
  createdAt?: Date;
}
