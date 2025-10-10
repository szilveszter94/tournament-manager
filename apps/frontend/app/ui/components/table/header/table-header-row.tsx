"use client";

import { Column } from "@/lib/global-constants";
import HeaderRow from "./components/header-row";
import FilterRow from "./components/filter-row";

type TableHeaderProps<T> = {
  columns: Column<T>[];
};

export default function TableHeaderRow<T>({ columns }: TableHeaderProps<T>) {
  return (
    <thead className="bg-secondary text-foreground">
      <HeaderRow columns={columns} />
      <FilterRow columns={columns} />
    </thead>
  );
}
