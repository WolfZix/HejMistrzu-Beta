import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

import EventCard from "@/components/ui/EventCard";
import EventModalContent from "@/components/shared/EventModalContent";

import type { Event } from "@/types/event";
import type { Months } from "@/pages/Reservations";

type ViewEventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
  months: Months;
};

export default function ViewEventModal({
  isOpen,
  onClose,
  event,
  months,
}: ViewEventModalProps) {

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50"
        >

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-7xl
              rounded-xl
              border
              border-primary/30
              bg-background
              p-6
            "
          >

            <button
              onClick={onClose}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            <div className="flex justify-center gap-16 items-center mt-8">
              <div>
                <EventCard
                  event={event}
                  isPreview
                />
              </div>
                {!event.link && (
                  <EventModalContent
                    event={event}
                    months={months}
                    onClose={onClose}
                    preview
                  />
                )}
                {event.link && (
                  <div className="flex flex-col w-full max-w-2xl mb-auto">
                    <p>Rezerwacja na to wydarzenie odbywa się po kliknięciu w poniższy link:</p>
                    <a href={event.link} target="_blank" className="text-primary underline mt-2">{event.link}</a>
                  </div>
                )}
            </div>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}