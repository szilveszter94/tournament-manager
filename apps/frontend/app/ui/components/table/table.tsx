import TableBody from "./body/table-body";
import TableHeaderRow from "./header/table-header-row";
import TableFooterRow from "./footer/table-footer-row";
import { Column } from "@/lib/global-constants";
import { PaginationData } from "@/generated/api";

type TableProps<T> = {
  columns: Column<T>[];
  data: T[] | undefined;
  paginationData: PaginationData | undefined;
};

export default function Table<T>({ columns, data, paginationData }: TableProps<T>) {
  return (
    <table className="min-w-full border border-primary-border-color border-collapse text-sm">
      <TableHeaderRow columns={columns} />
      <TableBody columns={columns} data={data} />
      <TableFooterRow paginationData={paginationData} />
    </table>
  );
}
