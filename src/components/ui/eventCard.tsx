import type { Event } from "@/types/event";
import type { Months } from "@/pages/Reservations";
import { Calendar, Clock, MapPin, Tag } from "lucide-react";

type EventCardProps = {
  event: Event;
  months: Months;
  selectedDate: Date | null;
  setSelectedEvent: React.Dispatch<React.SetStateAction<Event | null>>;
}

function padZero(number: number | null) {
  if (number === null) return;
  return String(number).padStart(2, "0");
  }

export default function EventCard({event, months, setSelectedEvent}: EventCardProps) {

  const freeSlots = event.totalSlots - event.bookedSlots
  const today = new Date();

  const eventDate = new Date(event.date);
  const eventDay = eventDate.getDate();
  const eventMonthName = months[(eventDate.getMonth() + 1) as keyof typeof months].name;
  const eventYear = eventDate.getFullYear();

  today.setHours(0,0,0,0);
  eventDate.setHours(0,0,0,0);

  const isPastEvent = eventDate < today;

  return (
    <div
      className={`
        flex flex-col
        w-full h-fit
        relative
        p-5
        border rounded-lg
        mx-auto mb-2
        overflow-hidden
        transition-all duration-500
        select-none
        bg-muted-foreground/5
        ${freeSlots == 0
          ? "hover:border-muted-foreground/20 hover:shadow-[0_0_10px_1px_hsl(216,5%,20%)]"
          : "hover:border-primary/20 hover:shadow-[0_0_10px_1px_hsl(43,50%,15%)]"
        }
    `}>
    <img
      src={event.image}
      className="
        absolute inset-0
        w-[75%] h-[75%]
        object-cover
        opacity-30
        [mask-image:linear-gradient(to_bottom_right,black_0%,transparent_60%,transparent_100%)]
      "/>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-heading font-semibold mb-2 md:mb-1">
          {event.title}
        </h3>
        <span className={`text-sm text-nowrap ${freeSlots == 0 ? "text-muted-foreground" : "text-primary"}`}>
          {freeSlots} miejsc
        </span>
      </div>
      <p className="mb-2 flex flex-col gap-1 text-xs">
        <span className=" text-foreground/90 flex gap-1 items-center">
          <Calendar size={12} className={`${freeSlots == 0 ? "text-muted-foreground" : "text-primary"}`} />
          {eventDay} {eventMonthName} {eventYear}
        </span>
        <span className="text-foreground/70 flex gap-1 items-center">
          <Clock size={12} className={`${freeSlots == 0 ? "text-muted-foreground" : "text-primary"}`} />
          {event.startTime}
        </span>
        <span className="text-foreground/70 flex gap-1 items-center">
          <MapPin size={12} className={`${freeSlots == 0 ? "text-muted-foreground" : "text-primary"}`} />
          {event.location}
        </span>
      </p>
      <p className="ml-2"><span className="text-sm text-foreground/70">{event.description}</span></p>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
        <span className={`text-2xl font-semibold flex gap-1 mb-4 md:mb-0 items-center ${freeSlots == 0 ? "text-muted-foreground" : "text-primary"}`}>
          <Tag size={24} />
          <span className="text-foreground">{event.price}zł</span>
        </span>
      <button
        disabled={event.bookedSlots === event.totalSlots || isPastEvent}
        className={`
          w-full md:w-fit
          tracking-tighter
          font-heading font-semibold
          px-5 py-1
          rounded
          transition-all
          duration-300
          z-10
          ${event.bookedSlots === event.totalSlots || isPastEvent 
            ? "bg-muted text-muted-foreground cursor-not-allowed hover:shadow-none"
            : "bg-primary/80 text-black/80 cursor-pointer hover:bg-primary hover:text-black hover:scale-[102%] hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]"
          }
        `}
        onClick={() => setSelectedEvent(event)}
      >
        {isPastEvent
          ? "Wydarzenie zakończone"
          : "Zarezerwuj miejsce"
        }
      </button>
      </div>
    </div>
  )
}