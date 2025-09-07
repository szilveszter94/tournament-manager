import { TournamentWinner } from "./tournamentWinner.entity";
import { TournamentElimination } from "./tournamentElimination.entity";
import { PlayerTournament } from "./playerTournament.entity";
import { Match } from "./match.entity";

export interface Player {
  // @generated from prisma schema
  id: number;
  // @generated from prisma schema
  name: string;
  // @generated from prisma schema
  overallWins: number;
  // @generated from prisma schema
  overallLosses: number;
  // @generated from prisma schema
  group: number | null;
  // @generated from prisma schema
  test: number | null;
  // @generated from prisma schema
  elo: number;
  // @generated from prisma schema
  createdAt: Date;
  // @generated from prisma schema
  updatedAt: Date;
  // @generated from prisma schema
  TournamentWinner?: TournamentWinner[];
  // @generated from prisma schema
  WinnersByeEliminations?: TournamentElimination[];
  // @generated from prisma schema
  LosersByeEliminations?: TournamentElimination[];
  // @generated from prisma schema
  PlayerTournament?: PlayerTournament[];
  // @generated from prisma schema
  MatchPlayer1?: Match[];
  // @generated from prisma schema
  MatchPlayer2?: Match[];
  // @generated from prisma schema
  MatchWinner?: Match[];
}
