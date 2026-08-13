import type { Event } from "@/types/event";
import { X } from "lucide-react";
import type { Months } from "@/pages/Reservations";
import EventModalContent from "./EventModalContent";

type EventModalProps = {
  months: Months;
  event: Event;
  onClose: () => void;
  onRegistrationSuccess: () => void;
}

export default function EventModal({ event, onClose, months, onRegistrationSuccess }: EventModalProps) {
  return (
  <div
  onClick={onClose}
  className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div
    onClick={(e) => e.stopPropagation()}
    className="
      w-[95vw] max-w-3xl
      rounded-xl
      relative
    ">
      <EventModalContent
        event={event}
        months={months}
        onClose={onClose}
        onRegistrationSuccess={onRegistrationSuccess}
      />
      <button
      onClick={onClose}
      className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background transition-colors">
        <X className="w-4 h-4" />
      </button>
    </div>
  </div>
  )
}