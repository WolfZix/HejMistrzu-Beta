import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Input } from "../ui/input";
import { AnimatePresence, motion } from "framer-motion";
import type { Category } from "@/types/store";
import { useState } from "react";

type StoreFiltersProps = {
  search: string;
  setSearch: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  isSortOpen: boolean;
  setIsSortOpen: (value: boolean) => void;
  categories: Category[];
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
  categories,
  selectedCategory,
  setSelectedCategory,
  sortOptions,
}: StoreFiltersProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<number[]>([]);

  const getChildren = (parentId: number) => {
    return categories.filter((category) => category.parent === parentId);
  };

  const renderMobileCategory = (
    category: Category,
    level = 0,
    path: number[] = []
  ) => {
    const children = getChildren(category.id);
    const isExpanded = expandedMobileCategories.includes(category.id);
    const isSelected = selectedCategory === category.id;

    return (
      <div key={category.id}>
        <div
          className="flex items-center"
          style={{ marginLeft: `${level * 12}px` }}
        >
          <button
            onClick={() => {
              setSelectedCategory(category.id);

              if (children.length === 0) {
                setIsCategoryOpen(false);
                return;
              }

              setExpandedMobileCategories(
                isExpanded ? path : [...path, category.id]
              );
            }}
            className={`flex-1 text-left px-3 py-2.5 rounded-lg text-sm ${
              isSelected
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted/30"
            }`}
          >
            {category.name}
          </button>

          {children.length > 0 && (
            <button
              onClick={() => {
                setExpandedMobileCategories(
                  isExpanded ? path : [...path, category.id]
                );
              }}
              className="p-2 text-muted-foreground"
            >
              {isExpanded ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
          )}
        </div>

        <AnimatePresence>
          {isExpanded && children.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {children.map((child) =>
                renderMobileCategory(
                  child,
                  level + 1,
                  [...path, category.id]
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-8 items-end">
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
      <div className="lg:hidden">
        <label className="text-xs text-muted-foreground mb-1 block">
          Kategorie
        </label>
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="w-full h-11 px-4 rounded-xl border border-border bg-card flex items-center justify-between"
        >
          <span>
            {selectedCategory === null
              ? "Wszystkie kategorie"
              : categories.find((category) => category.id === selectedCategory)?.name}
          </span>

          {isCategoryOpen ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        <AnimatePresence>
          {isCategoryOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-xl border border-border bg-card p-2 overflow-y-auto max-h-[60vh]"
            >
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setIsCategoryOpen(false);
                  setExpandedMobileCategories([]);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm ${
                  selectedCategory === null
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted/30"
                }`}
              >
                Wszystkie
              </button>
              { categories.filter((category) => category.parent === 0).map((category) => renderMobileCategory(category)) }
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}