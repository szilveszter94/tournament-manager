/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParticipantTournament } from './ParticipantTournament';
import type { ParticipantType } from './ParticipantType';
import type { PhaseType } from './PhaseType';
import type { TournamentPhase } from './TournamentPhase';
import type { TournamentStatus } from './TournamentStatus';
import type { TournamentWinner } from './TournamentWinner';
export type Tournament = {
    id: number;
    name: string;
    phase: PhaseType | null;
    status: TournamentStatus;
    type: ParticipantType;
    createdAt: string;
    updatedAt: string;
    phases?: Array<TournamentPhase>;
    participants?: Array<ParticipantTournament>;
    winners?: Array<TournamentWinner>;
};

