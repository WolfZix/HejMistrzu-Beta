import { useEffect, useState } from "react";
import ProductForm from "@/admin/components/Products/ProductForm/ProductForm";
import ProductPreview from "@/admin/components/Products/ProductPreview";
import AddVariationModal from "@/admin/components/Products/AddVariationModal";
import type { ProductFormData, ProductVariationFormData, Category } from "@/types/store";
import { initialProductFormData } from "@/data/store";

export default function AddProduct() {
  const [formData, setFormData] = useState<ProductFormData>(initialProductFormData);
  const [categories, setCategories] = useState<Category[]>([]);
  const [previewImage, setPreviewImage] = useState<string>();
  const [isVariationOpen, setIsVariationOpen] = useState(false);

  useEffect(() => {
    if (!formData.images || formData.images.length === 0) {
      setPreviewImage(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(formData.images[0]);
    setPreviewImage(objectUrl);
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [formData.images]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  function handleAddVariation(variation: ProductVariationFormData) {
    setFormData((prev) => ({
      ...prev,
      variations: [...prev.variations, variation],
    }));

    setIsVariationOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("categoryIds", JSON.stringify(formData.categoryIds));
    data.append("price", formData.price);
    data.append("salePrice", formData.salePrice);
    data.append("preorder", String(formData.preorder));
    data.append("inpostMethods", JSON.stringify(formData.inpostMethods));

    data.append("sku", formData.sku);
    data.append("gtin", formData.gtin);
    data.append("weight", formData.weight);
    data.append("length", formData.length);
    data.append("width", formData.width);
    data.append("height", formData.height);
    data.append("visible", String(formData.visible));
    data.append("manageStock", String(formData.manageStock));
    data.append("stock", formData.stock);
    data.append("soldIndividually", String(formData.soldIndividually));
    data.append("lowStockThreshold", formData.lowStockThreshold);
    data.append("backorders", formData.backorders);
    data.append("purchaseNote", formData.purchaseNote);
    data.append("menuOrder", formData.menuOrder);

    formData.images.forEach((image) => {
      data.append("images", image);
    });

    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: data,
    });
    console.log(response);
  }

  function closePage() {
    window.history.back();
  }

  return (
    <div className="min-h-screen p-6">
      <div className="flex flex-col-reverse items-start gap-10 mb-[20rem] xl:mb-0">
        <div className="w-full">
          <div className="mb-6">
            <h2 className="font-heading text-2xl font-semibold">
              Dodaj produkt
            </h2>
          </div>

          <ProductForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            closeModal={closePage}
            onAddVariation={() => setIsVariationOpen(true)}
            categories={categories}
          />
        </div>

        <ProductPreview
          formData={formData}
          imageSrc={previewImage}
          categories={categories}
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