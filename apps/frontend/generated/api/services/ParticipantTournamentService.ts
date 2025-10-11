/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
        tournamentId: number,
    ): CancelablePromise<ParticipantTournamentsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/participantTournament/{tournamentId}',
            path: {
                'tournamentId': tournamentId,
            },
        });
    }
}
