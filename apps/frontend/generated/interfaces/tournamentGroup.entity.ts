import { Tournament } from './tournament.entity';
import { PlayerGroup } from './playerGroup.entity';
import { Match } from './match.entity';

export interface TournamentGroup {
  id: number;
  tournamentId: number;
  groupNumber: number;
  isGroupMatchesEnded: boolean;
  createdAt: Date;
  updatedAt: Date;
  tournament?: Tournament;
  players?: PlayerGroup[];
  matches?: Match[];
}
