import { useEffect, useState } from "react";
import ProductForm from "@/admin/components/Products/ProductForm/ProductForm";
import ProductPreview from "@/admin/components/Products/ProductPreview";
import AddVariationModal from "@/admin/components/Products/AddVariationModal";
import type { ProductFormData, ProductVariationFormData } from "@/types/store";
import { initialProductFormData } from "@/data/store";

export default function AddProduct() {
  const [formData, setFormData] = useState<ProductFormData>(initialProductFormData);
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

  function handleAddVariation(variation: ProductVariationFormData) {
    setFormData((prev) => ({
      ...prev,
      variations: [...prev.variations, variation],
    }));

    setIsVariationOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
      name: formData.name,
      description: formData.description,
      price: formData.price,
      salePrice: formData.salePrice,
      preorder: formData.preorder,
      inpostMethods: formData.inpostMethods,

      sku: formData.sku,
      gtin: formData.gtin,
      weight: formData.weight,
      length: formData.length,
      width: formData.width,
      height: formData.height,
      visible: formData.visible,
      manageStock: formData.manageStock,
      stock: formData.stock,
    }),
  });

    const data = await response.json();

    console.log(data);
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
          />
        </div>

        <ProductPreview
          formData={formData}
          imageSrc={previewImage}
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