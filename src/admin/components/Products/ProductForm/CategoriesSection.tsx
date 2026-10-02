import FormSelect from "@/components/Forms/FormSelect";
import { ProductFormData, Category } from "@/types/store";

type CategoriesSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
  categories: Category[];
};

export function CategoriesSection({ formData, setFormData, categories }: CategoriesSectionProps) {

  const getChildren = (parentId: number) => {
    return categories.filter((category) => category.parent === parentId);
  };

  const handleCategoryChange = (level: number, value: string) => {
    const categoryId = value ? Number(value) : null;

    setFormData((prev) => ({
      ...prev,
      categoryIds:
        categoryId === null
          ? prev.categoryIds.slice(0, level)
          : [...prev.categoryIds.slice(0, level), categoryId],
    }));
  };

  return (
    <section>
      <div className="mb-4 border-b border-primary/10 pb-3">
        <h2 className="text-lg font-semibold">Kategorie i powiązania</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { parentId: 0, level: 0 },
          ...formData.categoryIds.map((categoryId, index) => ({
            parentId: categoryId,
            level: index + 1,
          })),
        ].map(({ parentId, level }) => {
          const options = getChildren(parentId);
          if (options.length === 0) return null

          return (
            <FormSelect
              key={level}
              label={level === 0 ? "Kategoria" : "Podkategoria"}
              containerClassname="w-full"
              value={formData.categoryIds[level]?.toString() ?? ""}
              onChange={(value) => handleCategoryChange(level, value)}
              options={options.map((category) => ({
                value: category.id.toString(),
                label: category.name,
              }))}
            />
          );
        })}
      </div>
    </section>
  );
}