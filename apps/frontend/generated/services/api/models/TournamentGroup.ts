/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Match } from './Match';
import type { PlayerGroup } from './PlayerGroup';
import type { Tournament } from './Tournament';
export type TournamentGroup = {
    id: number;
    tournamentId: number;
    groupNumber: number;
    isGroupMatchesEnded: boolean;
    createdAt: string;
    updatedAt: string;
    tournament?: Tournament;
    players?: Array<PlayerGroup>;
    matches?: Array<Match>;
};

