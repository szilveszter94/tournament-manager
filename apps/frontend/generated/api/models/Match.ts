/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Elimination } from './Elimination';
import type { MatchType } from './MatchType';
import type { Participant } from './Participant';
import type { TournamentGroup } from './TournamentGroup';
import type { TournamentPhase } from './TournamentPhase';
export type Match = {
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
    createdAt: string;
    updatedAt: string;
    tournamentPhase?: TournamentPhase;
    elimination?: Elimination | null;
    group?: TournamentGroup | null;
    participant1?: Participant | null;
    participant2?: Participant | null;
    winner?: Participant | null;
    nextMatch?: Match | null;
    prevMatches?: Array<Match>;
};

