import { useState, useEffect } from "react";
import { Trash2, Pencil, Plus } from "lucide-react";
import AdminTable from "../components/AdminTable";
import { StoreProduct } from "@/types/store";
import PageLoader from "@/pages/PageLoader";
import AddProductModal from "../components/Products/AddProductModal";
import EditProductModal from "../components/Products/EditProductModal";
import { normalizeText } from "@/utils";
import TableFilters from "../components/TableFilters";

export default function Products() {
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const PRODUCTS_PER_PAGE = 6;

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<StoreProduct | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = products.filter((product) =>
  normalizeText(product.name).includes(
    normalizeText(search)
  ));
  
  const sortedProducts = [...filteredProducts];

  switch (sortBy) {
    case "name-asc":
      sortedProducts.sort((a,b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      sortedProducts.sort((a,b) => b.name.localeCompare(a.name));
      break;
    case "price-asc":
      sortedProducts.sort((a,b) => a.price - b.price);
      break;
    case "price-desc":
      sortedProducts.sort((a,b) => b.price - a.price);
      break;
  }

  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = sortedProducts.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);

  const sortOptions = [
    {
      value: "default",
      label: "Domyślnie",
    },
    {
      value: "name-asc",
      label: "Nazwa A-Z",
    },
    {
      value: "name-desc",
      label: "Nazwa Z-A",
    },
    {
      value: "price-asc",
      label: "Cena rosnąco",
    },
    {
      value: "price-desc",
      label: "Cena malejąco",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    stock: "",
    description: "",
    regularPrice: "",
    salePrice: "",
  })

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

  function getStockClass(stock: number) {
    return stock > 15
    ? "text-green-400"
    : stock <= 10 && stock > 5
      ? "text-yellow-400"
      : "text-red-400"
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

        <TableFilters
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOptions={sortOptions}
        button={
        <button
        onClick={() => setIsAddOpen(true)}
        className="
            flex
            items-center
            gap-2
            px-4
            py-3
            rounded-lg
            bg-primary/90
            w-fit
            text-black/90
            hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]
            hover:bg-primary
            hover:text-black
            transition-all duration-200
          ">
          <Plus size={18} /> Dodaj Produkt
        </button>
      }
        />

      <div className="h-[34rem] flex flex-col justify-between">
        <AdminTable>
          <thead>
            <tr className="border-b border-border text-primary text-center">
              <th className="p-4 w-20">ID</th>
              <th className="p-4 w-[45%]">Produkt</th>
              <th className="p-4 w-[20%]">Kategoria</th>
              <th className="p-4 w-32">Cena</th>
              <th className="p-4 w-40">Magazyn: szt.</th>
              <th className="p-4 w-28">Akcje</th>
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
                  <div className="relative group">
                    <div className="truncate">
                      {product.name}
                    </div>

                    <div
                      className="
                        hidden
                        group-hover:block
                        absolute
                        left-0
                        right-0
                        w-fit
                        mx-auto
                        bottom-full
                        mb-1
                        z-50
                        rounded-md
                        bg-zinc-900
                        px-2
                        py-1
                        text-sm
                        whitespace-nowrap
                        shadow-lg
                      "
                    >
                      {product.name}
                    </div>
                  </div>
                </td>

                <td className="p-4">
                  <div className="relative group">
                    <div className="truncate">
                      {product.categories.at(-1)?.name || "-"}
                    </div>

                    <div
                      className="
                        hidden
                        group-hover:block
                        absolute
                        left-0
                        right-0
                        w-fit
                        mx-auto
                        bottom-full
                        mb-1
                        z-50
                        rounded-md
                        bg-zinc-900
                        px-2
                        py-1
                        text-sm
                        whitespace-nowrap
                        shadow-lg
                      "
                    >
                      {product.categories.at(-1)?.name || "-"}
                    </div>
                  </div>
                </td>

                <td className="p-4 text-nowrap">{product.price.toFixed(2)} zł</td>
                <td className="p-4">
                  <div className="flex justify-center gap-1">
                    <span className={`${getStockClass(product.stock)}`}>
                      {product.stock}
                    </span>
                    {product.onSale && (
                    <span className="px-2 py-1 rounded-md text-xs font-medium bg-red-500/50 text-white">
                      Promocja
                    </span>
                    )}
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsEditOpen(!isEditOpen);
                        }}
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
    {isAddOpen && (
      <AddProductModal
        formData={formData}
        setFormData={setFormData}
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
      />
    )}
    {isEditOpen && (
      <EditProductModal
        product={selectedProduct}
        formData={formData}
        setFormData={setFormData}
        isOpen={isEditOpen}
        onClose={() => {
          setSelectedProduct(null);
          setIsEditOpen(false);
        }}
      />
    )}
    </>
  );
}