import { ProductFormData } from "@/types/store";

type AttributesSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
};

export function AttributesSection({ formData, setFormData }: AttributesSectionProps) {
  return (
    <section>
      <div className="mb-4 border-b border-primary/10 pb-3">
        <h2 className="text-lg font-semibold">Atrybuty</h2>
        <p className="text-sm text-muted-foreground">
          Atrybuty produktu, np. kolor, rozmiar, materiał.
        </p>
      </div>

      <div className="rounded-lg border border-border p-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nazwa atrybutu"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />

          <input
            type="text"
            placeholder="Wartości, np. Czerwony | Niebieski"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>

        <label className="mt-3 flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Widoczny na stronie produktu
        </label>

        <button
          type="button"
          className="
            mt-4 rounded-lg border border-primary/30
            px-3 py-2 text-sm text-primary
            transition-colors hover:bg-primary/10
          "
        >
          + Dodaj atrybut
        </button>
      </div>
    </section>
  );
}