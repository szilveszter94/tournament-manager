/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Participant } from './Participant';
import type { Tournament } from './Tournament';
export type ParticipantTournament = {
    id: number;
    participantId: number;
    tournamentId: number;
    wins: number;
    losses: number;
    createdAt: string;
    updatedAt: string;
    tournament?: Tournament;
    participant?: Participant;
};

