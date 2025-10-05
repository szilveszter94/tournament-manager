import { fetchParticipants } from "@/app/participant/api";
import { ParticipantQueryParams } from "@/lib/custom-models";
import Table from "../components/table/table";
import { participantColumns } from "./constants";

export default async function ParticipantList({
  query,
  currentPage,
  itemsPerPage,
}: ParticipantQueryParams) {
  const response = await fetchParticipants(query, itemsPerPage, currentPage);

  return (
    <div className="overflow-x-auto">
      <Table
        columns={participantColumns}
        data={response.data}
        paginationData={response.pagination}
      />
    </div>
  );
}
