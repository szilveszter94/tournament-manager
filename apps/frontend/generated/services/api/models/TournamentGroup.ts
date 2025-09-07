/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tournament } from './Tournament';
export type TournamentGroup = {
    id: number;
    tournamentId: number;
    groupNumber: number;
    isGroupMatchesEnded: boolean;
    createdAt: string;
    updatedAt: string;
    Tournament?: Tournament;
};

