import { deleteParticipantFromTournament } from "@/app/participant/actions";
import { initialState } from "@/lib/custom-models/common";
import { TrashIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { useActionState, useRef } from "react";
import { useConfirm } from "@/app/providers/confirm-provider";

type DeleteParticipantProps = {
  participantId: number;
  tournamentId: number;
  className?: string;
};

export function DeleteParticipantForm({ participantId, tournamentId, className = "" }: DeleteParticipantProps) {
  const deleteParticipant = deleteParticipantFromTournament.bind(null, participantId, tournamentId);
  const [state, formAction] = useActionState(deleteParticipant, initialState);
  const formRef = useRef<HTMLFormElement | null>(null);
  const confirm = useConfirm();

  const onDeleteClick = async () => {
    const ok = await confirm({
      title: "Remove participant?",
      message: "Are you sure you want to remove this participant from the tournament?",
    });
    if (ok) {
      formRef.current?.requestSubmit();
    }
  };

  return (
    <form ref={formRef} className={clsx({ className: className }, "flex items-center")} action={formAction}>
      <button type="button" onClick={onDeleteClick}>
        <TrashIcon title="Delete Participant" className="cursor-pointer w-6 h-6 text-red-primary" />
      </button>
      {state.message && <p className="text-sm text-red-primary">{state.message}</p>}
    </form>
  );
}
