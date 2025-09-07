import { KnockoutMatchType } from './enums';
import { Tournament } from './tournament.entity';
import { Player } from './player.entity';
import { TournamentElimination } from './tournamentElimination.entity';

export interface Match {
  id: number;
  tournamentId: number;
  player1Id: number | null;
  player2Id: number | null;
  winnerId: number | null;
  serialNumber: number | null;
  isOver: boolean;
  group: number | null;
  isKnockoutMatch: boolean;
  knockoutRound: number | null;
  knockoutMatchType: KnockoutMatchType;
  isDoubleEliminationMatch: boolean;
  isWinnersBracketMatch: boolean;
  nextMatchId: number | null;
  createdAt: Date;
  updatedAt: Date;
  Tournament?: Tournament;
  Player1?: Player | null;
  Player2?: Player | null;
  Winner?: Player | null;
  TournamentElimination?: TournamentElimination[];
}
