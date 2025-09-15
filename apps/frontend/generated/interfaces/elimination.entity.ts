import { EliminationType } from './enums';
import { TournamentPhase } from './tournamentPhase.entity';
import { Match } from './match.entity';

export interface Elimination {
  id: number;
  tournamentPhaseId: number;
  type: EliminationType;
  currentRound: number;
  isOver: boolean;
  createdAt: Date;
  updatedAt: Date;
  tournamentPhase?: TournamentPhase;
  matches?: Match[];
}
