import { motion, AnimatePresence } from "framer-motion";
import type { Event } from "@/types/event";
import EventCard from "@/components/ui/EventCard";
import type { Months } from "@/pages/Reservations";
import { padZero } from "@/utils/index";

type callendarRightProps = {
  selectedDate: Date | null;
  months: Months;
  events: Event[];
  handleEventClick: (event: Event) => void;
}

export default function CallendarRight({events, selectedDate, months, handleEventClick}: callendarRightProps) {

  const dateToShow = selectedDate ?? new Date();

  return (
    <AnimatePresence>
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="
      w-full md:w-[31rem] lg:w-[30rem]
      h-[27rem] xl:h-[34rem]
      overflow-y-auto
      bg-primary/5
      pt-5 px-4
      rounded-lg
      border-2 border-primary/40
      ">
        <h1 className="text-primary font-heading text-center text-lg">
          {`${padZero(dateToShow.getDate())}.${padZero(dateToShow.getMonth() + 1)}.${dateToShow.getFullYear()}`}
        </h1>
        <p className="text-center text-muted-foreground text-sm">
          wydarzenia: {events.length}
        </p>
        {events.length === 0 ? (
          <div className="py-4 text-center">
            <p className="text-muted-foreground flex gap-2 items-center justify-center select-none">
              Brak wydarzeń w tym dniu
            </p>
          </div>
        ) : (
          events.map((event) => (
          <EventCard key={event.id} event={event} months={months} selectedDate={selectedDate} handleEventClick={handleEventClick} />
        ))
        )
      }
      <div className="flex justify-center my-5">
        <a
        href="#booking-methods"
        className="scroll-smooth inline-block bg-primary text-black py-2 px-4 rounded-full font-heading font-medium hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)] hover:scale-105 transition-all duration-300">
          {events.length === 0 ? "Złóż rezerwacje" : "Zarezerwuj coś innego"}
        </a>
      </div>
      </motion.div>
    </AnimatePresence>
  )
}