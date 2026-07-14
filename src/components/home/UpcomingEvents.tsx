import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import EventReservationModal from "../shared/EventModal";
import { events } from "@/data/events";
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

const categories = ["Wszystkie", "Pokémon TCG", "Riftbound", "Warhammer 40K", "Inne"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function UpcomingEvents() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const filtered =
    activeCategory === "Wszystkie"
      ? events
      : events.filter((e) => e.category === activeCategory);
    
  const upcomingEvents = filtered
  .filter((event) => new Date(event.date) >= today)
  .sort(
    (a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
  )
  .slice(0, 3);

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge="Kalendarz"
          title="Nadchodzące wydarzenia"
          subtitle="Turnieje, sesje i spotkania — bądź na bieżąco."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card/80 text-muted-foreground hover:text-foreground hover:bg-card border border-border/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {upcomingEvents.map((event) => {
            const eventDateTime = new Date(`${event.date}T${event.startTime}`)
              const isPastEvent = eventDateTime < new Date();
              const categoryStyles = {
              "Pokémon TCG": 
              `${isPastEvent 
                ? "bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground" 
                : "bg-yellow-950/80 text-yellow-200 border-yellow-500/50 shadow-yellow-500/30 hover:bg-yellow-800/30 hover:text-yellow-300"}`,
              "Riftbound": 
              `${isPastEvent 
                ? "bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground"
                : "bg-purple-950/80 text-purple-200 border-purple-500/50 shadow-purple-500/30 hover:bg-purple-800/30 hover:text-purple-300"}`,
              "Warhammer 40K": 
              `${isPastEvent 
                ? "bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground"
                : "bg-red-950/80 text-red-200 border-red-500/50 shadow-red-500/30 hover:bg-red-800/30 hover:text-red-300"}`,
              "Inne":
              `${isPastEvent 
                ? "bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground"
                : "bg-blue-950/80 text-blue-200 border-blue-500/50 shadow-blue-500/30 hover:bg-blue-800/30 hover:text-blue-300"}`,
            };
              return (
              <motion.div
              key={event.id}
              variants={cardItem}
              layout
              className={`group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col h-full ${!isPastEvent ? "glass-hover" : "text-muted-foreground"}`}
            >
              <div className="aspect-[16/9] overflow-hidden relative shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${isPastEvent ? "group-hover:scale-100 saturate-0" : "group-hover:scale-105 saturate-100"}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div
                  className={`absolute top-4 left-4 px-2 py-0.5 rounded-full ${categoryStyles[event.category as keyof typeof categoryStyles]} border text-xs font-medium`}
                >
                  {event.category}
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="space-y-1.5 mb-3">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Calendar className={`w-3.5 h-3.5 shrink-0 ${isPastEvent ? "text-muted-foreground" : "text-primary/70"}`} />
                    <span>
                      {new Date(event.date).toLocaleDateString("pl-PL", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Clock className={`w-3.5 h-3.5 shrink-0 ${isPastEvent ? "text-muted-foreground" : "text-primary/70"}`} />
                    <span>{event.startTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <MapPin className={`w-3.5 h-3.5 shrink-0 ${isPastEvent ? "text-muted-foreground" : "text-primary/70"}`} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <h3 className={`font-heading text-base font-semibold tracking-wide mb-2 transition-colors ${isPastEvent ? "group-hover:text-muted-foreground" : "group-hover:text-primary"}`}>
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {event.description}
                </p>
                  <button
                  disabled={isPastEvent}
                  onClick={() => setSelectedEvent(event)}
                  className={`w-full border py-2.5 flex justify-center rounded-lg font-heading tracking-wider text-xs transition-all duration-300
                    ${isPastEvent  
                    ? "bg-muted-foreground/30 text-muted-foreground hover:bg-muted-foreground/30 border border-foreground/20 cursor-not-allowed" 
                    : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 cursor-pointer"}`}>
                    {!isPastEvent ? "Zapisz się" : "Wydarzenie dobiegło końca"}
                    {!isPastEvent && ( <ArrowRight className="w-3.5 h-3.5 ml-1.5" />)}
                  </button>
              </div>
            </motion.div>
          )})}
          {selectedEvent && (
            <EventReservationModal
              months={MONTHS}
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/wydarzenia">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 text-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/40 font-heading tracking-wider transition-all duration-300 group"
            >
              Wszystkie wydarzenia
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}