import { Tournament } from "./tournament.entity";
import { Player } from "./player.entity";

export interface TournamentWinner {
  // @generated from prisma schema
  id: number;
  // @generated from prisma schema
  tournamentId: number;
  // @generated from prisma schema
  playerId: number;
  // @generated from prisma schema
  place: number;
  // @generated from prisma schema
  createdAt: Date;
  // @generated from prisma schema
  updatedAt: Date;
  // @generated from prisma schema
  Tournament?: Tournament;
  // @generated from prisma schema
  Player?: Player;
}
