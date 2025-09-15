/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse } from '../models/BaseResponse';
import type { CreateTournamentDto } from '../models/CreateTournamentDto';
import type { TournamentResponse } from '../models/TournamentResponse';
import type { TournamentsResponse } from '../models/TournamentsResponse';
import type { UpdateTournamentDto } from '../models/UpdateTournamentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TournamentService {
    /**
     * Get a tournament by Id
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
     * Update the tournament by Id
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
     * Remove a tournament from the database
     * @param id
     * @returns BaseResponse
     * @throws ApiError
     */
    public static tournamentControllerDeleteParticipant(
        id: number,
    ): CancelablePromise<BaseResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tournament/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get all tournaments
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
     * Create a new tournament
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
