import { useEffect, useState } from "react";
import ProductForm from "@/admin/components/Products/ProductForm/ProductForm";
import ProductPreview from "@/admin/components/Products/ProductPreview";
import AddVariationModal from "@/admin/components/Products/AddVariationModal";
import type {
  ProductFormData,
  ProductVariationFormData,
} from "@/types/store";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const initialProductFormData: ProductFormData = {
  name: "",
  category: "",
  subcategory: "",
  stock: "",
  description: "",
  price: "",
  salePrice: "",
  image: null,
  preorder: false,
  onSale: false,
  visible: true,
  variations: [],
};

export default function AddProduct_Test() {
  const [formData, setFormData] =
    useState<ProductFormData>(initialProductFormData);

  const [previewImage, setPreviewImage] = useState<string>();
  const [isVariationOpen, setIsVariationOpen] = useState(false);

  useEffect(() => {
    if (!formData.image) {
      setPreviewImage(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(formData.image);
    setPreviewImage(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [formData.image]);

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
    <>
    <div className="min-h-screen flex">
      <aside className="w-64 border-r border-border bg-card/40 backdrop-blur-xl">
      <div className="p-6 border-b border-border">
        <h1 className="font-heading text-2xl text-gold-gradient">
          Hej Mistrzu
        </h1>

        <p className="text-sm text-muted-foreground mt-1">
          Panel administracyjny
        </p>
      </div>

      <nav className="flex-1 p-4 h-screen"></nav>

      <div className="border-t border-border p-4">
        <NavLink
          to="/profil/Admin"
          className="
            flex items-center gap-3
            rounded-xl px-4 py-3
            text-muted-foreground
            hover:bg-muted/30
            hover:text-foreground
            border
            border-transparent
            transition-all
          "
        >
          <ArrowLeft size={18} />
          Wróć do profilu
        </NavLink>
      </div>
    </aside>
    <main className="flex-1 p-6">
      <div className="min-h-screen p-6">
        <div className="flex items-start gap-10">
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
    </main>
    </div>
    </>
  );
}