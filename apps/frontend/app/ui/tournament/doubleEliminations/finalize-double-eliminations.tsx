"use client";

import { initialState } from "@/lib/custom-models/common";
import { useActionState } from "react";
import { finalizeDoubleEliminations } from "@/app/tournament/actions";
import CustomButton from "../../components/custom-button/custom-button";
import { ForwardIcon } from "@heroicons/react/16/solid";

type FinalizeDoubleEliminationsProps = {
  tournamentId: number;
};

export default function FinalizeDoubleEliminations({ tournamentId }: FinalizeDoubleEliminationsProps) {
  const generateGroupsAction = finalizeDoubleEliminations.bind(null, tournamentId);
  const [state, formAction] = useActionState(generateGroupsAction, initialState);

  return (
    <form action={formAction}>
      <CustomButton type="submit" icon={<ForwardIcon />} variant="primary">
        Finalize Tournament
      </CustomButton>
      {state.message && <p className="text-sm text-red-primary">{state.message}</p>}
    </form>
  );
}
