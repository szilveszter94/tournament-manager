/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Participant } from './Participant';
import type { Tournament } from './Tournament';
export type TournamentWinner = {
    id: number;
    tournamentId: number;
    participantId: number;
    place: number;
    createdAt: string;
    updatedAt: string;
    tournament?: Tournament;
    participant?: Participant;
};

