import FormInput from "@/components/Forms/FormInput";
import FormToggle from "@/components/Forms/FormToggle";
import { ProductFormData } from "@/types/store";

type PriceSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
  disabled: boolean;
};

export function PriceSection({ formData, setFormData, disabled }: PriceSectionProps) {
  return (
    <section>
      <div className="mb-4 border-b border-primary/10 pb-3">
        <h2 className="text-lg font-semibold">Cena i sprzedaż</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="Cena regularna"
          value={formData.price}
          disabled={disabled}
          className={`${disabled ? "opacity-50" : "opacity-100"}`}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              price: value,
            }))
          }
          type="number"
          placeholder={`${disabled ? "-" : "99,99"}`}
          required
        />

        <FormInput
          label="Cena promocyjna"
          value={formData.salePrice}
          disabled={disabled}
          className={`${disabled ? "opacity-50" : "opacity-100"}`}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              salePrice: value,
            }))
          }
          type="number"
          placeholder={`${disabled ? "-" : "99,99"}`}
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <FormToggle
          label="Promocja"
          value={formData.onSale}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              onSale: value,
            }))
          }
        />

        <FormToggle
          label="Preorder"
          value={formData.preorder}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              preorder: value,
            }))
          }
        />

        <FormToggle
          label="Widoczny"
          value={formData.visible}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              visible: value,
            }))
          }
        />
      </div>
    </section>
  );
}