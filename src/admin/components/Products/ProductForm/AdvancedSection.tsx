import { ProductFormData } from "@/types/store";

type AdvancedSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
};

export function AdvancedSection({ formData, setFormData }: AdvancedSectionProps) {
  return (
    <section>
      <div className="mb-4 border-b border-primary/10 pb-3">
        <h2 className="text-lg font-semibold">Zaawansowane</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Notatka do zakupu
          </label>
          <textarea
            rows={4}
            placeholder="Opcjonalna wiadomość dla klienta..."
            className="
              w-full resize-y rounded-lg border
              border-border bg-background px-3 py-2
              text-sm outline-none focus:border-primary
            "
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Kolejność w menu
            </label>
            <input
              type="number"
              placeholder="0"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            Dostępny dla POS
          </label>
        </div>
      </div>
    </section>
  );
}