import { PhaseType } from './enums';

export interface UpdateTournamentPhaseDto {
  name?: string;
  phaseType?: PhaseType;
  order?: number;
  isCompleted?: boolean;
}
