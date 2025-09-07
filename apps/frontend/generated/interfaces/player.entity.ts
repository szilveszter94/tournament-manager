import { TournamentWinner } from './tournamentWinner.entity';
import { TournamentElimination } from './tournamentElimination.entity';
import { PlayerTournament } from './playerTournament.entity';
import { Match } from './match.entity';

export interface Player {
  id: number;
  name: string;
  overallWins: number;
  overallLosses: number;
  group: number | null;
  test: number | null;
  elo: number;
  createdAt: Date;
  updatedAt: Date;
  TournamentWinner?: TournamentWinner[];
  WinnersByeEliminations?: TournamentElimination[];
  LosersByeEliminations?: TournamentElimination[];
  PlayerTournament?: PlayerTournament[];
  MatchPlayer1?: Match[];
  MatchPlayer2?: Match[];
  MatchWinner?: Match[];
}
