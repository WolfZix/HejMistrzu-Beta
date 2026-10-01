import FormInput from "@/components/Forms/FormInput";
import FormTextarea from "@/components/Forms/FormTextarea";
import { ProductFormData } from "@/types/store";

type BasicInformationProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
};

export function BasicInformation({ formData, setFormData }: BasicInformationProps) {
  return (
    <section>
      <div className="mb-4 border-b border-primary/10 pb-3">
        <h2 className="text-lg font-semibold">Podstawowe informacje</h2>
        <p className="text-sm text-muted-foreground">
          Podstawowe dane produktu widoczne w sklepie.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <FormInput
          label="Nazwa produktu"
          value={formData.name}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              name: value,
            }))
          }
          placeholder="Figurki Warhammer 40K"
          required
        />

        <FormTextarea
          label="Opis"
          value={formData.description}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              description: value,
            }))
          }
          placeholder="Opis produktu..."
          rows={8}
          required
        />
      </div>
    </section>
  )
}