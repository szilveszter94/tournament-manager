"use client";

import { Tournament } from "@/generated/api";

type TournamentGroupsProps = {
  tournament: Tournament;
};

export default function CompleteGroupStages({ tournament }: TournamentGroupsProps) {
  return <div className="overflow-x-auto">{tournament.name}</div>;
}
