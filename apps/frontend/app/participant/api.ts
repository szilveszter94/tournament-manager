import { ParticipantsResponse } from "@/generated/api";
import { apiClient } from "@/lib/client";

export async function fetchParticipants(): Promise<ParticipantsResponse> {
  try {
    const response = await apiClient.participant.participantControllerFindAll();
    return response;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch participants");
  }
}
