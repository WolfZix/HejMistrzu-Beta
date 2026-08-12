import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Reservation } from "@/types/reservation";

type ViewReservationModalProps = {
  isOpen: boolean;
  reservation: Reservation;
  onClose: () => void;
}

export default function ViewReservationModal({
  isOpen,
  reservation,
  onClose,
}: ViewReservationModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
              max-w-xl
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
              onClick={onClose}
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

            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-center text-2xl mb-2 font-semibold">
                Rezerwacja numer {reservation.id}
              </h2>
              <div className="space-y-4 text-lg text-primary">
                <div className="flex gap-8 border-b pb-4">
                  <h1>Rodzaj rezerwacji:</h1>
                  <span className="text-white">
                    {reservation.duration === null ? "Gralnia" : "Sesja RPG"}
                  </span>
                </div>
                <div className="flex gap-8 border-b pb-4">
                  <h1>Imię i nazwisko:</h1>
                  <span className="text-white">{reservation.fullName}</span>
                </div>
                <div className="flex gap-8 border-b pb-4">
                  <h1>Email:</h1>
                  <span className="text-white">{reservation.email}</span>
                </div>
                <div className="flex gap-8 border-b pb-4">
                  <h1>Numer telefonu:</h1>
                  <span className="text-white">{reservation.phone}</span>
                </div>
                <div className="flex gap-8 border-b pb-4">
                  <h1>Data:</h1>
                  <span className="text-white">
                    {new Date(reservation.reservationDate).toLocaleDateString("pl-PL", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex gap-8 border-b pb-4">
                  <h1>Godzina:</h1>
                  <span className="text-white">{reservation.reservationTime}</span>
                </div>
                <div className="flex gap-8 border-b pb-4">
                  {reservation.duration !== null ? (
                    <>
                      <h1>Ilość godzin:</h1>
                      <span className="text-white">{reservation.duration}</span>
                    </>
                  ) : (
                    <>
                      <h1>Ilość osób:</h1>
                      <span className="text-white">{reservation.peopleCount}</span>
                    </>
                  )}
                </div>
                <div className="flex gap-8 border-b pb-4">
                  <h1>Status:</h1>
                  <span className="text-white">{reservation.status}</span>
                </div>
                <div className="flex gap-8 pb-4">
                  <h1>Notatki:</h1>
                  <span className="text-white">{reservation.notes}</span>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}