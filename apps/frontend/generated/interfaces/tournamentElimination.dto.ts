import { EliminationType } from './enums';

export interface TournamentEliminationDto {
  id: number;
  currentRound: number;
  eliminationType: EliminationType;
  isLosersBracketPlayerWins: boolean;
  isEliminationsOver: boolean;
  createdAt: Date;
  updatedAt: Date;
}
