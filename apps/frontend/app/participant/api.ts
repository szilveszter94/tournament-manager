import { ParticipantsResponse } from "@/generated/api";
import { apiClient } from "@/lib/client";
import { ParticipantQueryParams } from "@/lib/custom-models/participant";

export async function fetchParticipants(
  p: ParticipantQueryParams
): Promise<ParticipantsResponse> {
  try {
    const response =
      await apiClient.participant.participantControllerFindByQuery(
        p.query,
        p.lossesTo,
        p.lossesFrom,
        p.winsTo,
        p.winsFrom,
        p.eloTo,
        p.eloFrom,
        p.updatedTo,
        p.updatedFrom,
        p.createdTo,
        p.createdFrom,
        p.sortOrder,
        p.sortBy,
        p.typeList,
        p.itemsPerPage,
        p.currentPage
      );
    return response;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch participants");
  }
}
