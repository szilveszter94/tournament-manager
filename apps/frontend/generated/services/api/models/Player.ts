/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Match } from './Match';
import type { PlayerTournament } from './PlayerTournament';
import type { TournamentElimination } from './TournamentElimination';
import type { TournamentWinner } from './TournamentWinner';
export type Player = {
    id: number;
    name: string;
    overallWins: number;
    overallLosses: number;
    group: number | null;
    test: number | null;
    elo: number;
    createdAt: string;
    updatedAt: string;
    TournamentWinner?: Array<TournamentWinner>;
    WinnersByeEliminations?: Array<TournamentElimination>;
    LosersByeEliminations?: Array<TournamentElimination>;
    PlayerTournament?: Array<PlayerTournament>;
    MatchPlayer1?: Array<Match>;
    MatchPlayer2?: Array<Match>;
    MatchWinner?: Array<Match>;
};

