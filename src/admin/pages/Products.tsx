import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { StoreProduct, ProductFormData } from "@/types/store";
import PageLoader from "@/pages/PageLoader";
import EditProductModal from "../components/Products/EditProductModal";
import { normalizeText } from "@/utils";
import TableFilters from "../components/TableFilters";
import DeleteModal from "../components/DeleteModal";
import ProductsTable from "../components/Products/ProductsTable";

const PRODUCTS_PER_PAGE = 6;
const initialProductFormData: ProductFormData = {
  name: "",
  category: "",
  subcategory: "",
  stock: "",
  description: "",
  price: "",
  salePrice: "",
  images: [],
  preorder: false,
  onSale: false,
  visible: true,
  variations: [],
  manageStock: false,
  soldIndividually: false,
  sku: "",
  gtin: "",
  lowStockThreshold: "",
  backorders: "Nie zezwalaj",
  inpostMethods: [],
  weight: "",
  length: "",
  width: "",
  height: "",
  posAvailable: false,
  purchaseNote: "",
  menuOrder: "0",
};

export default function Products() {
  const [products, setProducts] = useState<StoreProduct[]>([]);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
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
    case "stock-asc":
      sortedProducts.sort((a,b) => a.stock - b.stock);
      break;
    case "stock-desc":
      sortedProducts.sort((a,b) => b.stock - a.stock);
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
    { value: "default", label: "Domyślnie" },
    { value: "name-asc", label: "Nazwa A-Z" }, { value: "name-desc", label: "Nazwa Z-A" },
    { value: "stock-asc", label: "Ilość rosnąco" }, { value: "stock-desc", label: "Ilość malejąco" },
    { value: "price-asc", label: "Cena rosnąco" }, { value: "price-desc", label: "Cena malejąco" },
  ];

  const [formData, setFormData] = useState<ProductFormData>(initialProductFormData);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
    .then((res) => res.json())
    .then((data: StoreProduct[]) => {
      setProducts(data);
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [search]);

  return (
    <>
    <div className="space-y-6 min-h-[45rem] relative">
      <div>
        <h1 className="font-heading text-3xl">
          Produkty
        </h1>

        <p className="text-muted-foreground">
          Zarządzaj produktami sklepu.
        </p>
      </div>

        <TableFilters
        label="Szukaj produktów"
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOptions={sortOptions}
        button={
        <button
        onClick={() => navigate("/admin/produkty/nowy")}
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
        <ProductsTable 
          currentProducts={currentProducts}
          setIsEditOpen={setIsEditOpen}
          isEditOpen={isEditOpen}
          isDeleteOpen={isDeleteOpen}
          setIsDeleteOpen={setIsDeleteOpen}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
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
    {isDeleteOpen && (
      <DeleteModal
        isOpen={isDeleteOpen}
        title="Usuń produkt"
        description={
          <>
            Czy na pewno chcesz usunąć produkt:
            <br />
            <span className="font-medium text-foreground">
              {selectedProduct?.name} ?
            </span>
          </>
        }
        onClose={() => {
          setSelectedProduct(null);
          setIsDeleteOpen(false);
        }}
        onConfirm={() => {
          setSelectedProduct(null);
          setIsDeleteOpen(false);
        }}
      />
    )}
    </>
  );
}