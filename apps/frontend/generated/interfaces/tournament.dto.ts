import { TournamentStatus, TournamentType } from './enums';

export interface TournamentDto {
  id: number;
  name: string;
  status: TournamentStatus;
  type: TournamentType;
  createdAt: Date;
  updatedAt: Date;
}
