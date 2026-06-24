import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import Calendar from "@/components/ui/callendar";
import CallendarRight from "@/components/ui/callendarRight";
import BookingMethods from "@/components/ui/bookingMethods";
import ContactForm from "@/components/ui/contactForm";
import { events } from "@/data/events";
import ReservationModal from "@/components/shared/ReservationModal";
import type { Event } from "@/types/event";

const MONTHS = {
        1: {name: 'Styczeń', days: 31},
        2: {name: 'Luty', days: 28},
        3: {name: 'Marzec', days: 31},
        4: {name: 'Kwiecień', days: 30},
        5: {name: 'Maj', days: 31},
        6: {name: 'Czerwiec', days: 30},
        7: {name: 'Lipiec', days: 31},
        8: {name: 'Sierpień', days: 31},
        9: {name: 'Wrzesień', days: 30},
        10: {name: 'Październik', days: 31},
        11: {name: 'Listopad', days: 30},
        12: {name: 'Grudzień', days: 31},
};

export type Months = typeof MONTHS;

export default function Reservations() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [isOpen, setIsOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const dateToShow = selectedDate ?? new Date();

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const getEventForDay = (day: number) => {
    return events.find(
      (event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getDate() === day &&
          eventDate.getMonth() + 1 === month &&
          eventDate.getFullYear() === year
        );
      }
    );
  };

  function handleCallendarOpen() {
  setIsOpen(prev => !prev);
}

  const currentEvents = events.filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getDate() === dateToShow.getDate() &&
      eventDate.getMonth() === dateToShow.getMonth() &&
      eventDate.getFullYear() === dateToShow.getFullYear()
    );
  });

  const handleEventClick = (event: Event) => {
    if (event.category === "Pokémon TCG" || event.category === "Planszówki") {
      setSelectedEvent(event);
      return;
    }
    if (event.category === "Warhammer 40K") {
      window.open("https://www.facebook.com/p/hej-mistrzu-centrum-gier-rpg-61567368993724/","_blank");
      return;
    }
    if (event.category === "Riftbound") {
      window.open(`${event.link}`, "_blank");
      return;
    }
  }

  return (
    <>
    <div className="pt-20 overflow-x-hidden">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center gap-5">
        <SectionHeader
          badge="Rezerwacje"
          title="Zarezerwuj swoją przygodę"
          subtitle="Wybierz wygodną metodę rezerwacji i zabookuj miejsce dla siebie i przyjaciół."
        />
        <button
        onClick={handleCallendarOpen}
        className="bg-primary px-5 py-2 rounded-full w-fit text-black font-heading font-medium mb-14 hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)] hover:scale-105 transition-all duration-300">
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
            className="flex flex-col items-center xl:items-start lg:flex-row lg:justify-between gap-5 w-full max-w-7xl"
            >
                <Calendar
                  getEventForDay={getEventForDay}
                  setSelectedDate={setSelectedDate}
                  selectedDate={selectedDate}
                  events={events}
                  month={month}
                  setMonth={setMonth}
                  year={year}
                  setYear={setYear}
                  months={MONTHS}
                />
                <CallendarRight
                  selectedDate={selectedDate}
                  months={MONTHS}
                  events={currentEvents}
                  handleEventClick={handleEventClick}
                />
            </motion.div>
            </>
        )}
        </AnimatePresence>
        <BookingMethods />
        <ContactForm />
      </section>
    </div>
    {selectedEvent && (
      <ReservationModal
      months={MONTHS}
      event={selectedEvent}
      onClose={() => setSelectedEvent(null)}
      />
    )}
    </>
  );
}