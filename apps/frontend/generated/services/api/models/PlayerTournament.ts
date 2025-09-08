/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Player } from './Player';
import type { Tournament } from './Tournament';
export type PlayerTournament = {
    id: number;
    playerId: number;
    tournamentId: number;
    wins: number;
    losses: number;
    createdAt: string;
    updatedAt: string;
    tournament?: Tournament;
    player?: Player;
};

