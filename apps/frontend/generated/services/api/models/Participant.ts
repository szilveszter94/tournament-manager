/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Match } from './Match';
import type { ParticipantGroup } from './ParticipantGroup';
import type { ParticipantTournament } from './ParticipantTournament';
import type { TournamentWinner } from './TournamentWinner';
export type Participant = {
    id: number;
    name: string;
    elo: number;
    wins: number;
    losses: number;
    createdAt: string;
    updatedAt: string;
    tournaments?: Array<ParticipantTournament>;
    groups?: Array<ParticipantGroup>;
    matchesAsP1?: Array<Match>;
    matchesAsP2?: Array<Match>;
    matchesWon?: Array<Match>;
    podiums?: Array<TournamentWinner>;
};

