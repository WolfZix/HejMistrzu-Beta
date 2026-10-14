
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import FormInput from "@/components/Forms/FormInput";
import FormFileInput from "@/components/Forms/FormFileInput";
import type { ProductVariationFormData } from "@/types/store";

type AddVariationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (variation: ProductVariationFormData) => void;
  variationToEdit?: ProductVariationFormData | null;
  onSave?: (variation: ProductVariationFormData) => void;
};

const initialVariation: ProductVariationFormData = {
  name: "",
  price: "",
  salePrice: "",
  stock: "",
  image: null,
};

export default function AddVariationModal({
  isOpen,
  onClose,
  onAdd,
  variationToEdit = null,
  onSave,
}: AddVariationModalProps) {
  const [formData, setFormData] =
    useState<ProductVariationFormData>(initialVariation);

  const isEditing = Boolean(variationToEdit);

  useEffect(() => {
    if (!isOpen) return;

    setFormData(
      variationToEdit
        ? { ...variationToEdit, image: null }
        : { ...initialVariation }
    );
  }, [isOpen, variationToEdit]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function closeModal() {
    onClose();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (isEditing) {
      onSave?.(formData);
    } else {
      onAdd(formData);
    }

    closeModal();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-xl border border-primary/30 bg-card px-6 pb-6 pt-10 shadow-[0_0_15px_1px_hsl(43,50%,10%)]"
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Zamknij"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <h2 className="font-heading text-2xl font-semibold">
                {isEditing ? "Edytuj wariant" : "Dodaj wariant"}
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Ustaw nazwę, cenę i stan magazynowy wariantu.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                label="Nazwa wariantu"
                required
                value={formData.name}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, name: value }))
                }
              />

              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  label="Cena"
                  type="number"
                  required
                  value={formData.price}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, price: value }))
                  }
                />

                <FormInput
                  label="Cena promocyjna"
                  type="number"
                  value={formData.salePrice}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, salePrice: value }))
                  }
                />
              </div>

              <FormInput
                label="Stan magazynowy"
                type="number"
                required
                value={formData.stock}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, stock: value }))
                }
              />

              {formData.imageUrl && !formData.image && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Aktualne zdjęcie wariantu
                  </p>
                  <img
                    src={formData.imageUrl}
                    alt={formData.name}
                    className="h-24 w-24 rounded-md border border-border object-cover"
                  />
                </div>
              )}

              <FormFileInput
                label="Zdjęcie wariantu"
                onChange={(files) =>
                  setFormData((prev) => ({
                    ...prev,
                    image: files[0] ?? null,
                  }))
                }
              />

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-muted"
                >
                  Anuluj
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-primary/90"
                >
                  {isEditing ? "Zapisz wariant" : "Dodaj wariant"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
