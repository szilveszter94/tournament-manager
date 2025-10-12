"use client";

import { ParticipantType } from "@/generated/api";
import CustomButton from "../components/custom-button/custom-button";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { addParticipantToTournament } from "@/app/participant/actions";
import { useActionState } from "react";
import { initialState } from "@/lib/custom-models/common";

type CreateParticipantProps = {
  type: ParticipantType;
  tournamentId: number;
};

export default function CreateParticipantForm({
  type,
  tournamentId,
}: CreateParticipantProps) {
  const [state, formAction] = useActionState(
    addParticipantToTournament,
    initialState
  );

  return (
    <form action={formAction}>
      <input type="hidden" name="type" value={type} />
      <input type="hidden" name="tournamentId" value={tournamentId} />
      <input
        type="text"
        name="name"
        placeholder="John Doe"
        className="w-full rounded-md border px-3 py-2 text-sm"
        required
        aria-describedby="name-error"
      />
      {/* Submit */}
      <CustomButton
        type="submit"
        variant="primary"
        size="lg"
        icon={<CheckCircleIcon />}
        iconSize={8}
      >
        Submit
      </CustomButton>
      {state.message && <p className="text-sm text-red-500">{state.message}</p>}
    </form>
  );
}
