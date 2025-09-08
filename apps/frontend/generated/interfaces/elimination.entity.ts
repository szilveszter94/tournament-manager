import { EliminationType } from './enums';
import { Tournament } from './tournament.entity';
import { Match } from './match.entity';

export interface Elimination {
  id: number;
  tournamentId: number;
  type: EliminationType;
  currentRound: number;
  isOver: boolean;
  createdAt: Date;
  updatedAt: Date;
  tournament?: Tournament;
  matches?: Match[];
}
