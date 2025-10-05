import { fetchTournaments } from "@/app/tournament/api";
import React from "react";
import { TournamentQueryParams } from "@/lib/custom-models";
import Table from "../components/table/table";
import { tournamentTableHeaders } from "./constants";

export default async function TournamentList({
  query,
  currentPage,
  sortBy,
  sortOrder,
  statusList,
  typeList,
  itemsPerPage,
  createdFrom,
  createdTo,
  updatedFrom,
  updatedTo,
}: TournamentQueryParams) {
  const response = await fetchTournaments(
    query,
    itemsPerPage,
    currentPage,
    sortBy,
    sortOrder,
    statusList,
    typeList,
    createdFrom,
    createdTo,
    updatedFrom,
    updatedTo
  );

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
