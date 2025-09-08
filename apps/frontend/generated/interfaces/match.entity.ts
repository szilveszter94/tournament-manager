import { MatchType } from './enums';
import { Tournament } from './tournament.entity';
import { Elimination } from './elimination.entity';
import { TournamentGroup } from './tournamentGroup.entity';
import { Player } from './player.entity';

export interface Match {
  id: number;
  tournamentId: number;
  eliminationId: number | null;
  tournamentGroupId: number | null;
  player1Id: number | null;
  player2Id: number | null;
  winnerId: number | null;
  nextMatchId: number | null;
  round: number | null;
  serialNumber: number | null;
  isOver: boolean;
  matchType: MatchType;
  createdAt: Date;
  updatedAt: Date;
  tournament?: Tournament;
  elimination?: Elimination | null;
  group?: TournamentGroup | null;
  player1?: Player | null;
  player2?: Player | null;
  winner?: Player | null;
  nextMatch?: Match | null;
  prevMatches?: Match[];
}
