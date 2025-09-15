import { PhaseType } from './enums';

export interface TournamentPhaseDto {
  id: number;
  name: string;
  phaseType: PhaseType;
  order: number;
  isCompleted: boolean;
}
