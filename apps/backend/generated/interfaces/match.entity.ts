import { KnockoutMatchType } from "./enums";
import { Tournament } from "./tournament.entity";
import { Player } from "./player.entity";
import { TournamentElimination } from "./tournamentElimination.entity";

export interface Match {
  // @generated from prisma schema
  id: number;
  // @generated from prisma schema
  tournamentId: number;
  // @generated from prisma schema
  player1Id: number | null;
  // @generated from prisma schema
  player2Id: number | null;
  // @generated from prisma schema
  winnerId: number | null;
  // @generated from prisma schema
  serialNumber: number | null;
  // @generated from prisma schema
  isOver: boolean;
  // @generated from prisma schema
  group: number | null;
  // @generated from prisma schema
  isKnockoutMatch: boolean;
  // @generated from prisma schema
  knockoutRound: number | null;
  // @generated from prisma schema
  knockoutMatchType: KnockoutMatchType;
  // @generated from prisma schema
  isDoubleEliminationMatch: boolean;
  // @generated from prisma schema
  isWinnersBracketMatch: boolean;
  // @generated from prisma schema
  nextMatchId: number | null;
  // @generated from prisma schema
  createdAt: Date;
  // @generated from prisma schema
  updatedAt: Date;
  // @generated from prisma schema
  Tournament?: Tournament;
  // @generated from prisma schema
  Player1?: Player | null;
  // @generated from prisma schema
  Player2?: Player | null;
  // @generated from prisma schema
  Winner?: Player | null;
  // @generated from prisma schema
  TournamentElimination?: TournamentElimination[];
}
