"use client";

import { initialState } from "@/lib/custom-models/common";
import { useActionState, useState } from "react";
import CustomButton from "../components/custom-button/custom-button";
import { updateGroupStageMatch } from "@/app/tournament/actions";
import { Match } from "@/generated/api";

type Props = {
  match: Match;
  tournamentId: number;
};

export default function UpdateMatchForm({ tournamentId, match }: Props) {
  const [winnerId, setWinnerId] = useState<number | null>(null);
  const [loserId, setLoserId] = useState<number | null>(null);
  const updateMatch = updateGroupStageMatch.bind(null, match.id, tournamentId, winnerId, loserId);
  const [state, formAction] = useActionState(updateMatch, initialState);

  const setProps = (wId: number | null, lId: number | null) => {
    setWinnerId(wId);
    setLoserId(lId);
  };

  return (
    <form action={formAction} className="flex-1">
      <div className="flex gap-2 items-center border text-foreground rounded-md p-4">
        <CustomButton
          onClick={() => setProps(match.participant1Id, match.participant2Id)}
          type="submit"
          disabled={match.isOver || !match.participant1Id || !match.participant2Id}
          variant={match.isOver && match.winnerId === match.participant1Id ? "green" : "primary"}
          size="sm"
          className="w-full">
          {match.participant1?.name ?? "Unknown Participant"}
        </CustomButton>{" "}
        vs
        <CustomButton
          onClick={() => setProps(match.participant2Id, match.participant1Id)}
          type="submit"
          disabled={match.isOver || !match.participant1Id || !match.participant2Id}
          variant={match.isOver && match.winnerId === match.participant2Id ? "green" : "primary"}
          size="sm"
          className="w-full">
          {match.participant2?.name ?? "Unknown Participant"}
        </CustomButton>
        {state.message && <p className="text-sm text-red-primary">{state.message}</p>}
      </div>
    </form>
  );
}
