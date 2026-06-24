import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import AddEventForm from "./AddEventForm";

type AddEventModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddEventModal({
  isOpen,
  onClose,
}: AddEventModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [totalSlots, setTotalSlots] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    closeModal();
  }

  function closeModal() {
    setTitle("");
    setDescription("");
    setCategory("");
    setPrice("0");
    setTotalSlots("0");
    onClose();
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
              pt-12
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

            <div className="">
              <h2 className="font-heading text-center text-2xl mb-4 font-semibold">
                Dodaj Event
              </h2>
            </div>

            <AddEventForm
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              category={category}
              setCategory={setCategory}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              price={price}
              setPrice={setPrice}
              totalSlots={totalSlots}
              setTotalSlots={setTotalSlots}
              handleSubmit={handleSubmit}
              closeModal={closeModal}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}