/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EliminationType } from './EliminationType';
import type { Match } from './Match';
import type { TournamentPhase } from './TournamentPhase';
export type Elimination = {
    id: number;
    tournamentPhaseId: number;
    type: EliminationType;
    currentRound: number;
    isOver: boolean;
    createdAt: string;
    updatedAt: string;
    tournamentPhase?: TournamentPhase;
    matches?: Array<Match>;
};

