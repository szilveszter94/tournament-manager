import { Tournament } from './tournament.entity';
import { Participant } from './participant.entity';

export interface ParticipantTournament {
  id: number;
  participantId: number;
  tournamentId: number;
  wins: number;
  losses: number;
  createdAt: Date;
  updatedAt: Date;
  tournament?: Tournament;
  participant?: Participant;
}
