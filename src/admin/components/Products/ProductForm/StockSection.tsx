import FormInput from "@/components/Forms/FormInput";
import FormSelect from "@/components/Forms/FormSelect";
import FormToggle from "@/components/Forms/FormToggle";
import { ProductFormData } from "@/types/store";

type StockSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
  disabled: boolean;
};

export function StockSection({ formData, setFormData, disabled }: StockSectionProps) {
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
            value={formData.sku}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                sku: e.target.value,
              }))
            }
            placeholder="HM-001"
            className="w-full rounded-lg border border-primary/20 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            GTIN, UPC, EAN, lub ISBN
          </label>
          <input
            type="text"
            value={formData.gtin}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                gtin: e.target.value,
              }))
            }
            placeholder="5901234567890"
            className="w-full rounded-lg border border-primary/20 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="mt-4 flex gap-4">
        <FormToggle
          label="Zarządzaj stanem magazynowym"
          disabled={disabled}
          value={formData.manageStock}
          className={`${disabled ? " opacity-50" : "opacity-100"}`}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              manageStock: value,
            }))
          }
        />
        <FormToggle
          label="Sprzedawany pojedyńczo"
          value={formData.soldIndividually}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              soldIndividually: value,
            }))
          }
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 xl:gap-0 xl:max-w-xl">
        <FormInput
          label="Ilość"
          value={formData.stock}
          disabled={disabled}
          className={`xl:w-[90%] ${disabled ? "opacity-50" : "opacity-100"}`}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              stock: value,
            }))
          }
          type="number"
          placeholder={`${disabled ? "-" : "9999"}`}
        />

        <div>
          <FormInput
          label="Niski próg magazynowy"
          value={formData.lowStockThreshold ?? ""}
          disabled={disabled}
          className={`xl:w-[90%] ${disabled ? "opacity-50" : "opacity-100"}`}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              lowStockThreshold: value,
            }))
          }
          type="number"
          placeholder={`${disabled ? "-" : "5"}`}
        />
        </div>

        <div>
          <FormSelect 
          label="Backorders"
          value={formData.backorders}
          className="text-nowrap"
          containerClassname="w-full"
          options={[
            { label: "Nie zezwalaj", value: "Nie zezwalaj" },
            { label: "Zezwalaj + poinformuj", value: "Zezwalaj + poinformuj" },
            { label: "Zezwalaj", value: "Zezwalaj" },
          ]}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              backorders: value as ProductFormData["backorders"],
            }))}
          />
        </div>
      </div>
    </section>
  );
}