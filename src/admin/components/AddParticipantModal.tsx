import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import FormInput from "@/components/Forms/FormInput";

type AddParticipantModalProps = {
  isAddOpen: boolean;
  onClose: () => void;
  onParticipantAdded: () => void;
};

export default function AddParticipantModal({
  isAddOpen,
  onClose,
  onParticipantAdded,
}: AddParticipantModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    pokemonId: "",
    nickname: "",
  })

  useEffect(() => {
    document.body.style.overflow = isAddOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isAddOpen]);

  function closeModal() {
    setFormData({
      name: '',
      surname: '',
      email: '',
      pokemonId: '',
      nickname: '',
    })
    onClose();
  }

  return (
    <AnimatePresence>
      {isAddOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={closeModal}
          className="
            fixed
            inset-0
            z-50
            items-center
            justify-center
            gap-40
            flex
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
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            className="
              w-full
              max-w-2xl
              relative
              rounded-xl
              border
              border-primary/30
              bg-card
              px-6
              pb-6
              pt-6
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]
              col-span-2
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

            <div>
              <h2 className="font-heading text-center text-2xl mb-2 font-semibold">
                Dodaj Wydarzenie
              </h2>
            </div>
            <div>
              <FormInput
              label="Imię"
              value={formData.name}
              onChange={() => ""}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}