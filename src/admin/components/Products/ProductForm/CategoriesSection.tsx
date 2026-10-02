import FormSelect from "@/components/Forms/FormSelect";
import { ProductFormData } from "@/types/store";
import { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
  parent: number;
};

type CategoriesSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
};

export function CategoriesSection({ formData, setFormData }: CategoriesSectionProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const mainCategories = categories.filter((category) => category.parent === 0);
  const subcategories = categories.filter((category) => category.parent === formData.categoryId);

  const handleCategoryChange = (value: string) => {
    const categoryId = value ? Number(value) : null;
    setFormData((prev) => ({
      ...prev,
      categoryId,
      subcategoryId: null,
    }));
  };

  const handleSubcategoryChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subcategoryId: value ? Number(value) : null,
    }));
  };

  return (
    <section>
      <div className="mb-4 border-b border-primary/10 pb-3">
        <h2 className="text-lg font-semibold">Kategorie i powiązania</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormSelect
          label="Kategoria"
          containerClassname="w-full"
          value={formData.categoryId?.toString() ?? ""}
          onChange={handleCategoryChange}
          options={mainCategories.map((category) => ({
            value: category.id.toString(),
            label: category.name,
          }))}
        />

        <FormSelect
          label="Podkategoria"
          containerClassname="w-full"
          value={formData.subcategoryId?.toString() ?? ""}
          onChange={handleSubcategoryChange}
          options={subcategories.map((subcategory) => ({
            value: subcategory.id.toString(),
            label: subcategory.name,
          }))}
        />
      </div>
    </section>
  );
}