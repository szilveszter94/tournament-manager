import { TournamentStat } from './enums';

export interface TournamentDto {
  id: number;
  name: string;
  tournamentStat: TournamentStat;
  isFirstRoundsValid: boolean;
  createdAt: Date;
  updatedAt: Date;
}
