/* eslint-disable react-hooks/exhaustive-deps */
import { ForwardIcon } from "@heroicons/react/16/solid";
import CustomButton from "../../components/custom-button/custom-button";
import { useActionState, useEffect, useState } from "react";
import { generateGroupStages } from "@/app/tournament/actions";
import { ParticipantTournament } from "@/generated/api";
import { initialState } from "@/lib/custom-models/common";
import { useDispatch } from "react-redux";
import { showSnackbar } from "@/app/store/features/snackbar/snackbarSlice";

type GenerateGroupFormProps = {
  data: Record<string, ParticipantTournament[]>;
  tournamentId: number;
};

export default function GenerateGroupsForm({ data, tournamentId }: GenerateGroupFormProps) {
  const dispatch = useDispatch();
  const generateGroupsAction = generateGroupStages.bind(null, data, tournamentId);
  const [state, formAction] = useActionState(generateGroupsAction, initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted && state.message) {
      dispatch(
        showSnackbar({
          message: state.message,
          type: state.success ? "success" : "error",
        })
      );
      setIsSubmitted(false);
    }
  }, [state.message, state.success, dispatch]);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <CustomButton type="submit" icon={<ForwardIcon />} variant="primary">
        Next
      </CustomButton>
    </form>
  );
}
