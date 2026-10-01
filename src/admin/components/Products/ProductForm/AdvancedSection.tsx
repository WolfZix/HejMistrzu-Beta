import { ProductFormData } from "@/types/store";
import { CheckIcon, X } from "lucide-react";

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
            value={formData.purchaseNote}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                purchaseNote: e.target.value,
              }))
            }
            rows={4}
            placeholder="Opcjonalna wiadomość dla klienta..."
            className="
              w-full resize-y rounded-lg border
              border-primary/20 bg-background px-3 py-2
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
              value={formData.menuOrder}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  menuOrder: e.target.value,
                }))
              }
              placeholder="0"
              className="w-full rounded-lg border border-primary/20 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>

          <label
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                posAvailable: !prev.posAvailable,
              }))
            }
            className={`
              flex cursor-pointer items-center gap-3
              rounded-lg border border-primary/20
              px-4 py-3 text-sm text-white
              transition-colors hover:border-primary/40
              ${formData.posAvailable ? "bg-primary/10 border-primary" : ""}
            `}
          >
            {formData.posAvailable ? (
              <CheckIcon className="h-4 w-4" />
            ) : (
              <X className="h-4 w-4" />
            )}
            Dostępny dla POS
          </label>
        </div>
      </div>
    </section>
  );
}