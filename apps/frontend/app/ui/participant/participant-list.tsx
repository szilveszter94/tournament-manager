import { fetchParticipants } from "@/app/participant/api";
import Table from "../components/table/table";
import { participantColumns } from "./constants";
import { ParticipantQueryParams } from "@/lib/custom-models/participant";

export default async function ParticipantList(params: ParticipantQueryParams) {
  const response = await fetchParticipants(params);

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
