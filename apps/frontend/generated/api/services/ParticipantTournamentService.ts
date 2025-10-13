/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutocompleteParticipantDto } from '../models/AutocompleteParticipantDto';
import type { BaseResponse } from '../models/BaseResponse';
import type { ParticipantResponse } from '../models/ParticipantResponse';
import type { ParticipantTournamentsResponse } from '../models/ParticipantTournamentsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ParticipantTournamentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get participants by tournamentId
     * @param tournamentId
     * @returns ParticipantTournamentsResponse
     * @throws ApiError
     */
    public participantTournamentControllerFindByTournamentId(
        tournamentId: string,
    ): CancelablePromise<ParticipantTournamentsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/participantTournament/{tournamentId}',
            path: {
                'tournamentId': tournamentId,
            },
        });
    }
    /**
     * Create a new participant for a tournament
     * @param tournamentId
     * @param requestBody
     * @returns ParticipantResponse
     * @throws ApiError
     */
    public participantTournamentControllerAddParticipantToTournament(
        tournamentId: string,
        requestBody: AutocompleteParticipantDto,
    ): CancelablePromise<ParticipantResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/participantTournament/{tournamentId}',
            path: {
                'tournamentId': tournamentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a participant from a tournament
     * @param participantId
     * @param tournamentId
     * @returns BaseResponse
     * @throws ApiError
     */
    public participantTournamentControllerDeleteParticipantFromTournament(
        participantId: string,
        tournamentId: string,
    ): CancelablePromise<BaseResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/participantTournament/{tournamentId}/{participantId}',
            path: {
                'participantId': participantId,
                'tournamentId': tournamentId,
            },
        });
    }
}
