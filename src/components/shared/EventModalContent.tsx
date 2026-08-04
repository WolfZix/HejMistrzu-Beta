import type { Event } from "@/types/event";
import type { Months } from "@/pages/Reservations";
import EventReservationForm from "../ui/EventReservationForm";
import { Calendar, Clock, Tag, Users } from "lucide-react";

type EventModalContentProps = {
  event: Event;
  months: Months;
  onClose: () => void;
  preview?: boolean;
};

export default function EventModalContent({
  event,
  months,
  onClose,
  preview = false,
}: EventModalContentProps) {

  const eventDate = new Date(event.date);
  const eventDay = eventDate.getDate();
  const eventMonthName = months[(eventDate.getMonth() + 1) as keyof typeof months].name;
  const eventYear = eventDate.getFullYear();
  const freeSlots = event.maxSlots;

  const imageSrc = event.image
  ? `http://localhost:3000/uploads/${event.image}`
  : "http://localhost:3000/uploads/EventPlaceholder.webp";

  return (
  <div
    className="
      bg-card
      w-full
      max-w-2xl
      max-h-[90vh]
      overflow-y-auto
      rounded-xl
      relative
      flex
      flex-col
      gap-2
      p-4
      md:p-6
      border-2
      border-primary/30
      shadow-[0_0_10px_1px_hsl(43,50%,15%)]
    "
  >

    <div className="z-20">
      <div>
        <p className="font-heading text-lg md:text-2xl font-bold tracking-wide line-clamp-2">{event.title}</p>
        <p className="text-muted-foreground text-sm md:text-base mb-4 max-h-[150px] overflow-y-auto">
          {event.description}
        </p>
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
            <Clock size={18} className="text-primary" />Godzina: {event.startTime.slice(0,5)}
          </p>
          <p className="flex gap-2 w-fit">
            <Tag size={18} className="text-primary" />Cena: {event.price}zł
          </p>
        </div>
      </div> 
      <EventReservationForm
      event={event}
      freeSlots={freeSlots}
      onClose={onClose}
      preview={preview}
      />
    </div>
    <img
      src={imageSrc}
      className="
      absolute top-0 bottom-0 left-0 right-0
      w-full h-full
      object-cover
      opacity-20
      [mask-image:linear-gradient(to_bottom,black_0%,transparent_60%,transparent_100%)]
      "/>
    </div>
  );
}