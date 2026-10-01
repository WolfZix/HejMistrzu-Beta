import FormFileInput from "@/components/Forms/FormFileInput";
import type { ProductFormData } from "@/types/store";

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
    </section>
  );
}