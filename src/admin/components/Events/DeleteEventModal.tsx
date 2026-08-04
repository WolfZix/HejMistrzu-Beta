import type { Event } from "@/types/event";
import { animate, AnimatePresence, motion } from "framer-motion";
import { LoaderCircle, TriangleAlert } from "lucide-react";
import { useState } from "react";
import axios from "axios";

type DeleteEventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  event: Event;
  onEventDeleted: () => void;
};

export default function DeleteEventModal({ isOpen, event, onClose, onEventDeleted }: DeleteEventModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  async function handleDelete() {
    try {
      setIsDeleting(true);
      await axios.delete(`http://localhost:3000/events/${event.id}`);
      onEventDeleted();
      onClose();
    } catch(error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  }
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
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            className="
              w-full
              max-w-lg
              rounded-xl
              border
              border-red-500/30
              bg-card
              p-6
            "
          >
            <div className="flex justify-center mb-5">
              <TriangleAlert
                size={64}
                className="text-red-500"
              />
            </div>

            <h2 className="text-center font-heading text-2xl font-semibold">Usuń wydarzenie</h2>
            <p className="text-center text-muted-foreground mt-3">Czy na pewno chcesz usunąć wydarzenie:</p>
            <p className="text-center font-semibold text-primary mt-2">{event.title}</p>
            <p className="text-center text-sm text-muted-foreground mt-4">Operacji nie będzie można cofnąć.</p>

            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={onClose}
                disabled={isDeleting}
                className="
                  px-4
                  py-2
                  rounded-lg
                  border
                  hover:bg-muted
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  transition-all duration-200
                "
              >
                Anuluj
              </button>

              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-red-600
                  text-white
                  hover:bg-red-700/60
                  min-w-[12rem]
                  flex
                  justify-center
                  items-center
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  transition-all duration-200
                "
              >
                {isDeleting ? (
                  <span className="flex gap-2 items-center text-nowrap">
                    Usuwanie<LoaderCircle size={16} className={"animate-spin"} />
                  </span>
                  ) : "Usuń Wydarzenie"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}