/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParticipantTournament } from './ParticipantTournament';
import type { TournamentPhase } from './TournamentPhase';
import type { TournamentStatus } from './TournamentStatus';
import type { TournamentType } from './TournamentType';
import type { TournamentWinner } from './TournamentWinner';
export type Tournament = {
    id: number;
    name: string;
    status: TournamentStatus;
    type: TournamentType;
    createdAt: string;
    updatedAt: string;
    phases?: Array<TournamentPhase>;
    participants?: Array<ParticipantTournament>;
    winners?: Array<TournamentWinner>;
};

