/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KnockoutMatchType } from './KnockoutMatchType';
import type { Player } from './Player';
import type { Tournament } from './Tournament';
import type { TournamentElimination } from './TournamentElimination';
export type Match = {
    id: number;
    tournamentId: number;
    player1Id: number | null;
    player2Id: number | null;
    winnerId: number | null;
    serialNumber: number | null;
    isOver: boolean;
    group: number | null;
    isKnockoutMatch: boolean;
    knockoutRound: number | null;
    knockoutMatchType: KnockoutMatchType;
    isDoubleEliminationMatch: boolean;
    isWinnersBracketMatch: boolean;
    nextMatchId: number | null;
    createdAt: string;
    updatedAt: string;
    Tournament?: Tournament;
    Player1?: Player | null;
    Player2?: Player | null;
    Winner?: Player | null;
    TournamentElimination?: Array<TournamentElimination>;
};

