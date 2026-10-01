import FormSelect from "@/components/Forms/FormSelect";
import { ProductFormData } from "@/types/store";

type CategoriesSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
  categories: string[];
  subcategories: string[];
};

export function CategoriesSection({ formData, setFormData, categories, subcategories }: CategoriesSectionProps) {
  return (
    <section>
      <div className="mb-4 border-b border-primary/10 pb-3">
        <h2 className="text-lg font-semibold">Kategorie i powiązania</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormSelect
          label="Kategoria"
          containerClassname="w-full"
          value={formData.category}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              category: value,
            }))
          }
          options={categories.map((category) => ({
            value: category,
            label: category,
          }))}
        />

        <FormSelect
          label="Podkategoria"
          containerClassname="w-full"
          value={formData.subcategory}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              subcategory: value,
            }))
          }
          options={subcategories.map((subcategory) => ({
            value: subcategory,
            label: subcategory,
          }))}
        />
      </div>
    </section>
  );
}