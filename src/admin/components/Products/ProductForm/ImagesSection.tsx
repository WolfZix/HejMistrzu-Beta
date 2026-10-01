import FormFileInput from "@/components/Forms/FormFileInput";
import type { ProductFormData } from "@/types/store";

type ImagesSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
};

export function ImagesSection({ formData, setFormData }: ImagesSectionProps) {
  return (
    <section>
      <div className="mb-4 border-b border-primary/10 pb-3">
        <h2 className="text-lg font-semibold">Zdjęcia</h2>
        <p className="text-sm text-muted-foreground">
          Zdjęcie główne oraz dodatkowe zdjęcia produktu.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <FormFileInput
          label="Zdjęcie główne"
          required
          onChange={(file) =>
            setFormData((prev) => ({
              ...prev,
              image: file,
            }))
          }
        />

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Galeria zdjęć
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="
              block w-full rounded-lg border border-border
              bg-background px-3 py-2 text-sm
              file:mr-3 file:rounded-md file:border-0
              file:bg-primary/10 file:px-3 file:py-1.5
              file:text-sm file:text-primary
            "
          />
        </div>
      </div>
    </section>
  )
}