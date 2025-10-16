import { deleteParticipantFromTournament } from "@/app/participant/actions";
import { initialState } from "@/lib/custom-models/common";
import { TrashIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { useActionState } from "react";

type DeleteParticipantProps = {
  participantId: number;
  tournamentId: number;
  className?: string;
};

export function DeleteParticipant({ participantId, tournamentId, className = "" }: DeleteParticipantProps) {
  const deleteParticipant = deleteParticipantFromTournament.bind(null, participantId, tournamentId);
  const [state, formAction] = useActionState(deleteParticipant, initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!window.confirm("Are you sure you want to remove this participant?")) {
      e.preventDefault();
    }
  };

  return (
    <form
      className={clsx({ className: className }, "flex items-center")}
      action={formAction}
      onSubmit={handleSubmit}>
      <button type="submit">
        <TrashIcon title="Delete Participant" className="cursor-pointer w-6 h-6 text-red-primary" />
      </button>
      {state.message && <p className="text-sm text-red-primary">{state.message}</p>}
    </form>
  );
}
