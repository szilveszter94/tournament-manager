import { CreateParticipantDto } from "@/generated/api";
import { apiClient } from "@/lib/client";
import { revalidatePath } from "next/cache";

export async function createParticipant(entity: CreateParticipantDto) {
  try {
    await apiClient.participant.participantControllerCreate(entity);
    revalidatePath("/tournament/create");
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to create participant with name ${entity.name}`);
  }
}
