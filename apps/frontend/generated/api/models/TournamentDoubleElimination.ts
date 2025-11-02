/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Match } from './Match';
import type { ParticipantDoubleElimination } from './ParticipantDoubleElimination';
import type { TournamentPhase } from './TournamentPhase';
export type TournamentDoubleElimination = {
    id: number;
    tournamentPhaseId: number;
    roundNumber: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    tournamentPhase?: TournamentPhase;
    participantDoubleEliminations?: Array<ParticipantDoubleElimination>;
    matches?: Array<Match>;
};

