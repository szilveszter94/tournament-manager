import { Column } from "@/lib/global-constants";
import Search from "./search";
import FilterCheckbox from "./filter-checkbox";
import { RangeFilter } from "@/generated/backend/shared";
import DateRangePicker from "./date-range-picker";

type FilterRowProps<T> = {
  columns: Column<T>[];
};

export default function FilterRow<T>({ columns }: FilterRowProps<T>) {
  return (
    <tr>
      {columns.map((col) =>
        col.buttons ? (
          <th
            key={col.value}
            className="border border-primary-border-color"
          ></th>
        ) : (
          <th
            key={col.value}
            className="border border-primary-border-color px-4"
          >
            {col.filterType === "date" ? (
              <DateRangePicker
                name={col.name.split(" ")[0]}
                value={col.typeValues as RangeFilter}
              />
            ) : col.filterType === "checkbox" ? (
              <FilterCheckbox
                filterTypeValue={col.value}
                filterTypeName={col.name}
                filterTypeValues={col.typeValues}
              />
            ) : (
              <Search placeholder={col.name} />
            )}
          </th>
        )
      )}
    </tr>
  );
}
