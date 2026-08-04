import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import EventReservationModal from "../shared/EventModal";
import type { Event } from "@/types/event";
import axios from "axios";
import { getCategoryNames } from "@/data/events";
import EventCard from "../ui/EventCard";
import { MONTHS } from "../../data/months";

const categories = getCategoryNames();

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
const [events, setEvents] = useState<Event[]>([]);

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

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get("http://localhost:3000/events");
        setEvents(response.data);
      } catch(error) {
        console.error(error);
      }
    }
    fetchEvents();
  }, [])

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge="Kalendarz"
          title="Nadchodzące wydarzenia"
          subtitle="Turnieje, sesje i spotkania — bądź na bieżąco."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
              onClick={() => setActiveCategory("Wszystkie")}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "Wszystkie"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card/80 text-muted-foreground hover:text-foreground hover:bg-card border border-border/50"
              }`}
            >
              Wszystkie
            </button>
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
              return (
              <motion.div
                key={event.id}
                variants={cardItem}
                layout
              >
                <EventCard
                event={event}
                onClick={() => setSelectedEvent(event)}
                />
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