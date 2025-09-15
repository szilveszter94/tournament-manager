import { TournamentGroup } from './tournamentGroup.entity';
import { Participant } from './participant.entity';

export interface ParticipantGroup {
  id: number;
  tournamentGroupId: number;
  participantId: number;
  wins: number;
  losses: number;
  points: number;
  createdAt: Date;
  updatedAt: Date;
  group?: TournamentGroup;
  participant?: Participant;
}
