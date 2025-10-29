/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse } from '../models/BaseResponse';
import type { GroupStagePhaseDataDto } from '../models/GroupStagePhaseDataDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TournamentPhaseService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create group stage phase for a tournament
     * @param tournamentId
     * @param requestBody
     * @returns BaseResponse
     * @throws ApiError
     */
    public tournamentPhaseControllerAddGrupStageToTournament(
        tournamentId: string,
        requestBody: GroupStagePhaseDataDto,
    ): CancelablePromise<BaseResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tournamentPhase/groupStage/{tournamentId}',
            path: {
                'tournamentId': tournamentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
