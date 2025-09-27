// actions/tournaments.ts
"use server";

import { revalidatePath } from "next/cache";
import { apiClient } from "@/lib/client";
import { ParticipantType } from "@/generated/api";
import { redirect } from "next/navigation";
import { State } from "@/lib/custom-models";

export async function createTournament(
  _prevState: State,
  formData: FormData
): Promise<State> {
  const name = formData.get("name")?.toString();
  const type = formData.get("participantType") as ParticipantType | null;

  if (!name || !type) {
    return {
      message: "Failed to create tournament.",
      errors: {
        ...(name ? {} : { name: ["Name is required"] }),
        ...(type ? {} : { participantType: ["A participant type must be selected."] }),
      },
    };
  }

  let id: number | undefined;
  try {
    const result = await apiClient.tournament.tournamentControllerCreate({
      name,
      type,
    });

    if (!result.ok || !result.data?.id) {
      return {
        message: result.error ?? "Failed to create tournament",
        errors: {},
      };
    }

    id = result.data.id;
  } catch (err) {
    console.error(err);
    return {
      message: "Unexpected server error. Failed to create tournament.",
      errors: {},
    };
  }

  revalidatePath("/tournament/list");
  redirect(`/tournament/${id}`);
}
