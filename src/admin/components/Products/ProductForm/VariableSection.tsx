import { ProductFormData } from "@/types/store";
import { Plus, X } from "lucide-react";

type VariableSectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
  onAddVariation: () => void;
};

export function VariableSection({ formData, setFormData, onAddVariation }: VariableSectionProps) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between border-b border-primary/10 pb-3">
        <div>
          <h2 className="text-lg font-semibold">Warianty produktu</h2>
          <p className="text-sm text-muted-foreground">
            Warianty z własną ceną, stanem magazynowym i zdjęciem.
          </p>
        </div>

        <button
          type="button"
          onClick={onAddVariation}
          className="
            flex items-center gap-2 rounded-lg
            border border-primary/30 px-3 py-2
            text-sm text-primary transition-colors
            hover:bg-primary/10
          "
        >
          <Plus size={16} />
          Dodaj wariant
        </button>
      </div>

      {formData.variations.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {formData.variations.map((variation, index) => (
            <div
              key={index}
              className="
                flex items-center gap-2 rounded-full
                border border-primary/30 bg-primary/10
                px-3 py-1.5 text-sm
              "
            >
              <span>{variation.name}</span>

              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    variations: prev.variations.filter(
                      (_, variationIndex) =>
                        variationIndex !== index
                    ),
                  }));
                }}
                className="
                  rounded-full p-0.5 text-muted-foreground
                  transition-colors hover:bg-destructive/10
                  hover:text-destructive
                "
                aria-label={`Usuń wariant ${variation.name}`}
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          Brak wariantów.
        </p>
      )}
    </section>
  );
}