import { EliminationType } from './enums';

export interface CreateEliminationDto {
  type?: EliminationType;
  currentRound?: number;
  isOver?: boolean;
  createdAt?: Date;
}
