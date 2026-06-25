import { Search } from "lucide-react";
import FormSelect from "@/components/Forms/FormSelect";
import { Input } from "@/components/ui/input";

type TableFiltersProps = {
  label: string;
  search: string;
  setSearch: (value: string) => void;

  sortBy: string;
  setSortBy: (value: string) => void;

  sortOptions: {
    value: string;
    label: string;
  }[];

  button?: React.ReactNode;
};

export default function TableFilters({
  label,
  search,
  setSearch,
  sortBy,
  setSortBy,
  sortOptions,
  button,
}: TableFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-end justify-between">
      <div className="flex-1 flex-col gap-2">
        <p className="text-sm mb-2">
          {label}
        </p>
        <div className="relative">
          <Input
            placeholder="Szukaj..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="pl-10 glass border-border focus:border-primary/50 py-6 rounded-xl"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      <FormSelect
        label={"Sortuj"}
        className="glass"
        value={sortOptions.find(option => option.value === sortBy)?.label}
        onChange={setSortBy}
        options={sortOptions}
      />
      {button}
    </div>
  );
}