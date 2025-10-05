import { tournamentTableHeaders } from "@/app/ui/tournament/constants";
import Pagination from "./components/pagination";
import ItemsPerPage from "./components/items-per-page";
import { PaginationData } from "@/generated/api";

type FooterProps = {
  paginationData: PaginationData | undefined;
};

export default function TableFooterRow({ paginationData }: FooterProps) {
  return (
    <tfoot>
      <tr>
        <td
          colSpan={tournamentTableHeaders.length + 1}
          className="p-3 border-t border-primary-border-color"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-foreground opacity-70">
              {`${paginationData?.totalItems} items found`}
            </span>
            <Pagination paginationData={paginationData}  />
            <ItemsPerPage />
          </div>
        </td>
      </tr>
    </tfoot>
  );
}
