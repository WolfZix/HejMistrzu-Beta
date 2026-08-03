import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { Input } from "@/components/ui/input";
import { Event } from "@/types/event";
import { normalizeText } from "@/utils/index";
import EventReservationModal from "@/components/shared/EventModal";
import axios from "axios";
import EventCard from "@/components/ui/EventCard";

const categories = ["Wszystkie", "Pokémon TCG", "Riftbound", "Warhammer 40K", "Inne"];
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
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get("http://localhost:3000/events");
        setEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEvents();
  }, []);

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
    if (event.link) {
      window.open(event.link, "_blank");
      return;
    }
    setSelectedEvent(event);
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => handleEventClick(event)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="font-heading text-lg mb-2">Brak wyników</p>
            <p className="text-sm">Spróbuj zmienić kryteria wyszukiwania.</p>
          </div>
        )}
        {selectedEvent && (
          <EventReservationModal
          months={MONTHS}
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          />
        )}
      </section>
    </div>
  );
}