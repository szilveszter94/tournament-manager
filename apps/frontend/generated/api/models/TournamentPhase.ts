/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Match } from './Match';
import type { PhaseType } from './PhaseType';
import type { Tournament } from './Tournament';
import type { TournamentDoubleElimination } from './TournamentDoubleElimination';
import type { TournamentGroup } from './TournamentGroup';
import type { TournamentKnockout } from './TournamentKnockout';
export type TournamentPhase = {
    id: number;
    tournamentId: number;
    phaseType: PhaseType;
    order: number;
    isCompleted: boolean;
    knockout?: TournamentKnockout | null;
    groups?: Array<TournamentGroup>;
    doubleElimination?: TournamentDoubleElimination | null;
    matches?: Array<Match>;
    tournament?: Tournament;
};

