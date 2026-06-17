import { ArrowLeft, ArrowRight } from "lucide-react";
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

type CalendarProps = {
    month: number;
    setMonth: React.Dispatch<React.SetStateAction<number>>;
    events: Event[];
    setSelectedDay: React.Dispatch<React.SetStateAction<number | null>>;
    selectedDay: number | null;
    getEventForDay: (day: number) => {
      id: number;
      title: string;
      day: number;
      month: number;
      totalSlots: number;
      bookedSlots: number;
    } | undefined;
}

export default function Calendar({ getEventForDay, month, setMonth, setSelectedDay, selectedDay }: CalendarProps) {
  const currentYear = new Date().getFullYear();

  const currentMonth = MONTHS[month as keyof typeof MONTHS];
  const previousMonth = month === 1 ? 12 : month - 1;
  const previousMonthDays = MONTHS[previousMonth as keyof typeof MONTHS].days;

  const days = currentMonth.days;
  const firstDay = new Date(currentYear, month - 1, 1);
  const startDay = firstDay.getDay();
  
  const startOffset = startDay === 0 ? 6 : startDay - 1;
  
  const totalCells = startOffset + days;
  const missingDays = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

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
                setMonth(prev => prev === 1 ? 12 : prev - 1);
                setSelectedDay(null);
                }
            }
            className="text-primary bg-transparent hover:bg-primary/10 p-2 hover:-translate-x-0.5 transition-all duration-200 rounded-sm">
            <ArrowLeft size={18} />
        </button>
            <h1 className="font-heading text-2xl md:text-3xl text-primary text-center w-48">
                {currentMonth.name}
            </h1>
        <button
            onClick={() => {
                setMonth(prev => prev === 12 ? 1 : prev + 1);
                setSelectedDay(null);
                }
            }
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
                h-12 w-12 sm:h-16 md:w-16
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
        const dayClass = !event 
          ? "bg-background text-foreground hover:bg-primary/5"
          : event?.bookedSlots < event?.totalSlots
            ? "bg-primary/50 text-foreground"
            : "bg-primary/20 text-foreground"
        return (
        <button
          onClick={() => {
            setSelectedDay(prev => prev === day ? null : day); 
        }}
          key={i}
          className={`
          flex items-end justify-end
          rounded-sm
          border
          p-1
          h-12 w-12 md:h-16 md:w-16
          text-sm md:text-lg
          ${dayClass}
          ${selectedDay === day
            ? "bg-primary/20 text-foreground ring-2 ring-foreground"
            : ""
          }
          `}
        >
          {i + 1}
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
      h-12 w-12 sm:h-16 md:w-16
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