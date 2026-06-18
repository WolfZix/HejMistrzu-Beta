import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Event } from "@/types/event";
import type { Months } from "@/pages/Reservations";

type CalendarProps = {
    month: number;
    months: Months;
    setMonth: React.Dispatch<React.SetStateAction<number>>;
    year: number;
    setYear: React.Dispatch<React.SetStateAction<number>>;
    events: Event[];
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
    selectedDate: Date | null;
    getEventForDay: (day: number) => {
      id: number;
      title: string;
      description: string;
      date: string;
      startTime: string
      totalSlots: number;
      bookedSlots: number;
      image: string;
    } | undefined;
}

export default function Calendar({ getEventForDay, month, months, setMonth, year, setYear, setSelectedDate, selectedDate }: CalendarProps) {
  const currentMonth = months[month as keyof typeof months];

  const previousMonth = month === 1 ? 12 : month - 1;
  const previousMonthDays = months[previousMonth as keyof typeof months].days;

  const days = currentMonth.days;
  const firstDay = new Date(year, month - 1, 1);
  const startDay = firstDay.getDay();
  
  const startOffset = startDay === 0 ? 6 : startDay - 1;
  
  const totalCells = startOffset + days;
  const missingDays = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

  const today = new Date();
  today.setHours(0,0,0,0);

  const nextMonthDays = Array.from(
    { length: missingDays },
    (_, i) => i + 1
  )
  const WEEK_DAYS = [
  "Pn.",
  "Wt.",
  "Śr.",
  "Czw.",
  "Pt.",
  "Sb.",
  "Nd.",
  ];

  return (
    <div className="mb-10 h-[24rem] md:h-[32rem]">
    <div className="flex gap-2 items-center justify-center lg:justify-start mb-3 select-none">
        <button
            onClick={() => {
              if (month === 1) {
                setMonth(12);
                setYear(prev => prev - 1);
              } else {
                setMonth(prev => prev - 1);
              }
            }}
            className="text-primary bg-transparent hover:bg-primary/10 p-2 hover:-translate-x-0.5 transition-all duration-200 rounded-sm">
            <ArrowLeft size={18} />
        </button>
            <h1 className="font-heading text-2xl md:text-3xl text-primary text-center w-72">
                {currentMonth.name} {year}
            </h1>
        <button
            onClick={() => {
              if (month === 12) {
                setMonth(1);
                setYear(prev => prev + 1);
              } else {
                setMonth(prev => prev + 1);
              }
            }}
            className="text-primary bg-transparent hover:bg-primary/10 p-2 hover:translate-x-0.5 transition-all duration-200 rounded-sm">
            <ArrowRight size={18} />
        </button>
    </div>
    <div className="flex w-fit mx-auto lg:mx-0 gap-3 mb-5">
        <div className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-muted-foreground/10 border border-muted-foreground rounded-full"></div>
            <p className="text-muted-foreground text-sm">Puste</p>
        </div>
        <div className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <p className="text-muted-foreground text-sm">Wolne</p>
        </div>
        <div className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-primary/30 rounded-full"></div>
            <p className="text-muted-foreground text-sm">Zajęte</p>
        </div>
    </div>
    <div className="relative grid grid-cols-7 w-fit mx-auto gap-1 md:gap-2 mb-2">
        {WEEK_DAYS.map((day) => (
            <div
            key={day}
            className="text-center text-xs font-body text-muted-foreground">
                {day}
            </div>
        ))}
        
        {Array.from({ length: startOffset }, (_, i) => (
            <div
              key={i}
              className={`
                flex items-end justify-end
                rounded-sm
                border
                p-1
                h-12 w-12 sm:h-16 md:w-16 xl:h-20 xl:w-20
                text-sm md:text-lg text-muted-foreground/50
                select-none
                cursor-not-allowed
              `}
    >
      {previousMonthDays - startOffset + i + 1}
    </div>
        ))}
      {Array.from({ length: days }, (_, i) => {
        const day = i + 1;
        const event = getEventForDay(day);
        const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === month - 1;
        const isToday = day === today.getDate() && month === today.getMonth() + 1 && year === today.getFullYear();
        const cellDate = new Date(year,month-1,day);
        cellDate.setHours(0,0,0,0);
        const isPast = cellDate < today;
        const shouldHighlight = isSelected || (!selectedDate && isToday);
        const dayClass = !event 
          ? "bg-background text-foreground hover:bg-transparent hover:ring hover:ring-primary"
          : event?.bookedSlots < event?.totalSlots
              ? "bg-primary/50 text-foreground hover:ring hover:ring-primary"
              : "bg-primary/10 text-foreground hover:ring hover:ring-primary"
        return (
        <button
          disabled={isPast}
          onClick={() => {
                const clickedDate = new Date(year, month-1, day);
                setSelectedDate(prev => {
                  if (
                    prev && prev.getDate() === day && prev.getMonth() === month - 1 && !isToday
                  ) return null;
                  return clickedDate;
                });
              }}
          key={i}
          className={`
          flex items-end justify-end
          relative
          rounded-sm
          border
          p-1
          h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20
          text-sm md:text-lg
          ${dayClass}
          ${shouldHighlight
            ? "text-foreground z-10 ring-2 ring-primary shadow-lg shadow-primary/50 scale-105"
            : ""
          }
          ${isPast 
            ? event 
              ? "bg-muted-foreground/30 opacity-30 cursor-not-allowed hover:bg-muted-foreground/30 hover:ring-0"
              : " opacity-30 cursor-not-allowed hover:bg-transparent hover:ring-0" : ""
          }
          `}
        >
          {i + 1}
          {isToday 
            ? (
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary border border-black animate-pulse"></div>
            ) : (
              ""
            )
          }
        </button>
        );
        })}
      {nextMonthDays.map((day) => (
    <div
      key={`next-${day}`}
      className={`
      flex items-end justify-end
      rounded-sm
      border
      p-1
      h-12 w-12 sm:h-16 md:w-16 xl:h-20 xl:w-20
      text-sm md:text-lg text-muted-foreground/50
      select-none
      cursor-not-allowed
      `}
    >
      {day}
    </div>
  ))}
    </div>
    </div>
  );
}