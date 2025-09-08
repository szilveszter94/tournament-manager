/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EliminationType } from './EliminationType';
import type { Match } from './Match';
import type { Tournament } from './Tournament';
export type Elimination = {
    id: number;
    tournamentId: number;
    type: EliminationType;
    currentRound: number;
    isOver: boolean;
    createdAt: string;
    updatedAt: string;
    tournament?: Tournament;
    matches?: Array<Match>;
};

