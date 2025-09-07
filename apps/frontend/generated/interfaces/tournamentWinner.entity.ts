import { Tournament } from './tournament.entity';
import { Player } from './player.entity';

export interface TournamentWinner {
  id: number;
  tournamentId: number;
  playerId: number;
  place: number;
  createdAt: Date;
  updatedAt: Date;
  Tournament?: Tournament;
  Player?: Player;
}
