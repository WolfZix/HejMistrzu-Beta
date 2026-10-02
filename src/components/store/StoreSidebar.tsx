import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp, ShieldCheck, Tag, Truck, FilterX, Heart } from "lucide-react";
import type { Category } from "@/types/store";
import { useState } from "react";

type StoreSidebarProps = {
  categories: Category[];
  rootCategories: Category[];
  selectedCategory: number | null;
  expandedCategory: number | null;
  productsCount: number;
  setSelectedCategory: (id: number | null) => void;
  setExpandedCategory: (id: number | null) => void;
  onlyInStock: boolean;
  setOnlyInStock: (onlyInStock: boolean) => void;
  onlyPromotions: boolean;
  setOnlyPromotions: (onlyPromotions: boolean) => void;
  onlyWishlist: boolean;
  setOnlyWishlist: (onlyWishlist: boolean) => void;
}

export default function StoreSidebar({
  categories,
  rootCategories,
  selectedCategory,
  expandedCategory,
  productsCount,
  setSelectedCategory,
  setExpandedCategory,
  onlyInStock,
  setOnlyInStock,
  onlyPromotions,
  setOnlyPromotions,
  onlyWishlist,
  setOnlyWishlist,
}: StoreSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  function resetFilters() {
    setSelectedCategory(null);
    setExpandedCategory(null);
    setExpandedCategories([]);
    setOnlyPromotions(false);
    setOnlyInStock(false);
    setOnlyWishlist(false);
  }

  const renderCategory = (category: Category, level = 0) => {
    const children = categories.filter((child) => child.parent === category.id);
    const isSelected = selectedCategory === category.id;
    const isRoot = level === 0;
    const isExpanded = isRoot ? expandedCategory === category.id : expandedCategories.includes(category.id);

    return (
      <div key={category.id}>
        <button
          onClick={() => {
            setSelectedCategory(category.id);
            if (children.length === 0) return;
            if (isRoot) {
              const willExpand = expandedCategory !== category.id;
              setExpandedCategory(willExpand ? category.id : null);
              setExpandedCategories([]);
              return;
            }
            setExpandedCategories((prev) =>
              prev.includes(category.id)
                ? prev.filter((id) => id !== category.id)
                : [...prev, category.id]
            );
          }}
          className={`w-full flex justify-between px-3 py-2.5 rounded-lg text-sm border transition-all ${
            isSelected
              ? "bg-primary/10 text-primary border-primary/20"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/30 border-transparent"
          }`}
          style={{ paddingLeft: `${12 + level * 10}px` }}
        >
          <span className="flex items-center gap-1 min-w-0">
            {category.name}
            {children.length > 0 && (isExpanded ? ( <ChevronUp size={16} /> ) : ( <ChevronDown size={16} /> ))}
          </span>
          <span>{category.count}</span>
        </button>

        <AnimatePresence>
          {isExpanded && children.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {children.map((child) => renderCategory(child, level + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <aside className="hidden md:block w-72 shrink-0">
      <div className="glass rounded-xl p-5">
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
            <Tag size={14} />Na promocji
          </button>

          <button
            onClick={() => setOnlyWishlist(!onlyWishlist)}
            className={`
              w-full flex gap-2 items-center px-3 py-2 rounded-lg text-sm border transition-all
              ${
                onlyWishlist
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "text-muted-foreground border-muted-foreground/20 hover:bg-muted/30 hover:text-foreground"
              }
            `}
          >
            <Heart size={14} />Polubione
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
          {rootCategories.map((category) => renderCategory(category))}
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