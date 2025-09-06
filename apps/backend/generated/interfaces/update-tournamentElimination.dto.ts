import { EliminationType } from "./enums";
export interface UpdateTournamentEliminationDto {
  // @generated from prisma schema
  currentRound: number;
  // @generated from prisma schema
  eliminationType: EliminationType;
  // @generated from prisma schema
  isLosersBracketPlayerWins: boolean;
  // @generated from prisma schema
  isEliminationsOver: boolean;
  // @generated from prisma schema
  createdAt: Date;
  // @generated from prisma schema
  updatedAt: Date;
}
