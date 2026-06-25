import { ChevronDown, Search } from "lucide-react";
import { Input } from "../ui/input";
import { AnimatePresence, motion } from "framer-motion";
import type { Category } from "@/types/store";

type StoreFiltersProps = {
  search: string;
  setSearch: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  isSortOpen: boolean;
  setIsSortOpen: (value: boolean) => void;
  rootCategories: Category[];
  selectedCategory: number | null;
  setSelectedCategory: (id: number | null) => void;
  sortOptions: {
    value: string;
    label: string;
  }[];
};

export default function StoreFilters({
  search,
  setSearch,
  sortBy,
  setSortBy,
  isSortOpen,
  setIsSortOpen,
  rootCategories,
  selectedCategory,
  setSelectedCategory,
  sortOptions,
}: StoreFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-8">
      <div className="relative flex-1">
        <p className="text-xs text-muted-foreground mb-1">
          Szukaj produktów
        </p>
        <Search className="absolute left-3 top-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Znajdź coś dla siebie..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="pl-10 bg-card border-border focus:border-primary/50 h-11 rounded-xl"
        />
      </div>
      <div className="relative min-w-[220px]">
        <p className="text-xs text-muted-foreground mb-1">
          Sortowanie
        </p>

        <button
          onClick={() => setIsSortOpen(!isSortOpen)}
          className="
            w-full
            h-11
            px-4
            rounded-xl
            border
            border-border
            bg-card
            flex
            items-center
            justify-between
          "
        >
          <span>
            {sortOptions.find(
              option => option.value === sortBy
            )?.label}
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform ${
              isSortOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isSortOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="
                absolute
                top-full
                mt-1
                z-50
                w-full
                rounded-xl
                border
                border-border
                bg-card
                p-1
                "
            >
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSortBy(option.value);
                    setIsSortOpen(false);
                  }}
                  className="
                    w-full
                    text-left
                    p-2
                    rounded-md
                    hover:bg-primary
                    hover:text-black
                  "
                >
                  {option.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
              <div className="flex flex-wrap justify-center gap-2 lg:hidden">
                {rootCategories.map((entry, index) => (
                  <button
                    key={`${entry.id}-${index}`}
                    onClick={() => {
                      setSelectedCategory(entry.id)
                    }}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                      selectedCategory === entry.id ? "bg-primary/10 text-primary border border-primary/20" : "bg-card text-muted-foreground border border-border"
                    }`}
                  >
                    {entry.name}
                  </button>
                ))}
              </div>
            </div>
  )
}