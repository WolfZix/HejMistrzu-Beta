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
      {formData.images.length > 0 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {formData.images.map((image, index) => (
            <div
              key={`${image.name}-${index}`}
              className="relative aspect-square overflow-hidden rounded-lg border border-primary/20"
            >
              <img
                src={URL.createObjectURL(image)}
                alt={`Zdjęcie ${index + 1}`}
                className="h-full w-full object-cover"
              />

              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    images: prev.images.filter((_, imageIndex) => imageIndex !== index),
                  }))
                }
                className="
                  absolute right-1 top-1
                  flex h-6 w-6 items-center justify-center
                  rounded-full bg-black/70 text-white
                  transition-colors hover:bg-red-500
                "
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}