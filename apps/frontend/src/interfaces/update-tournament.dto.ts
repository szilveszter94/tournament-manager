import { TournamentStat } from "./enums";
export interface UpdateTournamentDto {
  // @generated from prisma schema
  name?: string;
  // @generated from prisma schema
  tournamentStat: TournamentStat;
  // @generated from prisma schema
  isFirstRoundsValid: boolean;
  // @generated from prisma schema
  createdAt: Date;
  // @generated from prisma schema
  updatedAt: Date;
}
