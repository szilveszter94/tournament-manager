/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTournamentDto } from '../models/CreateTournamentDto';
import type { TournamentResponse } from '../models/TournamentResponse';
import type { TournamentsResponse } from '../models/TournamentsResponse';
import type { UpdateTournamentDto } from '../models/UpdateTournamentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TournamentService {
    /**
     * @param id
     * @returns TournamentResponse
     * @throws ApiError
     */
    public static tournamentControllerFindOne(
        id: number,
    ): CancelablePromise<TournamentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tournament/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns TournamentResponse
     * @throws ApiError
     */
    public static tournamentControllerUpdate(
        id: number,
        requestBody: UpdateTournamentDto,
    ): CancelablePromise<TournamentResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tournament/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns TournamentsResponse
     * @throws ApiError
     */
    public static tournamentControllerFindAll(): CancelablePromise<TournamentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tournament',
        });
    }
    /**
     * @param requestBody
     * @returns TournamentResponse
     * @throws ApiError
     */
    public static tournamentControllerCreate(
        requestBody: CreateTournamentDto,
    ): CancelablePromise<TournamentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tournament',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
