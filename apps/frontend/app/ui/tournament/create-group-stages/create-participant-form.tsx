"use client";

import { useActionState, useState } from "react";
import CustomButton from "../../components/custom-button/custom-button";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { addParticipantToTournament } from "@/app/participant/actions";
import { initialState } from "@/lib/custom-models/common";
import AutocompleteInput from "../../participant/autocomplete-input";
import type { Participant, ParticipantType } from "@/generated/api";

type Props = {
  type: ParticipantType;
  tournamentId: number;
};

export default function CreateParticipantForm({ type, tournamentId }: Props) {
  const [state, formAction] = useActionState(addParticipantToTournament, initialState);
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);
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
      {selectedParticipant && <input type="hidden" name="participantId" value={selectedParticipant.id} />}

      <div className="flex gap-4 items-center">
        <div className="flex-3">
          <AutocompleteInput type={type} onSelect={setSelectedParticipant} query={query} setQuery={onSetQuery} />
        </div>
        <div className="flex-1">
          <CustomButton
            type="submit"
            variant="primary"
            className="w-full"
            size="md"
            icon={<PlusCircleIcon />}
            iconSize={6}>
            Add
          </CustomButton>
        </div>
      </div>
      {state.message && <p className="text-sm text-red-primary">{state.message}</p>}
    </form>
  );
}
