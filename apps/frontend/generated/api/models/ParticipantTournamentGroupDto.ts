/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ParticipantTournamentGroupDto = {
    /**
     * The name of the group (e.g., Group A, Group B)
     */
    name: string;
    /**
     * The order of the group
     */
    serialNumber: number;
    /**
     * List of participants belonging to this group
     */
    participantIds: Array<number>;
};

