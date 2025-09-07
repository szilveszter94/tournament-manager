import { Tournament } from './tournament.entity';

export interface TournamentGroup {
  id: number;
  tournamentId: number;
  groupNumber: number;
  isGroupMatchesEnded: boolean;
  createdAt: Date;
  updatedAt: Date;
  Tournament?: Tournament;
}
