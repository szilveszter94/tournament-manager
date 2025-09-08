/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Match } from './Match';
import type { PlayerGroup } from './PlayerGroup';
import type { PlayerTournament } from './PlayerTournament';
import type { TournamentWinner } from './TournamentWinner';
export type Player = {
    id: number;
    name: string;
    elo: number;
    createdAt: string;
    updatedAt: string;
    tournaments?: Array<PlayerTournament>;
    groups?: Array<PlayerGroup>;
    matchesAsP1?: Array<Match>;
    matchesAsP2?: Array<Match>;
    matchesWon?: Array<Match>;
    podiums?: Array<TournamentWinner>;
};

