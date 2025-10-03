import { Tournament } from "@/generated/api";
import TableBody from "./body/table-body";
import TableHeaderRow from "./header/table-header-row";
import TableFooterRow from "./footer/table-footer-row";

export default function Table({
  data,
  totalPages,
}: {
  data: Tournament[];
  totalPages: number;
}) {
  return (
    <table className="min-w-full border border-primary-border-color border-collapse text-sm">
      <TableHeaderRow />
      <TableBody tournament={data} />
      <TableFooterRow totalPages={totalPages} />
    </table>
  );
}
