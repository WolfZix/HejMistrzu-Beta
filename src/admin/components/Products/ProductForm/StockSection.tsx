import FormInput from "@/components/Forms/FormInput";
import FormSelect from "@/components/Forms/FormSelect";
import FormToggle from "@/components/Forms/FormToggle";
import { ProductFormData } from "@/types/store";
import { useState } from "react";

type StockSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
};

export function StockSection({ formData, setFormData }: StockSectionProps) {
  const [isManagingStock, setIsManagingStock] = useState(false);
  const [isSoldIndividually, setIsSoldIndividually] = useState(false);
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
              className="w-full rounded-lg border border-primary/20 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              GTIN / EAN
            </label>
            <input
              type="text"
              placeholder="5901234567890"
              className="w-full rounded-lg border border-primary/20 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="mt-4 flex gap-4">
          <FormToggle
            label="Zarządzaj stanem magazynowym"
            value={isManagingStock}
            onChange={setIsManagingStock}
          />
          <FormToggle
            label="Sprzedawany pojedyńczo"
            value={isSoldIndividually}
            onChange={setIsSoldIndividually}
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
            <FormInput
            label="Niski próg magazynowy"
            value={formData.lowStockThreshold}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                lowStockThreshold: value,
              }))
            }
            type="number"
            placeholder="5"
          />
          </div>

          <div>
            <FormSelect 
            label="Backorders"
            value={formData.backorders}
            className="text-nowrap"
            options={[
              { label: "Nie zezwalaj", value: "Nie zezwalaj" },
              { label: "Zezwalaj + poinformuj", value: "Zezwalaj + poinformuj" },
              { label: "Zezwalaj", value: "Zezwalaj" },
            ]}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                backorders: value,
              }))
            }
            />
          </div>
        </div>
      </section>
  );
}