import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import Calendar from "@/components/ui/callendar";
import CallendarRight from "@/components/ui/callendarRight";
import BookingMethods from "@/components/ui/bookingMethods";
import ContactForm from "@/components/ui/contactForm";
import { EVENTS as events } from "@/data/events";

export default function Reservations() {
  const [month, setMonth] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const dayToShow = selectedDay ?? new Date().getDate();
  const monthToShow = selectedDay ? month : new Date().getMonth() + 1;

  const getEventForDay = (day: number) => {
    return events.find(
      (event) => event.day === day && event.month === month
    );
  };

  function handleCallendarOpen() {
  setMonth(new Date().getMonth() + 1)
  setIsOpen(!isOpen);
}

const currentEvents = events.filter(
    (event) => event.day === dayToShow &&
    event.month === monthToShow
  )

  return (
    <div className="pt-20 overflow-x-hidden">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center gap-5">
        <SectionHeader
          badge="Rezerwacje"
          title="Zarezerwuj swoją przygodę"
          subtitle="Wybierz wygodną metodę rezerwacji i zabookuj miejsce dla siebie i przyjaciół."
        />
        <button
        onClick={handleCallendarOpen}
        className="bg-primary px-5 py-2 rounded-full w-fit text-black font-heading font-medium mb-14">
          Sprawdź dostępne terminy
        </button>
        <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
            initial={{ opacity: 0, y: -20}}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -20}}
            transition={{ duration: 0.2}}
            className="flex flex-col items-center lg:flex-row lg:justify-between gap-5 w-full max-w-5xl"
            >
              <Calendar
              getEventForDay={getEventForDay}
              setSelectedDay={setSelectedDay}
              selectedDay={selectedDay}
              events={events}
              month={month}
              setMonth={setMonth}
              />
              <CallendarRight
              selectedDay={selectedDay}
              month={month}
              events={currentEvents}
              />
            </motion.div>
            </>
        )}
        </AnimatePresence>
        <BookingMethods />
        <ContactForm />
      </section>
    </div>
  );
}