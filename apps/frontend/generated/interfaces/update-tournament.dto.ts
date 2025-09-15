import { TournamentStatus, TournamentType } from './enums';

export interface UpdateTournamentDto {
  name?: string;
  status?: TournamentStatus;
  type?: TournamentType;
  createdAt?: Date;
}
