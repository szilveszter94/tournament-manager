import { EliminationType } from './enums';

export interface CreateTournamentEliminationDto {
  currentRound?: number;
  eliminationType?: EliminationType;
  isLosersBracketPlayerWins?: boolean;
  isEliminationsOver?: boolean;
  createdAt?: Date;
}
