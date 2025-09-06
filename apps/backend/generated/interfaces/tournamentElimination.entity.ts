import { EliminationType } from "./enums";
import { Tournament } from "./tournament.entity";
import { Match } from "./match.entity";
import { Player } from "./player.entity";

export interface TournamentElimination {
  // @generated from prisma schema
  id: number;
  // @generated from prisma schema
  tournamentId: number;
  // @generated from prisma schema
  currentRound: number;
  // @generated from prisma schema
  eliminationType: EliminationType;
  // @generated from prisma schema
  bronzeMatchId: number | null;
  // @generated from prisma schema
  isLosersBracketPlayerWins: boolean;
  // @generated from prisma schema
  isEliminationsOver: boolean;
  // @generated from prisma schema
  winnersBracketByePlayerId: number | null;
  // @generated from prisma schema
  losersBracketByePlayerId: number | null;
  // @generated from prisma schema
  createdAt: Date;
  // @generated from prisma schema
  updatedAt: Date;
  // @generated from prisma schema
  Tournament?: Tournament;
  // @generated from prisma schema
  BronzeMatch?: Match | null;
  // @generated from prisma schema
  WinnersBracketByePlayer?: Player | null;
  // @generated from prisma schema
  LosersBracketByePlayer?: Player | null;
}
