import { TournamentStatus, TournamentType } from './enums';
import { TournamentPhase } from './tournamentPhase.entity';
import { ParticipantTournament } from './participantTournament.entity';
import { TournamentWinner } from './tournamentWinner.entity';

export interface Tournament {
  id: number;
  name: string;
  status: TournamentStatus;
  type: TournamentType;
  createdAt: Date;
  updatedAt: Date;
  phases?: TournamentPhase[];
  participants?: ParticipantTournament[];
  winners?: TournamentWinner[];
}
