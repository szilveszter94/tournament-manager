/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DoubleEliminationBracket } from './DoubleEliminationBracket';
import type { Participant } from './Participant';
import type { TournamentDoubleElimination } from './TournamentDoubleElimination';
export type ParticipantDoubleElimination = {
    id: number;
    tournamentDoubleEliminationId: number;
    participantId: number;
    wins: number;
    losses: number;
    roundNumber: number;
    doubleEliminationBracket: DoubleEliminationBracket;
    createdAt: string;
    updatedAt: string;
    elimination?: TournamentDoubleElimination;
    participant?: Participant;
};

