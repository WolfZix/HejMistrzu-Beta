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
}: AddVariationModalProps) {
  const [formData, setFormData] =
    useState<ProductVariationFormData>(initialVariation);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function closeModal() {
    setFormData(initialVariation);
    onClose();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onAdd(formData);
    closeModal();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => { e.target === e.currentTarget ? closeModal() : "" }}
          className="
            fixed inset-0 z-[60]
            flex items-center justify-center
            bg-black/60 backdrop-blur-sm
            p-4
          "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(e) => e.stopPropagation()}
            className="
              relative
              w-full max-w-xl
              rounded-xl
              border border-primary/30
              bg-card
              px-6 pb-6 pt-10
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]
            "
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={closeModal}
              className="
                absolute right-4 top-4
                rounded-md p-1
                text-muted-foreground
                hover:bg-muted
                hover:text-foreground
                transition-colors
              "
            >
              <X size={20} />
            </button>

            {/* TITLE */}
            <div className="mb-6">
              <h2 className="font-heading text-2xl font-semibold">
                Dodaj wariant
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Dodaj wariant produktu z osobną ceną, stanem i zdjęciem.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* NAME */}
              <FormInput
                label="Nazwa wariantu"
                required
                value={formData.name}
                onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  name: value,
                }))
              }
              />

              {/* PRICE */}
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  label="Cena"
                  type="number"
                  required
                  value={formData.price}
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      price: value,
                    }))
                  }
                />

                <FormInput
                  label="Cena promocyjna"
                  type="number"
                  value={formData.salePrice}
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      salePrice: value,
                    }))
                  }
                />
              </div>

              {/* STOCK */}
              <FormInput
                label="Stan magazynowy"
                type="number"
                required
                value={formData.stock}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    stock: value,
                  }))
                }
              />

              {/* IMAGE */}
              <FormFileInput
                label="Zdjęcie wariantu"
                required
                onChange={(file) =>
                  setFormData((prev) => ({
                    ...prev,
                    image: file,
                  }))
                }
              />

              {/* ACTIONS */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="
                    rounded-lg
                    border border-border
                    px-4 py-2
                    text-sm
                    hover:bg-muted
                    transition-colors
                  "
                >
                  Anuluj
                </button>

                <button
                  type="submit"
                  className="
                    rounded-lg
                    bg-primary
                    px-4 py-2
                    text-sm
                    font-medium
                    text-black
                    hover:bg-primary/90
                    transition-colors
                  "
                >
                  Dodaj wariant
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}