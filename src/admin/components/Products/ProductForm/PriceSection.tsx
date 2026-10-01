import FormInput from "@/components/Forms/FormInput";
import FormToggle from "@/components/Forms/FormToggle";
import { ProductFormData } from "@/types/store";

type PriceSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
};

export function PriceSection({ formData, setFormData }: PriceSectionProps) {
  return (
    <section>
      <div className="mb-4 border-b border-primary/10 pb-3">
        <h2 className="text-lg font-semibold">Cena i sprzedaż</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="Cena regularna"
          value={formData.price}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              price: value,
            }))
          }
          type="number"
          placeholder="9999,99"
          required
        />

        <FormInput
          label="Cena promocyjna"
          value={formData.salePrice}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              salePrice: value,
            }))
          }
          type="number"
          placeholder="9999,99"
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <FormToggle
          label="Promocja"
          value={formData.onSale}
          className={`
              ${formData.onSale
                ? "bg-primary/50 text-black border-primary"
                : "border-primary/20 bg-background/50"}
            `}
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
          className={`
              ${formData.preorder
                ? "bg-primary/50 text-black border-primary"
                : "border-primary/20 bg-background/50"}
            `}
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
          className={`
              ${formData.visible
                ? "bg-primary/50 text-black border-primary"
                : "border-primary/20 bg-background/50"}
            `}
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