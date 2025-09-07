import { TournamentStat } from './enums';

export interface UpdateTournamentDto {
  name?: string;
  tournamentStat?: TournamentStat;
  isFirstRoundsValid?: boolean;
  createdAt?: Date;
}
