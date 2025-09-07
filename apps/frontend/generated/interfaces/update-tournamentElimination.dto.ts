import { EliminationType } from './enums';

export interface UpdateTournamentEliminationDto {
  currentRound?: number;
  eliminationType?: EliminationType;
  isLosersBracketPlayerWins?: boolean;
  isEliminationsOver?: boolean;
  createdAt?: Date;
}
