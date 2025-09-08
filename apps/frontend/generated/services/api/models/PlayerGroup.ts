/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Player } from './Player';
import type { TournamentGroup } from './TournamentGroup';
export type PlayerGroup = {
    id: number;
    tournamentGroupId: number;
    playerId: number;
    wins: number;
    losses: number;
    points: number;
    createdAt: string;
    updatedAt: string;
    group?: TournamentGroup;
    player?: Player;
};

