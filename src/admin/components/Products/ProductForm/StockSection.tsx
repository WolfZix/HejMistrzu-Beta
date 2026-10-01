import FormInput from "@/components/Forms/FormInput";
import FormToggle from "@/components/Forms/FormToggle";
import { ProductFormData } from "@/types/store";

type StockSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
};

export function StockSection({ formData, setFormData }: StockSectionProps) {
  return (
          <section>
        <div className="mb-4 border-b border-primary/10 pb-3">
          <h2 className="text-lg font-semibold">Magazyn</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              SKU
            </label>
            <input
              type="text"
              placeholder="HM-001"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              GTIN / EAN
            </label>
            <input
              type="text"
              placeholder="5901234567890"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="mt-4">
          <FormToggle
            label="Zarządzaj stanem magazynowym"
            value={true}
            onChange={() => {}}
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <FormInput
            label="Ilość"
            value={formData.stock}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                stock: value,
              }))
            }
            type="number"
            placeholder="9999"
          />

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Niski próg magazynowy
            </label>
            <input
              type="number"
              placeholder="2"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Backorders
            </label>
            <select
              className="
                w-full rounded-lg border border-border
                bg-background px-3 py-2 text-sm outline-none
                focus:border-primary
              "
            >
              <option>Nie zezwalaj</option>
              <option>Zezwalaj + poinformuj</option>
              <option>Zezwalaj</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            Sprzedawany pojedynczo
          </label>
        </div>
      </section>
  );
}