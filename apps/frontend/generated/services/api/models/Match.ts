/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Elimination } from './Elimination';
import type { MatchType } from './MatchType';
import type { Player } from './Player';
import type { Tournament } from './Tournament';
import type { TournamentGroup } from './TournamentGroup';
export type Match = {
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
    createdAt: string;
    updatedAt: string;
    tournament?: Tournament;
    elimination?: Elimination | null;
    group?: TournamentGroup | null;
    player1?: Player | null;
    player2?: Player | null;
    winner?: Player | null;
    nextMatch?: Match | null;
    prevMatches?: Array<Match>;
};

