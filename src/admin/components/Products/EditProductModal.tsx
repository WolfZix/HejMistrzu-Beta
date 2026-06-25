import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import ProductForm from "./ProductForm";
import type { ProductFormData, StoreProduct } from "@/types/store";

type EditProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: StoreProduct | null;
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
};

export default function EditProductModal({
  isOpen,
  onClose,
  product,
  formData,
  setFormData,
}: EditProductModalProps) {

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if(!product) return;

    setFormData((prev) => ({
      ...prev,
      name: product.name,
      description: product.description,
      price: product.price?.toString(),
      salePrice: product.salePrice?.toString() ?? "",
      stock: product.stock.toString(),
      category: product.categories.at(-1)?.name ?? "",
    }))

  }, [product]);

  function closeModal() {
    setFormData((prev) => ({
      ...prev,
      name: "",
      category: "",
      stock: "",
      description: "",
      price: "",
      salePrice: "",
    }))
    onClose();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    closeModal();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={closeModal}
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/60
            backdrop-blur-sm
            p-4
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
            onMouseDown={(e) =>
              e.stopPropagation()
            }
            className="
              w-full
              max-w-7xl
              relative
              rounded-xl
              border
              border-primary/30
              bg-card
              px-6
              pb-6
              pt-10
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]
            "
          >
            <button
              type="button"
              onClick={closeModal}
              className="
                absolute
                top-3
                right-3
                p-2
                rounded-lg
                hover:bg-muted/30
              "
            >
              <X size={18} />
            </button>

            <div className="mb-4">
              <h2
                className="
                  font-heading
                  text-center
                  text-2xl
                  font-semibold
                "
              >
                Edytuj produkt
              </h2>
            </div>

            <ProductForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={
                handleSubmit
              }
              closeModal={closeModal}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}