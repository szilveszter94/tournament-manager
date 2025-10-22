"use client";

import { initialState } from "@/lib/custom-models/common";
import { useActionState } from "react";
import CustomButton from "../components/custom-button/custom-button";
import { updateGroupStageMatch } from "@/app/tournament/actions";
import { Match } from "@/generated/api";

type Props = {
  match: Match;
  tournamentId: number;
  winnerId: number | null;
  loserId: number | null;
  name: string;
};

export default function UpdateMatchForm({ tournamentId, match, winnerId, loserId, name }: Props) {
  const updateMatch = updateGroupStageMatch.bind(null, match.id, tournamentId, winnerId, loserId);
  const [state, formAction] = useActionState(updateMatch, initialState);

  return (
    <form action={formAction} className="flex-1">
      <CustomButton
        type="submit"
        disabled={match.isOver || !winnerId || !loserId}
        variant={match.isOver && match.winnerId === winnerId ? "green" : "primary"}
        size="sm"
        className="w-full">
        {name ?? "Unknown Participant"}
      </CustomButton>
      {state.message && <p className="text-sm text-red-primary">{state.message}</p>}
    </form>
  );
}
