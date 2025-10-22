/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse } from '../models/BaseResponse';
import type { UpdateMatchWinnerDto } from '../models/UpdateMatchWinnerDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MatchService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Update a match by matchId
     * @param matchId
     * @param tournamentId
     * @param requestBody
     * @returns BaseResponse
     * @throws ApiError
     */
    public matchControllerUpdate(
        matchId: string,
        tournamentId: string,
        requestBody: UpdateMatchWinnerDto,
    ): CancelablePromise<BaseResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/participantTournament/{matchId}/{tournamentId}',
            path: {
                'matchId': matchId,
                'tournamentId': tournamentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
