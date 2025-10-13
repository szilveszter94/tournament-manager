"use client";

import { useActionState, useState } from "react";
import CustomButton from "../components/custom-button/custom-button";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { addParticipantToTournament } from "@/app/participant/actions";
import { initialState } from "@/lib/custom-models/common";
import AutocompleteInput from "./autocomplete-input";
import type { Participant, ParticipantType } from "@/generated/api";

type Props = {
  type: ParticipantType;
  tournamentId: number;
};

export default function CreateParticipantForm({ type, tournamentId }: Props) {
  const [state, formAction] = useActionState(
    addParticipantToTournament,
    initialState
  );
  const [selectedParticipant, setSelectedParticipant] =
    useState<Participant | null>(null);
  const [query, setQuery] = useState("");

  const onSetQuery = (term: string) => {
    setQuery(term);
    state.message = "";
  };

  const onSubmit = () => {
    setQuery("");
  };

  return (
    <form action={formAction} onSubmit={onSubmit}>
      <input type="hidden" name="type" value={type} />
      <input type="hidden" name="tournamentId" value={tournamentId} />
      <input type="hidden" name="name" value={query} />
      {selectedParticipant && (
        <input
          autoComplete="off"
          type="hidden"
          name="participantId"
          value={selectedParticipant.id}
        />
      )}

      <div className="flex gap-2">
        <AutocompleteInput
          type={type}
          onSelect={setSelectedParticipant}
          query={query}
          setQuery={onSetQuery}
        />
        <CustomButton
          type="submit"
          variant="primary"
          size="sm"
          icon={<PlusCircleIcon />}
          iconSize={4}
        >
          Add
        </CustomButton>
      </div>
      {state.message && <p className="text-sm text-red-500">{state.message}</p>}
    </form>
  );
}
