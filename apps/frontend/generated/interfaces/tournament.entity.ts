import { TournamentStat } from './enums';
import { TournamentWinner } from './tournamentWinner.entity';
import { TournamentElimination } from './tournamentElimination.entity';
import { TournamentGroup } from './tournamentGroup.entity';
import { PlayerTournament } from './playerTournament.entity';
import { Match } from './match.entity';

export interface Tournament {
  id: number;
  name: string;
  tournamentStat: TournamentStat;
  isFirstRoundsValid: boolean;
  createdAt: Date;
  updatedAt: Date;
  TournamentWinner?: TournamentWinner[];
  TournamentElimination?: TournamentElimination[];
  TournamentGroup?: TournamentGroup[];
  PlayerTournament?: PlayerTournament[];
  Match?: Match[];
}
