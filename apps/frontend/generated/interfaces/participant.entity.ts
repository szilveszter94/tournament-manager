import { ParticipantTournament } from './participantTournament.entity';
import { ParticipantGroup } from './participantGroup.entity';
import { Match } from './match.entity';
import { TournamentWinner } from './tournamentWinner.entity';

export interface Participant {
  id: number;
  name: string;
  elo: number;
  wins: number;
  losses: number;
  createdAt: Date;
  updatedAt: Date;
  tournaments?: ParticipantTournament[];
  groups?: ParticipantGroup[];
  matchesAsP1?: Match[];
  matchesAsP2?: Match[];
  matchesWon?: Match[];
  podiums?: TournamentWinner[];
}
