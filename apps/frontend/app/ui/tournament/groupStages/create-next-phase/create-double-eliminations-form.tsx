import { ForwardIcon } from "@heroicons/react/16/solid";
import { useActionState, useEffect } from "react";
import { generateDoubleEliminations } from "@/app/tournament/actions";
import { initialState } from "@/lib/custom-models/common";
import { useDispatch } from "react-redux";
import { showSnackbar } from "@/app/store/features/snackbar/snackbarSlice";
import CustomButton from "@/app/ui/components/custom-button/custom-button";
import { ParticipantGroup } from "@/generated/api";

type GenerateGroupFormProps = {
  data: ParticipantGroup[];
  tournamentId: number;
};

export default function CreateDoubleEliminationsForm({ data, tournamentId }: GenerateGroupFormProps) {
  const dispatch = useDispatch();
  const generateGroupsAction = generateDoubleEliminations.bind(null, data, tournamentId);
  const [state, formAction, isPending] = useActionState(generateGroupsAction, initialState);

  useEffect(() => {
    if (!isPending && state.message) {
      dispatch(
        showSnackbar({
          message: state.message,
          type: state.success ? "success" : "error",
        })
      );
    }
  }, [state, isPending, dispatch]);

  return (
    <form action={formAction}>
      <CustomButton type="submit" icon={<ForwardIcon />} variant="primary">
        Next
      </CustomButton>
    </form>
  );
}
