/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Match } from './Match';
import type { ParticipantGroup } from './ParticipantGroup';
import type { TournamentPhase } from './TournamentPhase';
export type TournamentGroup = {
    id: number;
    name: string;
    tournamentPhaseId: number;
    groupNumber: number;
    isGroupMatchesEnded: boolean;
    createdAt: string;
    updatedAt: string;
    tournamentPhase?: TournamentPhase;
    participantGroups?: Array<ParticipantGroup>;
    matches?: Array<Match>;
};

