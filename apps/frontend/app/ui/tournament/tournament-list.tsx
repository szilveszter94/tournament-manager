import { fetchTournaments } from "@/app/tournament/api";
import React from "react";
import Table from "../components/table/table";
import { tournamentTableHeaders } from "./constants";
import { TournamentQueryParams } from "@/lib/custom-models/tournament";

export default async function TournamentList(params: TournamentQueryParams) {
  const response = await fetchTournaments(params);

  if (!response.data) {
    return;
  }

  return (
    <div className="overflow-x-auto">
      <Table
        columns={tournamentTableHeaders}
        data={response.data}
        paginationData={response.pagination}
      />
    </div>
  );
}
