import { useState } from "react";
import { Calendar, Clock, MapPin, ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import { Input } from "@/components/ui/input";
import { events } from "@/data/events";
import { Event } from "@/types/event";
import { normalizeText } from "@/utils/index";
import ReservationModal from "@/components/shared/ReservationModal";

const categories = ["Wszystkie", "Pokémon TCG", "Riftbound", "Warhammer 40K", "Planszówki"];
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

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const today = new Date();
  today.setHours(0,0,0,0);

  const normalizedSearch = normalizeText(search);

  const filtered = events.filter((e) => {
  const matchCat =
    activeCategory === "Wszystkie" ||
    e.category === activeCategory;

  const title = normalizeText(e.title);
  const description = normalizeText(e.description);

  const matchSearch =
    title.includes(normalizedSearch) ||
    description.includes(normalizedSearch);

  return matchCat && matchSearch;
});

  const sortedEvents = [...filtered]
  .filter(event => new Date(event.date) >= today)
  .sort(
    (a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
  );

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
    <div className="pt-20 pb-24">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Kalendarz wydarzeń"
          title="Nadchodzące wydarzenia"
          subtitle="Turnieje, warsztaty i spotkania społeczności. Znajdź coś dla siebie!"
        />

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 max-w-xl mx-auto">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Szukaj wydarzeń..."
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              className="pl-10 bg-card border-border focus:border-primary/50 h-11 rounded-xl"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-card border border-border/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {sortedEvents.map((event) => {
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
              "Planszówki":
              `${isPastEvent 
                ? "bg-muted/80 text-muted-foreground border-muted-foreground/50 shadow-muted-foreground/30 hover:bg-muted/80 hover:text-muted-foreground"
                : "bg-blue-950/80 text-blue-200 border-blue-500/50 shadow-blue-500/30 hover:bg-blue-800/30 hover:text-blue-300"}`,
            };
              return (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col h-full ${isPastEvent ? "text-muted-foreground" : "glass-hover"}`}
              >
                <div className="aspect-[16/9] overflow-hidden relative shrink-0">
                  <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-700
                    ${isPastEvent ? "saturate-0 group-hover:scale-100 " : "saturate-100 group-hover:scale-105 "}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className={`absolute top-4 left-4 px-2 py-0.5 rounded-full select-none ${categoryStyles[event.category as keyof typeof categoryStyles]} border text-xs font-medium`}>
                    {event.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`font-heading text-lg font-semibold tracking-wide mb-3 transition-colors ${isPastEvent ? "" : "group-hover:text-primary"}`}>{event.title}</h3>
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Calendar className={`w-3.5 h-3.5 shrink-0 ${isPastEvent ? "text-muted-foreground" : "text-primary/70"}`} />
                      <span>{new Date(event.date).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" })}</span>
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
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{event.description}</p>
                  <button
                  disabled={isPastEvent}
                  onClick={() => handleEventClick(event)}
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
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="font-heading text-lg mb-2">Brak wyników</p>
            <p className="text-sm">Spróbuj zmienić kryteria wyszukiwania.</p>
          </div>
        )}
        {selectedEvent && (
          <ReservationModal
          months={MONTHS}
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          />
        )}
      </section>
    </div>
  );
}