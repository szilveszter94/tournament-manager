import { tournamentTableHeaders } from "@/app/ui/tournament/constants";
import { getDropdownItemByKey } from "@/app/ui/tournament/helper";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/16/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ToggleFilterRowProps = {
  toggleFilterPanel: () => void;
  isFilterPanelOpen: boolean;
};

export default function ToggleFilterRow({
  toggleFilterPanel,
  isFilterPanelOpen,
}: ToggleFilterRowProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const toggleSort = (sortByValue: string) => {
    const params = new URLSearchParams(searchParams);
    const sortByItem = getDropdownItemByKey(
      searchParams.get("sortBy")?.toString()
    );
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
      <th
        onClick={toggleFilterPanel}
        className="cursor-pointer flex justify-center py-2 hover:bg-on-secondary"
      >
        {isFilterPanelOpen ? (
          <ChevronDoubleUpIcon
            title="Hide Filter Panel"
            className="h-5 w-5 text-foreground"
          />
        ) : (
          <ChevronDoubleDownIcon
            title="Show Filter Panel"
            className="h-5 w-5 text-foreground"
          />
        )}
      </th>
      {tournamentTableHeaders.map((sortItem) => (
        <th
          key={sortItem.value}
          onClick={() => toggleSort(sortItem.value)}
          className="border border-primary-border-color cursor-pointer px-4 py-2 text-left hover:bg-on-secondary"
        >
          <div className="flex items-center gap-1">
            <span className="capitalize">{sortItem.name}</span>
            {getPathValue("sortBy") === sortItem.value &&
              (getPathValue("sortOrder") === "asc" ? (
                <ArrowUpIcon className="h-4 w-4" />
              ) : (
                <ArrowDownIcon className="h-4 w-4" />
              ))}
          </div>
        </th>
      ))}
    </tr>
  );
}
