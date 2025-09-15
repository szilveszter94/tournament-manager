import { PhaseType } from './enums';

export interface CreateTournamentPhaseDto {
  name: string;
  phaseType: PhaseType;
  order: number;
  isCompleted?: boolean;
}
