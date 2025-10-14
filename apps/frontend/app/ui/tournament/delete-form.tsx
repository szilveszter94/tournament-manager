import { deleteParticipantFromTournament } from "@/app/participant/actions";
import { initialState } from "@/lib/custom-models/common";
import { TrashIcon } from "@heroicons/react/16/solid";
import { useActionState } from "react";

export function DeleteParticipant({
  participantId,
  tournamentId,
}: {
  participantId: number;
  tournamentId: number;
}) {
  const deleteParticipant = deleteParticipantFromTournament.bind(
    null,
    participantId,
    tournamentId
  );
  const [state, formAction] = useActionState(deleteParticipant, initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!window.confirm("Are you sure you want to remove this participant?")) {
      e.preventDefault();
    }
  };

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <button type="submit">
        <TrashIcon
          title="Delete Participant"
          className="cursor-pointer w-5 h-5 text-red-primary"
        />
      </button>
      {state.message && <p className="text-sm text-red-primary">{state.message}</p>}
    </form>
  );
}
