import { PhaseType } from './enums';
import { Elimination } from './elimination.entity';
import { TournamentGroup } from './tournamentGroup.entity';
import { Match } from './match.entity';
import { Tournament } from './tournament.entity';

export interface TournamentPhase {
  id: number;
  tournamentId: number;
  name: string;
  phaseType: PhaseType;
  order: number;
  isCompleted: boolean;
  elimination?: Elimination | null;
  groups?: TournamentGroup[];
  matches?: Match[];
  tournament?: Tournament;
}
