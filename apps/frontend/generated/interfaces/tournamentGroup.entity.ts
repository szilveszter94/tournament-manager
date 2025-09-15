import { TournamentPhase } from './tournamentPhase.entity';
import { ParticipantGroup } from './participantGroup.entity';
import { Match } from './match.entity';

export interface TournamentGroup {
  id: number;
  tournamentPhaseId: number;
  groupNumber: number;
  isGroupMatchesEnded: boolean;
  createdAt: Date;
  updatedAt: Date;
  tournamentPhase?: TournamentPhase;
  participantGroups?: ParticipantGroup[];
  matches?: Match[];
}
