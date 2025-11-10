"use client";

import { initialState } from "@/lib/custom-models/common";
import { useActionState } from "react";
import { updateDoubleEliminations } from "@/app/tournament/actions";
import CustomButton from "../../components/custom-button/custom-button";
import { ForwardIcon } from "@heroicons/react/16/solid";

type CreateNextRoundFormProps = {
  tournamentId: number;
};

export default function CreateNextRoundForm({ tournamentId }: CreateNextRoundFormProps) {
  const generateGroupsAction = updateDoubleEliminations.bind(null, tournamentId);
  const [state, formAction] = useActionState(generateGroupsAction, initialState);

  return (
    <form action={formAction}>
      <CustomButton type="submit" icon={<ForwardIcon />} variant="primary">
        Next Round
      </CustomButton>
      {state.message && <p className="text-sm text-red-primary">{state.message}</p>}
    </form>
  );
}
