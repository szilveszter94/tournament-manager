import { EliminationType } from './enums';

export interface UpdateEliminationDto {
  type?: EliminationType;
  currentRound?: number;
  isOver?: boolean;
  createdAt?: Date;
}
