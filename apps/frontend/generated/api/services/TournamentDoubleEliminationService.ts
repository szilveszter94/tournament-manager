/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse } from '../models/BaseResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TournamentDoubleEliminationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Update double elimination phase in a tournament
     * @param tournamentId
     * @returns BaseResponse
     * @throws ApiError
     */
    public tournamentDoubleEliminationControllerUpdateDoubleElimination(
        tournamentId: string,
    ): CancelablePromise<BaseResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tournamentDoubleElimination/{tournamentId}/update',
            path: {
                'tournamentId': tournamentId,
            },
        });
    }
    /**
     * Finalize double elimination phase in a tournament
     * @param tournamentId
     * @returns BaseResponse
     * @throws ApiError
     */
    public tournamentDoubleEliminationControllerFinalizeDoubleElimination(
        tournamentId: string,
    ): CancelablePromise<BaseResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tournamentDoubleElimination/{tournamentId}/finalize',
            path: {
                'tournamentId': tournamentId,
            },
        });
    }
}
