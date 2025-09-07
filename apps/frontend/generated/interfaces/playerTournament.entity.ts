import { Tournament } from './tournament.entity';
import { Player } from './player.entity';

export interface PlayerTournament {
  id: number;
  playerId: number;
  tournamentId: number;
  wins: number;
  losses: number;
  createdAt: Date;
  updatedAt: Date;
  Tournament?: Tournament;
  Player?: Player;
}
