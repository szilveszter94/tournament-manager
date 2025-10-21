import React from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import { ParticipantTournament } from "@/generated/api";
import { DeleteParticipant } from "../../tournament/delete-form";
import clsx from "clsx";

type ItemProps = {
  id: number;
  index: number;
  column: string;
  participant: ParticipantTournament;
  className?: string;
};

export function Item({ id, index, column, participant, className }: ItemProps) {
  const { ref, isDragging } = useSortable({
    id,
    index,
    type: "item",
    accept: "item",
    group: column,
  });

  return (
    <div
      className={clsx(
        "Item p-2 bg-primary cursor-grab flex justify-between items-center rounded-xl m-2",
        className && className
      )}
      ref={ref}
      data-dragging={isDragging}>
      <p className="text-xl">{participant?.participant?.name ?? `Anonymus-${participant.id}`}</p>
      <DeleteParticipant participantId={participant.participantId} tournamentId={participant.tournamentId} />
    </div>
  );
}
