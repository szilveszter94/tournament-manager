import TournamentList from "@/app/ui/tournament/tournament-list";
import { TournamentSearchParams } from "@/lib/custom-models/tournament";
import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_ITEMS_PER_PAGE,
} from "@/lib/global-constants";
import {
  parseTournamentSortBy,
  parseSortOrder,
  parseTournamentStatus,
  parseParticipantType,
} from "@/lib/utils";

export default async function Page(props: {
  searchParams?: Promise<TournamentSearchParams>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || DEFAULT_CURRENT_PAGE;
  const sortOrder = parseSortOrder(searchParams?.sortOrder);
  const sortBy = parseTournamentSortBy(searchParams?.sortBy);
  const statusList = parseTournamentStatus(searchParams?.status);
  const typeList = parseParticipantType(searchParams?.type);
  const itemsPerPage =
    Number(searchParams?.itemsPerPage) || DEFAULT_ITEMS_PER_PAGE;
  const createdFrom = searchParams?.createdFrom ?? "";
  const createdTo = searchParams?.createdTo ?? "";
  const updatedFrom = searchParams?.updatedFrom ?? "";
  const updatedTo = searchParams?.updatedTo ?? "";

  return (
    <main className="p-8 max-w-full mx-auto">
      <div>
        <TournamentList
          query={query}
          currentPage={currentPage}
          sortBy={sortBy}
          sortOrder={sortOrder}
          statusList={statusList}
          typeList={typeList}
          itemsPerPage={itemsPerPage}
          createdFrom={createdFrom}
          createdTo={createdTo}
          updatedFrom={updatedFrom}
          updatedTo={updatedTo}
        />
      </div>
    </main>
  );
}
