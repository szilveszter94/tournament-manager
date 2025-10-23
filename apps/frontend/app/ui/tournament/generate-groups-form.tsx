import { ForwardIcon } from "@heroicons/react/16/solid";
import CustomButton from "../components/custom-button/custom-button";
import { useActionState } from "react";
import { generateGroupStages } from "@/app/tournament/actions";
import { ParticipantTournament } from "@/generated/api";
import { initialState } from "@/lib/custom-models/common";

type GenerateGroupFormProps = {
  data: Record<string, ParticipantTournament[]>;
  tournamentId: number;
};

export default function GenerateGroupsForm({ data, tournamentId }: GenerateGroupFormProps) {
  const generateGroupsAction = generateGroupStages.bind(null, data, tournamentId);
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
