import { motion, AnimatePresence } from "framer-motion";
import Sad from "@/assets/sad.png";
import type { Event } from "@/types/event";
import EventCard from "@/components/ui/eventCard";
import type { Months } from "@/pages/Reservations";
import { padZero } from "@/utils/index";

type callendarRightProps = {
  selectedDate: Date | null;
  months: Months;
  events: Event[];
  setSelectedEvent: React.Dispatch<React.SetStateAction<Event | null>>;
}

export default function CallendarRight({events, selectedDate, months, setSelectedEvent}: callendarRightProps) {

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
      h-[27rem] xl:h-[32rem]
      overflow-y-auto
      bg-primary/5
      pt-5 px-4 lg:mt-[6rem] xl:mt-[7rem]
      rounded-lg
      border-2 border-primary/40
      ">
        <h1 className="text-primary font-heading text-center text-lg">
          {`${padZero(dateToShow.getDate())}.${padZero(dateToShow.getMonth() + 1)}.${dateToShow.getFullYear()}`}
        </h1>
        <p className="text-center text-muted-foreground text-sm mb-4">
          wydarzenia: {events.length}
        </p>
        {events.length === 0 ? (
          <div className="py-5 text-center">
            <p className="text-muted-foreground flex gap-2 items-center justify-center select-none">
              Brak wydarzeń w tym dniu <img src={Sad} className="w-5 h-5"/>
            </p>
          </div>
        ) : (
          events.map((event) => (
          <EventCard key={event.id} event={event} months={months} selectedDate={selectedDate} setSelectedEvent={setSelectedEvent} />
        ))
        )
      }
      </motion.div>
    </AnimatePresence>
  )
}