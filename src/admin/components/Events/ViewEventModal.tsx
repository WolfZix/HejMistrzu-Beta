import { useEffect } from "react";
import InfoRow from "../InfoRow";
import { Event } from "@/types/event";
import { AnimatePresence, motion } from "framer-motion";

type ViewEventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
};

export default function ViewEventModal({isOpen, onClose, event}: ViewEventModalProps) {
  useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);
return (
    <div className="space-y-5">

    <div className="grid grid-cols-2 gap-4">

      <InfoRow
        label="Kategoria"
        value={event?.category}
      />

      <InfoRow
        label="Data"
        value={new Date(event?.date ?? "").toLocaleDateString("pl-PL")}
      />

      <InfoRow
        label="Cena"
        value={`${event?.price.toFixed(2)} zł`}
      />

      <InfoRow
        label="Miejsca"
        value={`${event?.bookedSlots}/${event?.totalSlots}`}
      />

    </div>

    <div>
      <p className="text-sm text-muted-foreground">
        Opis
      </p>

      <div className="glass rounded-lg p-4 mt-2">
        {event?.description || "Brak opisu"}
      </div>
    </div>

  </div>
  );
}