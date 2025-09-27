/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParticipantType } from './ParticipantType';
export type CreateParticipantDto = {
    name: string;
    type: ParticipantType;
    elo?: number;
    wins?: number;
    losses?: number;
    createdAt?: string;
};

