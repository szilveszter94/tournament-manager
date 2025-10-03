import TournamentList from "@/app/ui/tournament/tournament-list";
import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_ITEMS_PER_PAGE,
} from "@/lib/global-constants";
import {
  parseSortBy,
  parseSortOrder,
  parseStatusList,
  parseTypeList,
} from "@/lib/utils";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    sortBy?: string;
    sortOrder?: string;
    status: string | string[];
    type: string | string[];
    itemsPerPage: string;
    createdFrom: string;
    createdTo: string;
    updatedFrom: string;
    updatedTo: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || DEFAULT_CURRENT_PAGE;
  const sortOrder = parseSortOrder(searchParams?.sortOrder);
  const sortBy = parseSortBy(searchParams?.sortBy);
  const statusList = parseStatusList(searchParams?.status);
  const typeList = parseTypeList(searchParams?.type);
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
          createdFrom = {createdFrom}
          createdTo = {createdTo}
          updatedFrom = {updatedFrom}
          updatedTo = {updatedTo}
        />
      </div>
    </main>
  );
}
