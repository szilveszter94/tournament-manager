/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse } from '../models/BaseResponse';
import type { CreatePlayerDto } from '../models/CreatePlayerDto';
import type { PlayerResponse } from '../models/PlayerResponse';
import type { PlayersResponse } from '../models/PlayersResponse';
import type { UpdatePlayerDto } from '../models/UpdatePlayerDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PlayerService {
    /**
     * Get a player by Id
     * @param id
     * @returns PlayerResponse
     * @throws ApiError
     */
    public static playerControllerFindOne(
        id: number,
    ): CancelablePromise<PlayerResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/player/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update the player by Id
     * @param id
     * @param requestBody
     * @returns PlayerResponse
     * @throws ApiError
     */
    public static playerControllerUpdate(
        id: number,
        requestBody: UpdatePlayerDto,
    ): CancelablePromise<PlayerResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/player/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove a player from the database
     * @param id
     * @returns BaseResponse
     * @throws ApiError
     */
    public static playerControllerDeletePlayer(
        id: number,
    ): CancelablePromise<BaseResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/player/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get all players
     * @returns PlayersResponse
     * @throws ApiError
     */
    public static playerControllerFindAll(): CancelablePromise<PlayersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/player',
        });
    }
    /**
     * Create a new player
     * @param requestBody
     * @returns PlayerResponse
     * @throws ApiError
     */
    public static playerControllerCreate(
        requestBody: CreatePlayerDto,
    ): CancelablePromise<PlayerResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/player',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
