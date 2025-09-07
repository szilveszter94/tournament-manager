/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Match } from './Match';
import type { PlayerTournament } from './PlayerTournament';
import type { TournamentElimination } from './TournamentElimination';
import type { TournamentGroup } from './TournamentGroup';
import type { TournamentStat } from './TournamentStat';
import type { TournamentWinner } from './TournamentWinner';
export type Tournament = {
    id: number;
    name: string;
    tournamentStat: TournamentStat;
    isFirstRoundsValid: boolean;
    createdAt: string;
    updatedAt: string;
    TournamentWinner?: Array<TournamentWinner>;
    TournamentElimination?: Array<TournamentElimination>;
    TournamentGroup?: Array<TournamentGroup>;
    PlayerTournament?: Array<PlayerTournament>;
    Match?: Array<Match>;
};

