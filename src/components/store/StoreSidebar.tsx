import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp, ShieldCheck, Tag, Truck, FilterX } from "lucide-react";
import type { Category } from "@/types/store";

type StoreSidebarProps = {
  categories: Category[];
  rootCategories: Category[];
  selectedCategory: number | null;
  expandedCategory: number | null;
  productsCount: number;
  setSelectedCategory: (id: number | null) => void;
  setExpandedCategory: (id: number | null) => void;
  hasChildren: (categoryId: number) => boolean;
  onlyInStock: boolean;
  setOnlyInStock: (onlyInStock: boolean) => void;
  onlyPromotions: boolean;
  setOnlyPromotions: (onlyPromotions: boolean) => void;
}

export default function StoreSidebar({
  categories,
  rootCategories,
  selectedCategory,
  expandedCategory,
  productsCount,
  setSelectedCategory,
  setExpandedCategory,
  hasChildren,
  onlyInStock,
  setOnlyInStock,
  onlyPromotions,
  setOnlyPromotions,
}: StoreSidebarProps) {

  function resetFilters() {
    setSelectedCategory(null);
    setExpandedCategory(null);
    setOnlyPromotions(false);
    setOnlyInStock(false);
  }

  return (
    <aside className="hidden lg:block w-56 shrink-0">
      <div className="glass rounded-xl p-5 sticky top-28">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-heading text-base tracking-wider text-primary">Kategorie</h3>
          <AnimatePresence>
            {(selectedCategory !== null || onlyPromotions || onlyInStock) && (
              <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              onClick={() => resetFilters()}
              className="
              transition-colors
              text-xs
              flex gap-1
              text-muted-foreground
              hover:text-foreground
              ">
                <FilterX size={14} /> Wyczyść
              </motion.button>
            )}
          </AnimatePresence>
        </div>
          <div className="space-y-1 mb-1">
          <button
            onClick={() => setOnlyInStock(!onlyInStock)}
            className={`
              w-full flex gap-2 items-center px-3 py-2 rounded-lg text-sm border transition-all
              ${
                onlyInStock
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "text-muted-foreground border-muted-foreground/20 hover:bg-muted/30 hover:text-foreground"
              }
            `}
          >
            <Check size={14} /> Tylko dostępne
          </button>

          <button
            onClick={() => setOnlyPromotions(!onlyPromotions)}
            className={`
              w-full flex gap-2 items-center px-3 py-2 rounded-lg text-sm border transition-all
              ${
                onlyPromotions
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "text-muted-foreground border-muted-foreground/20 hover:bg-muted/30 hover:text-foreground"
              }
            `}
          >
            <Tag size={14} />Tylko promocje
          </button>
        </div>
        <div className="space-y-1">
          <button
            onClick={() => {
              setSelectedCategory(null);
              setExpandedCategory(null);
            }}
            className={`w-full flex justify-between px-3 py-2.5 rounded-lg text-sm border border-transparent font-medium transition-all ${
              selectedCategory === null
                ? "bg-primary/10 text-primary border border-primary/20"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/30 border-transparent"
            }`}
          >
            <span>
              Wszystkie  
            </span>
            <span>
              {productsCount}
            </span>
          </button>
          {rootCategories.map((entry) => (
            <div key={entry.id}>
              <button
                onClick={() => {
                  setExpandedCategory(null);
                  setSelectedCategory(entry.id);
                  if (hasChildren(entry.id)) {
                    setExpandedCategory(
                      expandedCategory === entry.id ? null : entry.id
                    );
                  }
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                  selectedCategory === entry.id
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30 border-transparent"
                }`}
              >
                {hasChildren(entry.id) ? (
                  <div className="flex gap-1">
                  <span>
                    {entry.name}
                  </span> 
                  <span className="mr-auto">
                    {expandedCategory === entry.id ? (
                      <ChevronUp size={18}/>
                    ) : (
                      <ChevronDown size={18}/>
                    )}
                  </span>
                  <span>
                    {entry.count}
                  </span>
                </div>
                ) : (
                  <span className="flex justify-between">
                    <span>{entry.name}</span>
                    <span>{entry.count}</span>
                  </span>
                  )}
              </button>

              <AnimatePresence>
                {hasChildren(entry.id) && expandedCategory === entry.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 mt-1 space-y-1 overflow-hidden"
                  >
                    {categories
                      .filter((category) => category.parent === entry.id)
                      .map((subcategory) => (
                        <button
                          key={subcategory.id}
                          onClick={() => {
                            setSelectedCategory(subcategory.id)
                          }}
                          className={`w-full flex justify-between px-3 py-2 text-sm border border-transparent rounded-lg transition-all ${
                            selectedCategory === subcategory.id
                              ? "bg-primary/10 text-primary border border-primary/20"
                              : "text-muted-foreground hover:text-primary border-transparent"
                          }`}
                        >
                          <span>{subcategory.name}</span>
                          <span>{subcategory.count}</span>
                        </button>
                      ))
                    }
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-5 border-t border-border space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Truck className="w-3.5 h-3.5 text-primary/70" />
            Darmowa dostawa od 299zł
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="w-3.5 h-3.5 text-primary/70" />
            Gwarancja jakości
          </div>
        </div>
      </div>
    </aside>
  )
}