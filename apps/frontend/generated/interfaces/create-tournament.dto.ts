import { TournamentStat } from './enums';

export interface CreateTournamentDto {
  name: string;
  tournamentStat?: TournamentStat;
  isFirstRoundsValid?: boolean;
  createdAt?: Date;
}
