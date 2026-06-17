import { motion, AnimatePresence } from "framer-motion";
import Sad from "@/assets/sad.png";
import type { Event } from "@/types/event";
import EventCard from "@/components/ui/eventCard";

type callendarRightProps = {
  selectedDay: number | null;
  month: number;
  events: Event[];
}

export default function CallendarRight({events, selectedDay, month}: callendarRightProps) {

  function padZero(number: number | null) {
  if (number === null) return;
  return String(number).padStart(2, "0");
}

  return (
    <AnimatePresence>
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="w-full md:w-[32rem] h-[28rem] lg:h-[34rem] mb-10 overflow-y-auto lg:w-[30rem] bg-primary/5 pt-5 rounded-lg border-4 border-primary"
      >
        <h1 className="text-primary font-heading text-xl lg:text-2xl font-medium mb-2 text-center">
          Wydarzenia w dniu {" "}
          {selectedDay 
          ? `${padZero(selectedDay)}.${padZero(month)}` 
          : `${padZero(new Date().getDate())}.${padZero(new Date().getMonth() + 1)}`}
        </h1>
        {events.length === 0 ? (
          <div className="py-5 text-center">
            <p className="text-muted-foreground flex gap-2 items-center justify-center select-none">
              Brak wydarzeń w tym dniu <img src={Sad} className="w-5 h-5"/>
            </p>
          </div>
        ) : (
          events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
        )
      }
      </motion.div>
    </AnimatePresence>
  )
}