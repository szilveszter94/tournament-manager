import { MatchType } from './enums';
import { TournamentPhase } from './tournamentPhase.entity';
import { Elimination } from './elimination.entity';
import { TournamentGroup } from './tournamentGroup.entity';
import { Participant } from './participant.entity';

export interface Match {
  id: number;
  tournamentPhaseId: number;
  eliminationId: number | null;
  tournamentGroupId: number | null;
  participant1Id: number | null;
  participant2Id: number | null;
  winnerId: number | null;
  nextMatchId: number | null;
  round: number | null;
  serialNumber: number | null;
  isOver: boolean;
  matchType: MatchType;
  createdAt: Date;
  updatedAt: Date;
  tournamentPhase?: TournamentPhase;
  elimination?: Elimination | null;
  group?: TournamentGroup | null;
  participant1?: Participant | null;
  participant2?: Participant | null;
  winner?: Participant | null;
  nextMatch?: Match | null;
  prevMatches?: Match[];
}
