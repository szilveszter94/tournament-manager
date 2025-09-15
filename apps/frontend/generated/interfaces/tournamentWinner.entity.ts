import { Tournament } from './tournament.entity';
import { Participant } from './participant.entity';

export interface TournamentWinner {
  id: number;
  tournamentId: number;
  participantId: number;
  place: number;
  createdAt: Date;
  updatedAt: Date;
  tournament?: Tournament;
  participant?: Participant;
}
