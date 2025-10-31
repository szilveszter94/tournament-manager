import { getDropdownItemByKey } from "@/app/ui/components/table/header/components/helper";
import { Column } from "@/lib/global-constants";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/16/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type HeaderRowProps<T> = {
  columns: Column<T>[];
};

export default function HeaderRow<T>({ columns }: HeaderRowProps<T>) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const toggleSort = (sortByValue: string) => {
    const params = new URLSearchParams(searchParams);
    const sortByItem = getDropdownItemByKey(searchParams.get("sortBy")?.toString());
    const sortOrder = searchParams.get("sortOrder")?.toString();
    const toggledSortOrder = sortOrder === "asc" ? "desc" : "asc";

    if (sortByItem.name !== sortByValue) {
      params.set("sortBy", sortByValue);
    }
    params.set("sortOrder", toggledSortOrder);
    replace(`${pathname}?${params.toString()}`);
  };

  const getPathValue = (value: string) => {
    return searchParams.get(value)?.toString();
  };

  return (
    <tr>
      {columns.map((col) =>
        col.buttons ? (
          <th key={col.value.toString()} className="border border-primary-border-color px-4 py-2 text-left">
            Buttons
          </th>
        ) : (
          <th
            key={col.value.toString()}
            onClick={() => toggleSort(col.value.toString())}
            className="border border-primary-border-color cursor-pointer px-4 py-2 text-left hover:bg-on-secondary">
            <div className="flex items-center gap-1">
              <span className="capitalize">{col.name}</span>
              {getPathValue("sortBy") === col.value &&
                (getPathValue("sortOrder") === "asc" ? (
                  <ArrowUpIcon className="h-4 w-4" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4" />
                ))}
            </div>
          </th>
        )
      )}
    </tr>
  );
}
