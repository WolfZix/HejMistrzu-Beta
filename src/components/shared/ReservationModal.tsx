import type { Event } from "@/types/event";
import { Calendar, Clock, Tag, Users, X } from "lucide-react";
import type { Months } from "@/pages/Reservations";
import ReservationForm from "../ui/reservationForm";

type ReservationModalProps = {
  months: Months;
  event: Event;
  onClose: () => void;
}

export default function ReservationModal({ event, onClose, months }: ReservationModalProps) {
  const eventDate = new Date(event.date);
  const eventDay = eventDate.getDate();
  const eventMonthName = months[(eventDate.getMonth() + 1) as keyof typeof months].name;
  const eventYear = eventDate.getFullYear();
  const freeSlots = event.totalSlots - event.bookedSlots;

  return (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="
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
      <div className="z-20">
        <div>
          <p className="font-heading text-lg md:text-2xl font-bold tracking-wide line-clamp-2">{event.title}</p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">{event.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-4 text-sm">
          <div className="space-y-1">
            <p className="flex gap-2 w-fit">
              <Calendar size={18} className="text-primary" />Data: {eventDay} {eventMonthName} {eventYear}
            </p>
            <p className="flex gap-2 w-fit">
              <Users size={18} className="text-primary" />Wolne miejsca: {freeSlots}
            </p>
          </div>
          <div className="space-y-1">
            <p className="flex gap-2 w-fit">
              <Clock size={18} className="text-primary" />Godzina: {event.startTime}
            </p>
            <p className="flex gap-2 w-fit">
              <Tag size={18} className="text-primary" />Cena: {event.price}zł
            </p>
          </div>
        </div> 
        <ReservationForm
        event={event}
        freeSlots={freeSlots}
        onClose={onClose}
        />
      </div>
      <img
      src={event.image}
      className="
      absolute inset-0
      w-full h-full
      object-cover
      opacity-20
      [mask-image:linear-gradient(to_bottom,black_0%,transparent_60%,transparent_100%)]
      "/>
    </div>
  </div>
  )
}