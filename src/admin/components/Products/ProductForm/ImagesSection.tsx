import FormFileInput from "@/components/Forms/FormFileInput";
import type { ProductFormData } from "@/types/store";
import { X } from "lucide-react";

type ImagesSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
};

export function ImagesSection({
  formData,
  setFormData,
}: ImagesSectionProps) {
  return (
    <section>
      <div className="mb-4 border-b border-primary/10 pb-3">
        <h2 className="text-lg font-semibold">Zdjęcia</h2>
        <p className="text-sm text-muted-foreground">
          Pierwsze zdjęcie będzie zdjęciem głównym produktu.
        </p>
      </div>
      <div className="flex items-center gap-6">
        <FormFileInput
          label="Zdjęcia produktu"
          required
          className="bg-background"
          onChange={(files) => {
            setFormData((prev) => ({
              ...prev,
              images: [...prev.images, ...files],
            }));
          }}
        />
        <button 
          className="
          border-red-500/50
          bg-transparent
          text-white/50
          hover:border-red-500
          hover:bg-red-500/50
          hover:text-white
          rounded-lg px-2 py-1
          transition-all duration-200
          active:scale-95
          "
          onClick={() => setFormData((prev) => ({ ...prev, images: [] }))}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}