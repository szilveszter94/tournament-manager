import { EliminationType } from './enums';
import { Tournament } from './tournament.entity';
import { Match } from './match.entity';
import { Player } from './player.entity';

export interface TournamentElimination {
  id: number;
  tournamentId: number;
  currentRound: number;
  eliminationType: EliminationType;
  bronzeMatchId: number | null;
  isLosersBracketPlayerWins: boolean;
  isEliminationsOver: boolean;
  winnersBracketByePlayerId: number | null;
  losersBracketByePlayerId: number | null;
  createdAt: Date;
  updatedAt: Date;
  Tournament?: Tournament;
  BronzeMatch?: Match | null;
  WinnersBracketByePlayer?: Player | null;
  LosersBracketByePlayer?: Player | null;
}
