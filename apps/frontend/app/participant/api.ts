import { ParticipantsResponse } from "@/generated/api";
import { apiClient } from "@/lib/client";

export async function fetchParticipants(
  query: string,
  itemsPerPage: number,
  currentPage: number
): Promise<ParticipantsResponse> {
  try {
    const response = await apiClient.participant.participantControllerFindByQuery(query, itemsPerPage, currentPage);
    return response;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch participants");
  }
}
