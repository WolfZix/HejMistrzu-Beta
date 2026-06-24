import { useState, useEffect } from "react";
import { Search, Plus, Trash2, Pencil } from "lucide-react";
import AdminTable from "../components/AdminTable";
import { StoreProduct } from "@/types/store";
import PageLoader from "@/pages/PageLoader";
import AddProductModal from "../components/Products/AddProductModal";

export default function Products() {
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const PRODUCTS_PER_PAGE = 6;
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    products.length / PRODUCTS_PER_PAGE
  );

  const currentProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data: StoreProduct[]) => {
      setProducts(data);
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])

  function getStockClass(inStock: boolean) {
    return inStock
    ? "bg-green-500/10 text-green-400"
    : "bg-red-500/10 text-red-400"
  }

  return (
    <>
    <div className="space-y-6 min-h-[45rem] relative">
      <div>
        <h1 className="font-heading text-3xl">
          Produkty
        </h1>

        <p className="text-muted-foreground mt-1">
          Zarządzaj produktami sklepu.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1">
          <Search
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-muted-foreground
              z-10
            "
          />

          <input
            placeholder="Szukaj produktu..."
            className="
            w-full
            glass
            border
            border-border
            rounded-lg
            py-2
            pl-10
            pr-4
            outline-none
            focus:border-primary/50
            text-primary
            "
          />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-lg
            bg-primary/90
            w-fit
            text-black/90
            font-heading
            font-medium
            hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]
            hover:bg-primary
            hover:text-black
            transition-all duration-200
          "
        >
          <Plus size={16} />
          Dodaj produkt
        </button>
      </div>
      <div className="h-[34rem] flex flex-col justify-between">
        <AdminTable>
          <thead>
            <tr className="border-b border-border text-primary text-center">
              <th className="p-4">ID</th>
              <th className="p-4">Produkt</th>
              <th className="p-4">Kategoria</th>
              <th className="p-4">Cena</th>
              <th className="p-4">Status</th>
              <th className="p-4">Akcje</th>
            </tr>
          </thead>

          <tbody>
            {currentProducts.map((product) => (
              <tr
                key={product.id}
                className="
                  border-b
                  border-border/50
                  hover:bg-muted/20
                  text-center
                "
              >
                <td className="p-4">{product.id}</td>

                <td className="p-4">
                  {product.name}
                </td>

                <td className="p-4">
                  {product.categories.at(-1)?.name || "-"}
                </td>

                <td className="p-4 text-nowrap">
                  {product.price.toFixed(2)} zł
                </td>

                <td className="p-4 flex gap-1 justify-center">
                  <span
                    className={`
                      px-2 py-1 rounded-md text-xs font-medium
                      ${getStockClass(product.inStock)}
                    `}
                  >
                    {product.inStock ? "Dostępny" : "Brak"}
                  </span>
                  {product.onSale && (
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-yellow-500/10 text-yellow-400">
                    Promocja
                  </span>
                  )}
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                      <button
                        className="
                          p-2
                          rounded-lg
                          hover:bg-muted
                          border border-transparent
                          hover:border-muted-foreground/30
                        "
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        className="
                          p-2
                          rounded-lg
                          hover:bg-destructive/10
                          hover:text-destructive
                          border border-transparent
                          hover:border-destructive/30
                        "
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </AdminTable>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Strona {currentPage} z {totalPages}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.max(prev - 1, 1)
                )
              }
              disabled={currentPage === 1}
              className="
                px-3 py-2
                rounded-lg
                border border-border
                hover:bg-primary/10
                hover:border-primary/30
                hover:text-primary
                disabled:opacity-50
                disabled:hover:bg-transparent
                disabled:hover:border-border
                disabled:hover:text-foreground
                transition-all duration-200
              "
            >
              Poprzednia
            </button>

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages}
              className="
                px-3 py-2
                rounded-lg
                border border-border
                hover:bg-primary/10
                hover:border-primary/30
                hover:text-primary
                disabled:opacity-50
                disabled:hover:bg-transparent
                disabled:hover:border-border
                disabled:hover:text-foreground
                transition-all duration-200
              "
            >
              Następna
            </button>
          </div>
        </div>
      </div>
        { products.length === 0 && (
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <PageLoader /> 
          </div>
        )}
    </div>
    {isOpen && (
      <AddProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    )}
    </>
  );
}