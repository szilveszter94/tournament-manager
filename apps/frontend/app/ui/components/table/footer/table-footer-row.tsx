import { tournamentTableHeaders } from "@/app/ui/tournament/constants";
import Pagination from "./components/pagination";
import ItemsPerPage from "./components/items-per-page";

type footerProps = {
  totalPages: number;
};

export default function TableFooterRow({ totalPages }: footerProps) {
  return (
    <tfoot>
      <tr>
        <td
          colSpan={tournamentTableHeaders.length + 1}
          className="p-3 border-t border-primary-border-color"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-foreground opacity-70">
              Tournaments List
            </span>
            <Pagination totalPages={totalPages} />
            <ItemsPerPage />
          </div>
        </td>
      </tr>
    </tfoot>
  );
}
