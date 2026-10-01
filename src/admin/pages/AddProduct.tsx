import { useEffect, useState } from "react";
import ProductForm from "@/admin/components/Products/ProductForm/ProductForm";
import ProductPreview from "@/admin/components/Products/ProductPreview";
import AddVariationModal from "@/admin/components/Products/AddVariationModal";
import type { ProductFormData, ProductVariationFormData } from "@/types/store";

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

export default function AddProduct() {
  const [formData, setFormData] =
    useState<ProductFormData>(initialProductFormData);

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Na razie bez zapisu do backendu
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