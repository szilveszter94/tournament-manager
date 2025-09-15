/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Participant } from './Participant';
import type { TournamentGroup } from './TournamentGroup';
export type ParticipantGroup = {
    id: number;
    tournamentGroupId: number;
    participantId: number;
    wins: number;
    losses: number;
    points: number;
    createdAt: string;
    updatedAt: string;
    group?: TournamentGroup;
    participant?: Participant;
};

