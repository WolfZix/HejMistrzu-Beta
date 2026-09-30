import { Tag, Clock3, Package } from "lucide-react";
import type { ProductFormData } from "@/types/store";

type ProductPreviewProps = {
  formData: ProductFormData;
  imageSrc?: string;
};

export default function ProductPreview({
  formData,
  imageSrc,
}: ProductPreviewProps) {
  const productName = formData.name || "Nowy produkt";

  const description =
    formData.description || "Tutaj pojawi się opis produktu.";

  const price = Number(formData.price);
  const salePrice = Number(formData.salePrice);

  const hasSale =
    formData.onSale &&
    formData.salePrice.trim() !== "" &&
    !Number.isNaN(salePrice) &&
    salePrice > 0 &&
    !Number.isNaN(price) &&
    salePrice < price;

  const displayPrice = hasSale ? salePrice : price;

  const hasStock =
    formData.stock.trim() !== "" &&
    Number(formData.stock) > 0;

  return (
    <div
      className="
        w-full max-w-4xl
        overflow-hidden rounded-xl
        border border-primary/30
        bg-card
        shadow-[0_0_15px_1px_hsl(43,50%,10%)]
      "
    >
      <div className="grid h-[560px] grid-cols-2">
        {/* IMAGE */}
        <div className="relative flex items-center justify-center bg-background/30">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={productName}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-full min-h-[560px] w-full items-center justify-center text-muted-foreground">
              Brak zdjęcia
            </div>
          )}

          {/* PROMOTION BADGE */}
          {formData.onSale && (
            <div
              className="
                absolute left-3 top-3
                flex items-center
                rounded-full
                border border-black
                bg-red-600
                px-2 py-0.5
                text-xs font-medium
                text-white
              "
            >
              <Tag className="mr-1 h-3 w-3" />
              Promocja
            </div>
          )}

          {/* PREORDER BADGE */}
          {formData.preorder && (
            <div
              className="
                absolute left-3 top-10
                flex items-center
                rounded-full
                border border-black
                bg-primary
                px-2 py-0.5
                text-xs font-medium
                text-black
              "
            >
              <Clock3 className="mr-1 h-3 w-3" />
              Przedsprzedaż
            </div>
          )}
        </div>

        {/* PRODUCT INFO */}
        <div className="flex flex-col p-6">
          {/* CATEGORY */}
          <div className="mb-3">
            <span
              className="
                inline-block
                rounded-full
                border border-primary/30
                px-2 py-0.5
                text-xs
                text-primary
              "
            >
              {formData.category || "Inne"}
            </span>
          </div>

          {/* TITLE */}
          <h3
            className="
              font-heading
              text-2xl
              font-semibold
              leading-tight
              [overflow-wrap:anywhere]
            "
          >
            {productName}
          </h3>

          {/* DESCRIPTION */}
          <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-2">
            <p
              className="
                text-sm
                leading-relaxed
                text-muted-foreground
                [overflow-wrap:anywhere]
              "
            >
              {description}
            </p>
          </div>

          {/* FUTURE VARIANTS */}
          {/* Tutaj później pojawi się sekcja wariantów */}

          <div className="mt-auto">
            {/* SEPARATOR */}
            <div className="mb-4 mt-6 border-t border-primary/10" />

            {/* PRICE */}
            <div>
              {hasSale && (
                <span className="mr-2 text-sm text-muted-foreground line-through">
                  {price.toFixed(2).replace(".", ",")} zł
                </span>
              )}

              <span className="text-2xl font-semibold text-primary">
                {Number.isNaN(displayPrice)
                  ? "0,00"
                  : displayPrice.toFixed(2).replace(".", ",")}{" "}
                zł
              </span>
            </div>

            {/* STOCK */}
            <div className="mt-4 flex items-center gap-2 text-sm">
              {hasStock ? (
                <>
                  <Package className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">
                    Dostępny ({formData.stock})
                  </span>
                </>
              ) : (
                <>
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Produkt niedostępny
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}