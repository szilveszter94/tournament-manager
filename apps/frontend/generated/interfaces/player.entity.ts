import { PlayerTournament } from './playerTournament.entity';
import { PlayerGroup } from './playerGroup.entity';
import { Match } from './match.entity';
import { TournamentWinner } from './tournamentWinner.entity';

export interface Player {
  id: number;
  name: string;
  elo: number;
  createdAt: Date;
  updatedAt: Date;
  tournaments?: PlayerTournament[];
  groups?: PlayerGroup[];
  matchesAsP1?: Match[];
  matchesAsP2?: Match[];
  matchesWon?: Match[];
  podiums?: TournamentWinner[];
}
