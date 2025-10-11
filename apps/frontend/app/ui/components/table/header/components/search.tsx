import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

type SearchProps = {
  placeholder: string;
};
export type SearchHandle = { clear: () => void };

function Search({ placeholder }: SearchProps, ref: React.Ref<SearchHandle>) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const getPathValue = () => {
    const v = searchParams.get("query");
    return v && v.trim() !== "" ? v : null;
  };

  useImperativeHandle(ref, () => ({
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
  }));

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      ref={inputRef}
      defaultValue={getPathValue()?.toString()}
      type="search"
      placeholder={`Search ${placeholder}`}
      onChange={(e) => handleSearch(e.target.value)}
      className="w-full rounded border border-secondary-border-color bg-secondary px-2 py-1 text-xs text-foreground placeholder-primary-border-color focus:border-secondary-border-color focus:outline-none"
    />
  );
}

export default forwardRef<SearchHandle, SearchProps>(Search);
