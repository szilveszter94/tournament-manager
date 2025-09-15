/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Elimination } from './Elimination';
import type { Match } from './Match';
import type { PhaseType } from './PhaseType';
import type { Tournament } from './Tournament';
import type { TournamentGroup } from './TournamentGroup';
export type TournamentPhase = {
    id: number;
    tournamentId: number;
    name: string;
    phaseType: PhaseType;
    order: number;
    isCompleted: boolean;
    elimination?: Elimination | null;
    groups?: Array<TournamentGroup>;
    matches?: Array<Match>;
    tournament?: Tournament;
};

