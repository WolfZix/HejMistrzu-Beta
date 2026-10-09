import { useEffect, useState } from "react";
import { Tag, Clock3, Package } from "lucide-react";
import type { ProductFormData, Category } from "@/types/store";

type ProductPreviewProps = {
  formData: ProductFormData;
  imageSrc?: string;
  categories: Category[];
  hasVariations: boolean;
};

export default function ProductPreview({ formData, imageSrc, categories, hasVariations }: ProductPreviewProps) {
  const [selectedVariationIndex, setSelectedVariationIndex] = useState<number | null>(null);
  const [variationImageSrc, setVariationImageSrc] = useState<string>();
  
  const productName = formData.name || "Nowy produkt";
  const description = formData.description || "Tutaj pojawi się opis produktu.";
  const selectedVariation = selectedVariationIndex !== null ? formData.variations[selectedVariationIndex] : null;
  const price = Number(selectedVariation?.price ?? formData.price);
  const salePrice = Number(selectedVariation?.salePrice ?? formData.salePrice);

  const stock = selectedVariation
  ? selectedVariation.stock
  : hasVariations
    ? formData.variations.reduce((total, variation) => total + (Number(variation.stock) || 0), 0)
    : formData.stock;
  
  const hasStock = String(stock).trim() !== "" && Number(stock) > 0;
  const currentImageSrc = variationImageSrc ?? imageSrc;

  const hasSale =
    formData.onSale &&
    String(selectedVariation?.salePrice ?? formData.salePrice).trim() !== "" &&
    !Number.isNaN(salePrice) &&
    salePrice > 0 &&
    !Number.isNaN(price) &&
    salePrice < price;

  const displayPrice = hasSale ? salePrice : price;

  useEffect(() => {
    if (selectedVariationIndex !== null && selectedVariationIndex >= formData.variations.length) setSelectedVariationIndex(null);
  }, [formData.variations.length, selectedVariationIndex]);

  useEffect(() => {
    if (!selectedVariation?.image) {
      setVariationImageSrc(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedVariation.image);
    setVariationImageSrc(objectUrl);
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedVariation]);

  const categoryPath = formData.categoryIds
  .map((id) => categories.find((category) => category.id === id)?.name)
  .filter(Boolean)
  .join(" / ");

  return (
    <div
      className="
        w-full scale-50 xl:scale-100 xl:max-w-2xl h-[560px]
        overflow-hidden rounded-xl
        border border-primary/30
        bg-card
        shadow-[0_0_15px_1px_hsl(43,50%,10%)]
        fixed xl:top-16 xl:right-8 -bottom-[8rem] -right-[16rem]
      "
    >
      <div className="grid h-[560px] grid-cols-2">
        {/* IMAGE */}
        <div className="relative flex items-center justify-center bg-background/30">
          {currentImageSrc ? (
            <img
              src={currentImageSrc}
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
        <div className="flex min-h-0 flex-col p-6">
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
              {categoryPath || "Inne"}
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

          {/* VARIATIONS */}
          {formData.variations.length > 0 && (
            <div className="mt-4">
              <p className="mb-2 text-sm text-muted-foreground">
                Wariant:
              </p>

              <div className="flex flex-wrap gap-2">
                {formData.variations.map((variation, index) => {
                  const isSelected =
                    selectedVariationIndex === index;

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        setSelectedVariationIndex(index)
                      }
                      className={`
                        rounded-full
                        border
                        px-3 py-1.5
                        text-sm
                        transition-colors
                        ${
                          isSelected
                            ? "border-primary bg-primary text-black"
                            : "border-primary/30 hover:border-primary hover:bg-primary/10"
                        }
                      `}
                    >
                      {variation.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            {/* SEPARATOR */}
            <div className="mb-4 mt-6 border-t border-primary/10" />

            {/* PRICE */}
            <div>
              {hasSale && (
                <span className="mr-2 text-sm text-muted-foreground line-through">
                  {hasVariations && !selectedVariation
                    ? "Wybierz wariant"
                    : `${price.toFixed(2).replace(".", ",")} zł`}
                </span>
              )}

              <span className="text-2xl font-semibold text-primary">
                {hasVariations && !selectedVariation
                  ? "Wybierz wariant"
                  : `${Number.isNaN(displayPrice)
                      ? "—"
                      : displayPrice.toFixed(2).replace(".", ",")} zł`}
              </span>
            </div>

            {/* STOCK */}
            <div className="mt-4 flex items-center gap-2 text-sm">
              {hasStock ? (
                <>
                  <Package className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">
                    Dostępny ({stock})
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