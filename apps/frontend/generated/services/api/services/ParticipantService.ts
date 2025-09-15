/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse } from '../models/BaseResponse';
import type { CreateParticipantDto } from '../models/CreateParticipantDto';
import type { ParticipantResponse } from '../models/ParticipantResponse';
import type { ParticipantsResponse } from '../models/ParticipantsResponse';
import type { UpdateParticipantDto } from '../models/UpdateParticipantDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ParticipantService {
    /**
     * Get a participant by Id
     * @param id
     * @returns ParticipantResponse
     * @throws ApiError
     */
    public static participantControllerFindOne(
        id: number,
    ): CancelablePromise<ParticipantResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/participant/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update the participant by Id
     * @param id
     * @param requestBody
     * @returns ParticipantResponse
     * @throws ApiError
     */
    public static participantControllerUpdate(
        id: number,
        requestBody: UpdateParticipantDto,
    ): CancelablePromise<ParticipantResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/participant/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove a participant from the database
     * @param id
     * @returns BaseResponse
     * @throws ApiError
     */
    public static participantControllerDeleteParticipant(
        id: number,
    ): CancelablePromise<BaseResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/participant/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get all participants
     * @returns ParticipantsResponse
     * @throws ApiError
     */
    public static participantControllerFindAll(): CancelablePromise<ParticipantsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/participant',
        });
    }
    /**
     * Create a new participant
     * @param requestBody
     * @returns ParticipantResponse
     * @throws ApiError
     */
    public static participantControllerCreate(
        requestBody: CreateParticipantDto,
    ): CancelablePromise<ParticipantResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/participant',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
