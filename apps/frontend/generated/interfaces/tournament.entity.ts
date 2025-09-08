import { TournamentStat } from './enums';
import { Elimination } from './elimination.entity';
import { TournamentGroup } from './tournamentGroup.entity';
import { PlayerTournament } from './playerTournament.entity';
import { Match } from './match.entity';
import { TournamentWinner } from './tournamentWinner.entity';

export interface Tournament {
  id: number;
  name: string;
  tournamentStat: TournamentStat;
  isFirstRoundsValid: boolean;
  createdAt: Date;
  updatedAt: Date;
  elimination?: Elimination | null;
  groups?: TournamentGroup[];
  players?: PlayerTournament[];
  matches?: Match[];
  winners?: TournamentWinner[];
}
