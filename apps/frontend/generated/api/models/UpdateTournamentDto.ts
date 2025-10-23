/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParticipantType } from './ParticipantType';
import type { PhaseType } from './PhaseType';
import type { TournamentStatus } from './TournamentStatus';
export type UpdateTournamentDto = {
    name?: string;
    phase?: PhaseType | null;
    status?: TournamentStatus;
    type?: ParticipantType;
    createdAt?: string;
};

