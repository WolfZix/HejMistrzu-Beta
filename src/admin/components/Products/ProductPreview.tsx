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
    formData.description || "Tutaj pojawi się opis produktu";

  const price = Number(formData.price);
  const salePrice = Number(formData.salePrice);

  const hasSale =
    formData.salePrice.trim() !== "" &&
    !Number.isNaN(salePrice) &&
    salePrice > 0 &&
    !Number.isNaN(price) &&
    salePrice < price;

  const displayPrice = hasSale ? salePrice : price;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-primary/30 bg-card shadow-[0_0_15px_1px_hsl(43,50%,10%)]">
      <div className="relative aspect-square w-full overflow-hidden bg-background/50">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={productName}
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Brak zdjęcia
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-2">
          <span className="rounded-full border border-primary/30 px-2 py-1 text-xs text-primary">
            {formData.category || "Inne"}
          </span>
        </div>

        <h3 className="font-heading line-clamp-4 max-w-sm text-xl font-semibold">
          {productName}
        </h3>

        <div className="mt-3">
          {hasSale && (
            <span className="mr-2 text-sm text-muted-foreground line-through">
              {price.toFixed(2).replace(".", ",")} zł
            </span>
          )}

          <span className="text-xl font-semibold text-primary">
            {Number.isNaN(displayPrice)
              ? "0,00"
              : displayPrice.toFixed(2).replace(".", ",")}{" "}
            zł
          </span>
        </div>

        <p className="mt-4 line-clamp-4 max-w-sm text-sm text-muted-foreground">
          {description}
        </p>

        <div className="mt-4 border-t border-primary/10 pt-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Magazyn</span>

            <span>
              {formData.stock.trim() !== ""
                ? `${formData.stock} szt.`
                : "Brak danych"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}