import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import AddProductForm from "./AddProductForm";

type AddProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddProductModal({
  isOpen,
  onClose,
}: AddProductModalProps) {
  const [name, setName] = useState("");

  const [regularPrice, setRegularPrice] =
    useState("");

  const [salePrice, setSalePrice] =
    useState("");

  const [stock, setStock] = useState("");

  const [category, setCategory] =
    useState("");

  const [description, setDescription] =
    useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function closeModal() {
    setName("");
    setRegularPrice("");
    setSalePrice("");
    setStock("");
    setCategory("");
    setDescription("");

    onClose();
  }

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    console.log({
      name,
      regularPrice,
      salePrice,
      stock,
      category,
      description,
    });

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
                Dodaj produkt
              </h2>
            </div>

            <AddProductForm
              name={name}
              setName={setName}
              regularPrice={regularPrice}
              setRegularPrice={
                setRegularPrice
              }
              salePrice={salePrice}
              setSalePrice={setSalePrice}
              stock={stock}
              setStock={setStock}
              category={category}
              setCategory={setCategory}
              description={description}
              setDescription={
                setDescription
              }
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