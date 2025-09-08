/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Elimination } from './Elimination';
import type { Match } from './Match';
import type { PlayerTournament } from './PlayerTournament';
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
    elimination?: Elimination | null;
    groups?: Array<TournamentGroup>;
    players?: Array<PlayerTournament>;
    matches?: Array<Match>;
    winners?: Array<TournamentWinner>;
};

