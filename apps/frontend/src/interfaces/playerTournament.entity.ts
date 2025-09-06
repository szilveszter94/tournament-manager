import { Tournament } from "./tournament.entity";
import { Player } from "./player.entity";

export interface PlayerTournament {
  // @generated from prisma schema
  id: number;
  // @generated from prisma schema
  playerId: number;
  // @generated from prisma schema
  tournamentId: number;
  // @generated from prisma schema
  wins: number;
  // @generated from prisma schema
  losses: number;
  // @generated from prisma schema
  createdAt: Date;
  // @generated from prisma schema
  updatedAt: Date;
  // @generated from prisma schema
  Tournament?: Tournament;
  // @generated from prisma schema
  Player?: Player;
}
