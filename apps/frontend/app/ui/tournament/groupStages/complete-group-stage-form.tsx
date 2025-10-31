"use client";

import { useActionState } from "react";
import CustomButton from "../../components/custom-button/custom-button";
import { completeGroupStage } from "@/app/tournament/actions";
import { initialState } from "@/lib/custom-models/common";
import { ForwardIcon } from "@heroicons/react/16/solid";

type CompleteGroupStageFormProps = {
  phaseId: number | undefined;
  tournamentId: number;
};

export default function CompleteGroupStageForm({ phaseId, tournamentId }: CompleteGroupStageFormProps) {
  const generateGroupsAction = completeGroupStage.bind(null, phaseId, tournamentId);
  const [state, formAction] = useActionState(generateGroupsAction, initialState);

  return (
    <form action={formAction}>
      <CustomButton type="submit" icon={<ForwardIcon />} variant="primary">
        Next
      </CustomButton>
      {state.message && <p className="text-sm text-red-primary">{state.message}</p>}
    </form>
  );
}
