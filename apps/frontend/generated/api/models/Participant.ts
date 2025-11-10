/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Match } from './Match';
import type { ParticipantDoubleElimination } from './ParticipantDoubleElimination';
import type { ParticipantGroup } from './ParticipantGroup';
import type { ParticipantTournament } from './ParticipantTournament';
import type { ParticipantType } from './ParticipantType';
import type { TournamentWinner } from './TournamentWinner';
export type Participant = {
    id: number;
    name: string;
    type: ParticipantType;
    elo: number;
    wins: number;
    losses: number;
    createdAt: string;
    updatedAt: string;
    tournaments?: Array<ParticipantTournament>;
    doubleEliminations?: Array<ParticipantDoubleElimination>;
    groups?: Array<ParticipantGroup>;
    matchesAsP1?: Array<Match>;
    matchesAsP2?: Array<Match>;
    matchesWon?: Array<Match>;
    matchesLost?: Array<Match>;
    podiums?: Array<TournamentWinner>;
};

