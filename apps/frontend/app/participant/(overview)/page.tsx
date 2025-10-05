import ParticipantList from "@/app/ui/participant/participant-list";
import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_ITEMS_PER_PAGE,
} from "@/lib/global-constants";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    itemsPerPage: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || DEFAULT_CURRENT_PAGE;
  const itemsPerPage =
    Number(searchParams?.itemsPerPage) || DEFAULT_ITEMS_PER_PAGE;

  return (
    <main className="p-8 max-w-full mx-auto">
      <div>
        <ParticipantList
          query={query}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </main>
  );
}
