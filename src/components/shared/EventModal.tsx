import type { Event } from "@/types/event";
import { X } from "lucide-react";
import type { Months } from "@/pages/Reservations";
import EventModalContent from "./EventModalContent";

type EventModalProps = {
  months: Months;
  event: Event;
  onClose: () => void;
}

export default function EventModal({ event, onClose, months }: EventModalProps) {
  return (
  <div
  onClick={onClose}
  className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div
    onClick={(e) => e.stopPropagation()}
    className="
      bg-card
      w-[95vw] max-w-2xl
      max-h-[90vh]
      overflow-y-auto
      rounded-xl
      relative
      flex flex-col gap-2
      p-4 md:p-6
      border-2 border-primary/30
      shadow-[0_0_10px_1px_hsl(43,50%,15%)]
    ">
      <button
      onClick={onClose}
      className="absolute top-2 right-2 z-50 p-2 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background transition-colors">
        <X className="w-4 h-4" />
      </button>
      <EventModalContent
        event={event}
        months={months}
        onClose={onClose}
      />
    </div>
  </div>
  )
}