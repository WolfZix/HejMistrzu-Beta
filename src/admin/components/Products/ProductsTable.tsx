import AdminTable from "@/admin/components/AdminTable";
import { StoreProduct } from "@/types/store";
import { AlertTriangle, Pencil, Trash2 } from "lucide-react";

type ProductsTableProps = {
  currentProducts: StoreProduct[];
  setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditOpen: boolean;
  isDeleteOpen: boolean;
  setIsDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduct: StoreProduct | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<StoreProduct | null>>;
};

export default function ProductsTable({currentProducts, setIsEditOpen, isEditOpen, setIsDeleteOpen, isDeleteOpen, selectedProduct, setSelectedProduct}: ProductsTableProps) {

  function getStockClass(stock: number) {
    return stock >= 5
    ? "text-green-400"
    : stock < 5 && stock > 1
      ? "text-yellow-400"
      : "text-red-400"
  }

  return (
    <AdminTable>
      <thead>
        <tr className="border-b border-border text-primary text-center">
          <th className="p-4 w-20">ID</th>
          <th className="p-4 w-[45%]">Produkt</th>
          <th className="p-4 w-[20%]">Kategoria</th>
          <th className="p-4 w-32">Cena</th>
          <th className="p-4 w-40">Magazyn: szt.</th>
          <th className="p-4 w-20">Status</th>
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

            <td className="p-4 text-nowrap">
              {product.price.toFixed(2)} zł {" "}
              <span className="text-muted-foreground line-through text-sm">
                {product.onSale ? product.regularPrice?.toFixed(2) + " zł" : ""}  
              </span>
              </td>
            <td className="p-4">
              <div className="flex justify-center gap-1">
                <span className={`flex gap-1 items-center ${getStockClass(product.stock)}`}>
                  {product.stock < 5 ? (<AlertTriangle size={14} />) : ""}
                  {product.stock}
                </span>
              </div>
            </td>
            <td className="p-4">
              <div className="flex justify-center gap-1">
                <span className={`px-2 py-1 rounded-md text-xs font-medium
                  ${product.onSale ? "bg-red-500/50 text-white" : "bg-muted text-white"}`}
                >
                {product.onSale ? "Promocja" : "Zwykły"}
                </span>
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
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsDeleteOpen(true);
                    }}
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
  );
}