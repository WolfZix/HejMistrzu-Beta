import { useMemo, useState, type MouseEvent } from "react";
import { ChevronDown, ChevronRight, ChevronUp, Search, ShieldCheck, Truck } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { ProductCard } from "@/components/store/ProductCard";
import { ProductQuickView } from "@/components/store/ProductQuickView";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import type { StoreProduct } from "@/types/store";
import { normalizeText } from "@/utils/index";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Category = {
  id: number;
  name: string;
  parent: number;
  count: number;
};

export default function Store() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<StoreProduct | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [notified, setNotified] = useState<Record<number, boolean>>({});
  const { addItem } = useCart();
  const [products, setProducts] = useState<StoreProduct[]>([]);

  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const rootCategories =
    categories.filter((category) => category.parent === 0 );

  const selectedCategoryObject = 
    categories.find((category) => category.id === selectedCategory);

  const parentCategory =
    categories.find((category) => category.id === selectedCategoryObject?.parent);

  const hasChildren = (categoryId: number) =>
    categories.some((category) => category.parent === categoryId);

  const sortOptions = [
    { value: "default", label: "Domyślnie"},
    { value: "price-asc", label: "Cena rosnąco"},
    { value: "price-desc", label: "Cena malejąco"},
    { value: "name-asc", label: "Nazwa A-Z"},
    { value: "name-desc", label: "Nazwa Z-A"},
  ]

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortBy) {
      case "price-asc":
        return sorted.sort((a,b) => a.price - b.price);
      case "price-desc":
        return sorted.sort((a,b) => b.price - a.price);
      case "name-asc":
        return sorted.sort((a,b) => a.name.localeCompare(b.name));
      case "name-desc":
        return sorted.sort((a,b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  }, [products, sortBy])

    const filtered = useMemo(() => {
    return sortedProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === null ||
      product.categories.some((category) => category.id === selectedCategory);

    const matchesSearch =
      normalizeText(product.name).includes(normalizeText(search));

    return matchesCategory && matchesSearch;
  });
}, [products, selectedCategory, search]);

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((entry) => entry !== productId) : [...prev, productId]));
  };

  const handleAddToCart = (product: StoreProduct, event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    addItem(product);
    setNotified((prev) => ({ ...prev, [product.id]: true }));
    window.setTimeout(() => setNotified((prev) => ({ ...prev, [product.id]: false })), 1500);
  };

  useEffect(() => {
  async function fetchProducts() {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
  }
  fetchProducts();
}, []);


useEffect(() => {
  async function fetchCategories() {
    const response = await fetch("http://localhost:3000/categories");
    type Category = {
      id: number;
      name: string;
      parent: number;
      count: number;
    };

    const data: Category[] = await response.json();
    setCategories(data);
  }
  
  fetchCategories();
}, []);

  return (
    <div className="pt-20 pb-24">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Sklep"
          title="Produkty i akcesoria"
          subtitle="Karty, boostery, akcesoria i zestawy startowe — wszystko dla gracza."
        />

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="glass rounded-xl p-5 sticky top-28">
              <h3 className="font-heading text-sm tracking-wider text-primary mb-4">Kategorie</h3>
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
                    {products.length}
                  </span>
                </button>
                {rootCategories.map((entry) => (
                  <div key={entry.id}>
                    <button
                      onClick={() => {
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
                      className="ml-4 mt-1 space-y-1 overflow-hidden">
                        {categories
                          .filter((category) => category.parent === entry.id)
                          .map((subcategory) => (
                            <button
                              key={subcategory.id}
                              onClick={() => setSelectedCategory(subcategory.id)}
                              className={`w-full flex justify-between px-3 py-2 text-sm rounded-lg transition-all ${
                                selectedCategory === subcategory.id
                                  ? "bg-primary/10 text-primary border border-primary/20"
                                  : "text-muted-foreground hover:text-primary"
                              }`}
                            >
                              <span>{subcategory.name}</span>
                              <span>{subcategory.count}</span>
                            </button>
                          ))}
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

          <div className="flex-1 min-w-0">
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
                    onClick={() => setSelectedCategory(entry.id)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                      selectedCategory === entry.id ? "bg-primary/10 text-primary border border-primary/20" : "bg-card text-muted-foreground border border-border"
                    }`}
                  >
                    {entry.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.includes(product.id)}
                    isNotified={Boolean(notified[product.id])}
                    onQuickView={setSelectedProduct}
                    onToggleWishlist={toggleWishlist}
                    onAddToCart={handleAddToCart}
                  />
                ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <p className="font-heading text-lg mb-2 flex items-center justify-center gap-1">
                  <span>
                    Brak wyników dla kategorii: {" "}
                    {parentCategory ? parentCategory.name : selectedCategoryObject?.name}
                  </span>

                  {parentCategory && (
                    <ChevronRight size={18} />
                  )}

                  {parentCategory && (
                    <span>{selectedCategoryObject?.name}</span>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ProductQuickView product={selectedProduct} open={Boolean(selectedProduct)} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}