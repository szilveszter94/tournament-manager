import { EliminationType } from './enums';

export interface EliminationDto {
  id: number;
  type: EliminationType;
  currentRound: number;
  isOver: boolean;
  createdAt: Date;
  updatedAt: Date;
}
