/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Player } from './Player';
import type { Tournament } from './Tournament';
export type TournamentWinner = {
    id: number;
    tournamentId: number;
    playerId: number;
    place: number;
    createdAt: string;
    updatedAt: string;
    Tournament?: Tournament;
    Player?: Player;
};

