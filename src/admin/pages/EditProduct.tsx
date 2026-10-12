import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "@/admin/components/Products/ProductForm/ProductForm";
import ProductPreview from "@/admin/components/Products/ProductPreview";
import AddVariationModal from "@/admin/components/Products/AddVariationModal";
import type {
  ProductFormData,
  ProductVariationFormData,
  Category,
  ExistingProductImage,
} from "@/types/store";
import { initialProductFormData } from "@/data/store";
import PageLoader from "@/pages/PageLoader";

export default function EditProduct() {
  const { id } = useParams();

  const [formData, setFormData] = useState<ProductFormData>(initialProductFormData);
  const [categories, setCategories] = useState<Category[]>([]);
  const [existingImages, setExistingImages] = useState<ExistingProductImage[]>([]);
  const [previewImage, setPreviewImage] = useState<string>();
  const [isVariationOpen, setIsVariationOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const hasVariations = formData.variations.length > 0;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((res) => res.json())
      .then(setCategories)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!id) return;

    async function loadProduct() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}/edit`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) { throw new Error("Nie udało się pobrać produktu") }

        const data = await response.json();
        const product = data.product;

        const variations: ProductVariationFormData[] =
          data.variations.map((variation: any) => ({
            name: variation.name,
            price: String(variation.regular_price ?? variation.price ?? ""),
            salePrice: String(variation.sale_price ?? ""),
            stock: String(variation.stock_quantity ?? ""),
            image: null,
          }));

        setExistingImages(
          data.images.map((image: ExistingProductImage) => ({
            url: image.url,
            position: image.position,
          }))
        );

        setFormData({
          ...initialProductFormData,
          name: product.name ?? "",
          description: product.description ?? "",
          price: String(product.regular_price ?? ""),
          salePrice: String(product.sale_price ?? ""),
          stock: String(product.stock_quantity ?? ""),
          preorder: Boolean(product.preorder),
          visible: product.status === "publish",
          categoryIds: data.categories.map((category: Category) => category.id),
          sku: product.sku ?? "",
          gtin: product.gtin ?? "",
          manageStock: Boolean(product.manage_stock),
          soldIndividually: Boolean(product.sold_individually),
          lowStockThreshold: String(product.low_stock_amount ?? 5),
          backorders:
            product.backorders === "notify" ? "Zezwalaj + poinformuj"
              : product.backorders === "yes" ? "Zezwalaj"
                : "Nie zezwalaj",
          weight: String(product.weight ?? ""),
          length: String(product.length ?? ""),
          width: String(product.width ?? ""),
          height: String(product.height ?? ""),
          purchaseNote: product.purchase_note ?? "",
          menuOrder: String(product.menu_order ?? 0),
          variations,
        });
      } catch (error) {
        console.error(error);
        alert("Nie udało się wczytać produktu do edycji.");
      } finally { setLoading(false) }
    }

    loadProduct();
  }, [id]);

  useEffect(() => {
    const firstImage = existingImages[0]?.url;

    if (firstImage) {
      setPreviewImage(firstImage);
    } else if (formData.images[0]) {
      const objectUrl = URL.createObjectURL(formData.images[0]);
      setPreviewImage(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewImage(undefined);
    }
  }, [existingImages, formData.images]);

  function handleAddVariation(variation: ProductVariationFormData) {
    setFormData((prev) => ({
      ...prev,
      variations: [...prev.variations, variation],
      ...(prev.variations.length === 0 && {
        price: "",
        salePrice: "",
        stock: "",
        manageStock: false,
      }),
    }));

    setIsVariationOpen(false);
  }

  function closePage() { window.history.back() }

  if (loading) { return <PageLoader /> }

  return (
    <div className="min-h-screen p-6">
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-semibold">
          Edytuj produkt
        </h2>
      </div>

      <div className="flex flex-col-reverse items-start gap-10 xl:mb-0 mb-[20rem]">
        <div className="w-full">
          <ProductForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={(e) => e.preventDefault()}
            closeModal={closePage}
            onAddVariation={() => setIsVariationOpen(true)}
            categories={categories}
            hasVariations={hasVariations}
            isEditing
            existingImages={existingImages}
            setExistingImages={setExistingImages}
          />
        </div>

        <ProductPreview
          formData={formData}
          imageSrc={previewImage}
          categories={categories}
          hasVariations={hasVariations}
        />
      </div>

      <AddVariationModal
        isOpen={isVariationOpen}
        onClose={() => setIsVariationOpen(false)}
        onAdd={handleAddVariation}
      />
    </div>
  );
}
