/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParticipantType } from './ParticipantType';
import type { TournamentStatus } from './TournamentStatus';
export type CreateTournamentDto = {
    name: string;
    status?: TournamentStatus;
    type: ParticipantType;
    createdAt?: string;
};

