import ParticipantList from "@/app/ui/participant/participant-list";
import { ParticipantSearchParams } from "@/lib/custom-models/participant";
import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_ITEMS_PER_PAGE,
} from "@/lib/global-constants";
import { parseParticipantType, parseSortOrder, parseParticipantSortBy } from "@/lib/utils";

export default async function Page(props: {
  searchParams?: Promise<ParticipantSearchParams>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || DEFAULT_CURRENT_PAGE;
  const itemsPerPage =
    Number(searchParams?.itemsPerPage) || DEFAULT_ITEMS_PER_PAGE;
  const sortOrder = parseSortOrder(searchParams?.sortOrder);
  const sortBy = parseParticipantSortBy(searchParams?.sortBy);
  const typeList = parseParticipantType(searchParams?.type);
  const createdFrom = searchParams?.createdFrom ?? "";
  const createdTo = searchParams?.createdTo ?? "";
  const updatedFrom = searchParams?.updatedFrom ?? "";
  const updatedTo = searchParams?.updatedTo ?? "";
  const eloFrom = searchParams?.eloFrom ?? "";
  const eloTo = searchParams?.eloTo ?? "";
  const winsFrom = searchParams?.winsFrom ?? "";
  const winsTo = searchParams?.winsTo ?? "";
  const lossesFrom = searchParams?.lossesFrom ?? "";
  const lossesTo = searchParams?.lossesTo ?? "";

  return (
    <main className="p-8 max-w-full mx-auto">
      <div>
        <ParticipantList
          query={query}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          sortOrder={sortOrder}
          sortBy={sortBy}
          typeList={typeList}
          createdFrom={createdFrom}
          createdTo={createdTo}
          updatedFrom={updatedFrom}
          updatedTo={updatedTo}
          eloFrom={eloFrom}
          eloTo={eloTo}
          winsFrom={winsFrom}
          winsTo={winsTo}
          lossesFrom={lossesFrom}
          lossesTo={lossesTo}
        />
      </div>
    </main>
  );
}
