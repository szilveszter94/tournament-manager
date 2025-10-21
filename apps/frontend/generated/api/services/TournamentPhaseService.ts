/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse } from '../models/BaseResponse';
import type { TournamentPhaseDataDto } from '../models/TournamentPhaseDataDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TournamentPhaseService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new phase for a tournament
     * @param tournamentId
     * @param requestBody
     * @returns BaseResponse
     * @throws ApiError
     */
    public tournamentPhaseControllerAddPhaseToTournament(
        tournamentId: string,
        requestBody: TournamentPhaseDataDto,
    ): CancelablePromise<BaseResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tournamentPhase/{tournamentId}',
            path: {
                'tournamentId': tournamentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
