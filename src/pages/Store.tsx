import { useMemo, useState, type MouseEvent } from "react";
import { Search, ShieldCheck, Truck } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { ProductCard } from "@/components/store/ProductCard";
import { ProductQuickView } from "@/components/store/ProductQuickView";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { storeCategories, storeProducts } from "@/data/store";
import type { StoreProduct } from "@/types/store";
import { normalizeText } from "@/utils/index";

export default function Store() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Wszystkie");
  const [selectedProduct, setSelectedProduct] = useState<StoreProduct | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [notified, setNotified] = useState<Record<number, boolean>>({});
  const { addItem } = useCart();

  const filtered = useMemo(() => {
    return storeProducts.filter((product) => {
      const matchesCategory = category === "Wszystkie" || product.category === category;
      const matchesSearch = normalizeText(product.name).includes(normalizeText(search));
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((entry) => entry !== productId) : [...prev, productId]));
  };

  const handleAddToCart = (product: StoreProduct, event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    addItem(product);
    setNotified((prev) => ({ ...prev, [product.id]: true }));
    window.setTimeout(() => setNotified((prev) => ({ ...prev, [product.id]: false })), 1500);
  };

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
                {storeCategories.map((entry) => (
                  <button
                    key={entry}
                    onClick={() => setCategory(entry)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      category === entry ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    {entry}
                  </button>
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
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Szukaj produktów..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="pl-10 bg-card border-border focus:border-primary/50 h-11 rounded-xl"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2 lg:hidden">
                {storeCategories.map((entry) => (
                  <button
                    key={entry}
                    onClick={() => setCategory(entry)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                      category === entry ? "bg-primary/10 text-primary border border-primary/20" : "bg-card text-muted-foreground border border-border"
                    }`}
                  >
                    {entry}
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
                <p className="font-heading text-lg mb-2">Brak wyników</p>
                <p className="text-sm">Spróbuj zmienić kryteria wyszukiwania.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ProductQuickView product={selectedProduct} open={Boolean(selectedProduct)} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}