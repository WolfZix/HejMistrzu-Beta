import { useMemo, useState, type MouseEvent } from "react";
import { ChevronRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { ProductCard } from "@/components/store/ProductCard";
import { ProductQuickView } from "@/components/store/ProductQuickView";
import { useCart } from "@/context/CartContext";
import type { StoreProduct } from "@/types/store";
import { normalizeText } from "@/utils/index";
import { useEffect } from "react";
import StoreSidebar from "@/components/store/StoreSidebar";
import type { Category } from "@/types/store";
import StoreFilters from "@/components/store/StoreFilters";

const SORT_OPTIONS = [
    { value: "default", label: "Domyślnie"},
    { value: "price-asc", label: "Cena rosnąco"},
    { value: "price-desc", label: "Cena malejąco"},
    { value: "name-asc", label: "Nazwa A-Z"},
    { value: "name-desc", label: "Nazwa Z-A"},
  ]

export default function Store() {
  // Filters
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyPromotions, setOnlyPromotions] = useState(false);

  // Products
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const [visibleProducts, setVisibleProducts] = useState(9);
  const [selectedProduct, setSelectedProduct] = useState<StoreProduct | null>(null);

  // Categories
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const rootCategories = categories.filter((category) => category.parent === 0 );
  const selectedCategoryObject = categories.find((category) => category.id === selectedCategory);
  const parentCategory = categories.find((category) => category.id === selectedCategoryObject?.parent);
  const hasChildren = (categoryId: number) => categories.some((category) => category.parent === categoryId);

  // UI
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [notified, setNotified] = useState<Record<number, boolean>>({});
  const { addItem } = useCart();

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

    const matchesSearch = normalizeText(product.name).includes(normalizeText(search));

    const matchesStock = !onlyInStock || product.inStock;
    const matchesPromotions = !onlyPromotions || product.onSale;

    return (
      matchesCategory &&
      matchesSearch &&
      matchesStock &&
      matchesPromotions
    );
  });
}, [sortedProducts, selectedCategory, search, onlyInStock, onlyPromotions]);

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
  setVisibleProducts(9);
}, [selectedCategory, search, sortBy]);

useEffect(() => {
  async function fetchCategories() {
    const response = await fetch("http://localhost:3000/categories");
    const data: Category[] = await response.json();
    setCategories(data);
  }
  fetchCategories();
}, []);

useEffect(() => {
  const timer = setTimeout(() => {
    window.scrollTo({
    top: 200,
    behavior: "smooth",
  });
  }, 10);
  return () => clearTimeout(timer);
}, [selectedCategory])

  return (
    <div className="pt-20 pb-24">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Sklep"
          title="Produkty i akcesoria"
          subtitle="Karty, boostery, akcesoria i zestawy startowe — wszystko dla gracza."
        />
        <div className="flex flex-col lg:flex-row gap-8">
          <StoreSidebar
            categories={categories}
            rootCategories={rootCategories}
            selectedCategory={selectedCategory}
            expandedCategory={expandedCategory}
            productsCount={products.length}
            setSelectedCategory={setSelectedCategory}
            setExpandedCategory={setExpandedCategory}
            hasChildren={hasChildren}
            onlyInStock={onlyInStock}
            setOnlyInStock={setOnlyInStock}
            onlyPromotions={onlyPromotions}
            setOnlyPromotions={setOnlyPromotions}
          />
          <div className="flex-1 min-w-0">
            <StoreFilters
              search={search}
              setSearch={setSearch}
              setIsSortOpen={setIsSortOpen}
              isSortOpen={isSortOpen}
              sortOptions={SORT_OPTIONS}
              setSortBy={setSortBy}
              sortBy={sortBy}
              rootCategories={rootCategories}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.slice(0, visibleProducts).map((product) => (
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
            {visibleProducts < filtered.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setVisibleProducts(prev => prev + 9)}
                  className="
                    px-6
                    py-3
                    rounded-xl
                    border
                    border-border
                    bg-card
                    hover:bg-primary
                    hover:text-black
                    transition-colors
                  "
                >
                  Załaduj więcej
                </button>
              </div>
            )}
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