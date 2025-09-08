import { TournamentGroup } from './tournamentGroup.entity';
import { Player } from './player.entity';

export interface PlayerGroup {
  id: number;
  tournamentGroupId: number;
  playerId: number;
  wins: number;
  losses: number;
  points: number;
  createdAt: Date;
  updatedAt: Date;
  group?: TournamentGroup;
  player?: Player;
}
