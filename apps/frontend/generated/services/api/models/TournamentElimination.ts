/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EliminationType } from './EliminationType';
import type { Match } from './Match';
import type { Player } from './Player';
import type { Tournament } from './Tournament';
export type TournamentElimination = {
    id: number;
    tournamentId: number;
    currentRound: number;
    eliminationType: EliminationType;
    bronzeMatchId: number | null;
    isLosersBracketPlayerWins: boolean;
    isEliminationsOver: boolean;
    winnersBracketByePlayerId: number | null;
    losersBracketByePlayerId: number | null;
    createdAt: string;
    updatedAt: string;
    Tournament?: Tournament;
    BronzeMatch?: Match | null;
    WinnersBracketByePlayer?: Player | null;
    LosersBracketByePlayer?: Player | null;
};

