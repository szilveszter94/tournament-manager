import { Tournament } from "./tournament.entity";

export interface TournamentGroup {
  // @generated from prisma schema
  id: number;
  // @generated from prisma schema
  tournamentId: number;
  // @generated from prisma schema
  groupNumber: number;
  // @generated from prisma schema
  isGroupMatchesEnded: boolean;
  // @generated from prisma schema
  createdAt: Date;
  // @generated from prisma schema
  updatedAt: Date;
  // @generated from prisma schema
  Tournament?: Tournament;
}
