import { AnimatePresence, motion } from "framer-motion";
import { TriangleAlert, X } from "lucide-react";

type DeleteModalProps = {
  isOpen: boolean;
  title: string;
  description: React.ReactNode;

  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteModal({
  isOpen,
  title,
  description,
  onClose,
  onConfirm,
}: DeleteModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
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
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-md
              rounded-xl
              border
              border-red-500/20
              bg-card
              p-6
            "
          >
            <button
              onClick={onClose}
              className="
                absolute
                top-3
                right-3
                p-2
                rounded-lg
                hover:bg-muted
              "
            >
              <X size={18} />
            </button>

            <div className="flex justify-center mb-5">
              <div
                className="
                  p-4
                  rounded-full
                  bg-red-500/10
                "
              >
                <TriangleAlert
                  size={36}
                  className="text-red-500"
                />
              </div>
            </div>

            <h2 className="font-heading text-2xl text-center">
              {title}
            </h2>

            <p className="text-center text-muted-foreground mt-3 whitespace-pre-line">
              {description}
            </p>

            <div className="flex gap-3 mt-8">
              <button
                onClick={onClose}
                className="
                  flex-1
                  py-2
                  rounded-lg
                  border
                  border-border
                  hover:bg-muted
                "
              >
                Anuluj
              </button>

              <button
                onClick={onConfirm}
                className="
                  flex-1
                  py-2
                  rounded-lg
                  bg-red-600
                  hover:bg-red-700
                  text-white
                "
              >
                Usuń
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}