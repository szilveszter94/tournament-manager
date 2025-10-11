import Pagination from "./components/pagination";
import ItemsPerPage from "./components/items-per-page";
import { PaginationData } from "@/generated/api";

type FooterProps = {
  paginationData: PaginationData | undefined;
  columnsLength: number;
};

export default function TableFooterRow({ paginationData, columnsLength }: FooterProps) {
  return (
    <tfoot>
      <tr>
        <td
          colSpan={columnsLength + 1}
          className="py-4 px-6 border-t border-primary-border-color"
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
