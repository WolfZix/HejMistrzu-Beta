import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import Calendar from "@/components/ui/Calendar";
import BookingMethods from "@/components/ui/BookingMethods";
import ReservationForm from "@/components/ui/ReservationForm";
import { MONTHS } from "@/data/months";

export type Months = typeof MONTHS;

export default function Reservations() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  })

  return (
    <>
    <div className="pt-20 overflow-x-hidden">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center gap-5">
        <SectionHeader
          badge="Rezerwacje"
          title="Zarezerwuj swoją przygodę"
        />
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, y: -20}}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -20}}
            transition={{ duration: 0.2}}
            className="flex flex-col items-center xl:items-start lg:flex-row lg:justify-between gap-5 w-full max-w-7xl"
            >
                <Calendar
                  setSelectedDate={setSelectedDate}
                  selectedDate={selectedDate}
                  month={month}
                  setMonth={setMonth}
                  year={year}
                  setYear={setYear}
                  months={MONTHS}
                />
                <ReservationForm 
                  selectedDate={selectedDate}
                />
            </motion.div>
        </AnimatePresence>
        <BookingMethods />
      </section>
    </div>
    </>
  );
}