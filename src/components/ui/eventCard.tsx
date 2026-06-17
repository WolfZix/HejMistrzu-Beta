import type { Event } from "@/types/event";

type EventCardProps = {
  event: Event;
}

export default function EventCard({event}: EventCardProps) {

  const freeSlots = event.totalSlots - event.bookedSlots

  return (
    <div
      key={event.id}
      className={`
        flex flex-col
        w-[95%] h-fit
        relative
        py-2 px-4
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
      src={event.background}
      className="
        absolute inset-0
        w-[75%] h-[75%]
        object-cover
        opacity-30
        [mask-image:linear-gradient(to_bottom_right,black_0%,transparent_60%,transparent_100%)]
      "/>
      <p className="w-full flex justify-between mb-2 z-10">
        <span>
          {event.title}
        </span>
        <span>
          Wolne miejsca: <span className={`${freeSlots == 0 ? "text-muted-foreground" : "text-primary" }`}>{freeSlots}</span>
        </span>
      </p>
      <p className="ml-2 z-10"><span className="text-sm text-foreground/70">{event.description}</span></p>
      <button
        disabled={event.bookedSlots === event.totalSlots}
        className={`
          w-fit
          tracking-tighter
          font-heading font-semibold
          px-3 py-1
          rounded
          ml-auto my-4
          transition-all
          duration-300
          z-10
          ${event.bookedSlots === event.totalSlots 
            ? "bg-muted text-muted-foreground cursor-not-allowed hover:shadow-none"
            : "bg-primary/80 text-black/80 cursor-pointer hover:bg-primary hover:text-black hover:scale-[102%] hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]"
          }
        `}
      >
        Zarezerwuj miejsce
      </button>
    </div>
  )
}