import { KnockoutMatchType } from "./enums";
export interface UpdateMatchDto {
  // @generated from prisma schema
  serialNumber?: number;
  // @generated from prisma schema
  isOver: boolean;
  // @generated from prisma schema
  group?: number;
  // @generated from prisma schema
  isKnockoutMatch: boolean;
  // @generated from prisma schema
  knockoutRound?: number;
  // @generated from prisma schema
  knockoutMatchType: KnockoutMatchType;
  // @generated from prisma schema
  isDoubleEliminationMatch: boolean;
  // @generated from prisma schema
  isWinnersBracketMatch: boolean;
  // @generated from prisma schema
  nextMatchId?: number;
  // @generated from prisma schema
  createdAt: Date;
  // @generated from prisma schema
  updatedAt: Date;
}
