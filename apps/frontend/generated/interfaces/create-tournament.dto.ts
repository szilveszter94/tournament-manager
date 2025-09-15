import { TournamentStatus, TournamentType } from './enums';

export interface CreateTournamentDto {
  name: string;
  status?: TournamentStatus;
  type: TournamentType;
  createdAt?: Date;
}
