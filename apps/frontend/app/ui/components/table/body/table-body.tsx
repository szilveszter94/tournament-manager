import { Column } from "@/lib/global-constants";
import {
  ArrowTopRightOnSquareIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

type TableBodyProps<T> = {
  columns: Column<T>[];
  data: T[] | undefined;
};

export default function TableBody<T>({ columns, data }: TableBodyProps<T>) {
  const getDate = (row: T, key: keyof T): string => {
    const value = row[key];

    if (typeof value === "string") {
      return value.split("T")[0];
    }

    if (value instanceof Date) {
      return value.toISOString().split("T")[0];
    }

    return "";
  };

  return (
    <tbody>
      {data?.map((row, i) => (
        <tr
          key={i}
          className="border-t border-primary-border-color hover:bg-on-secondary"
        >
          {columns.map((col, j) => (
            <td
              key={j}
              className="border border-primary-border-color px-4 py-2"
            >
              {col.buttons?.length ? (
                <div className="flex gap-3 justify-center py-2">
                  {col.buttons.map((b, id) =>
                    b.type === "edit" ? (
                      <Link
                        key={id}
                        title="Open Tournament"
                        href={`${b.path}/${row[col.value]}`}
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5 text-icon" />
                      </Link>
                    ) : b.type === "delete" ? (
                      <TrashIcon
                        key={id}
                        title="Delete Tournament"
                        className="cursor-pointer w-5 h-5 text-red-500"
                      />
                    ) : (
                      ""
                    )
                  )}
                </div>
              ) : col.dataType === "date" ? (
                <span>{getDate(row, col.value)}</span>
              ) : (
                <span>{String(row[col.value])}</span>
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
