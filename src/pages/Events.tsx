import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import { Input } from "@/components/ui/input";
import Warhammer from "@/assets/Warhammer.png";
import Pokemon from "@/assets/Pokemon.png";
import Tavern from "@/assets/Tavern.png";
import RiftboundDraft from "@/assets/RiftboundDraft.png";
import WarhammerOpenBattle from "@/assets/WarhammerOpenBattle.png";

const allEvents = [
  {
    id: 1, title: "Pokémon TCG League Night", date: "2025-02-15", time: "17:00",
    description: "Cotygodniowy turniej Pokémon TCG. Przyjdź z własnym deckiem i walcz o nagrody!",
    category: "Pokémon TCG", image: Pokemon, location: "Hej Mistrzu, Rumia",
  },
  {
    id: 2, title: "Warhammer 40K: Open Battle", date: "2025-02-22", time: "12:00",
    description: "Dzień otwarty Warhammer 40K — rozgrywki, malowanie figurek i porady dla nowych graczy.",
    category: "Warhammer 40K", image: WarhammerOpenBattle, location: "Hej Mistrzu, Rumia",
  },
  {
    id: 3, title: "Riftbound: Draft Weekend", date: "2025-03-01", time: "14:00",
    description: "Specjalny weekend draftowy Riftbound z nagrodami dla najlepszych graczy.",
    category: "Riftbound", image: RiftboundDraft, location: "Hej Mistrzu, Rumia",
  },
  {
    id: 4, title: "Pokémon TCG: Puchar Hej Mistrzu", date: "2025-03-08", time: "10:00",
    description: "Wielki turniej Pokémon TCG z nagrodami i atmosferą rywalizacji na najwyższym poziomie.",
    category: "Pokémon TCG", image: Pokemon, location: "Hej Mistrzu, Rumia",
  },
  {
    id: 5, title: "Noc Planszówek", date: "2025-03-15", time: "18:00",
    description: "Maratońska noc planszówek — graj do rana! Specjalne promocje na napoje i przekąski.",
    category: "Planszówki", image: Tavern, location: "Hej Mistrzu, Rumia",
  },
  {
    id: 6, title: "Warhammer 40K: Painting Workshop", date: "2025-03-22", time: "14:00",
    description: "Warsztaty malowania figurek dla początkujących i zaawansowanych. Materiały w cenie!",
    category: "Warhammer 40K", image: Warhammer, location: "Hej Mistrzu, Rumia",
  },
];

const categories = ["Wszystkie", "Pokémon TCG", "Riftbound", "Warhammer 40K", "Planszówki"];

const categoryStyles = {
  "Pokémon TCG": "bg-yellow-950/80 text-yellow-200 border-yellow-500/50 shadow-yellow-500/30 hover:bg-yellow-800/30 hover:text-yellow-300",
  "Riftbound": "bg-purple-950/80 text-purple-200 border-purple-500/50 shadow-purple-500/30 hover:bg-purple-800/30 hover:text-purple-300",
  "Warhammer 40K": "bg-red-950/80 text-red-200 border-red-500/50 shadow-red-500/30 hover:bg-red-800/30 hover:text-red-300",
  "Planszówki": "bg-blue-950/80 text-blue-200 border-blue-500/50 shadow-blue-500/30 hover:bg-blue-800/30 hover:text-blue-300",
};

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [search, setSearch] = useState("");

  const filtered = allEvents.filter((e) => {
    const matchCat = activeCategory === "Wszystkie" || e.category === activeCategory;
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

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
            {filtered.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group glass glass-hover rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="aspect-[16/9] overflow-hidden relative shrink-0">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className={`absolute top-4 left-4 px-2 py-0.5 rounded-full ${categoryStyles[event.category as keyof typeof categoryStyles]} border text-xs font-medium`}>
                    {event.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-lg font-semibold tracking-wide mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Calendar className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                      <span>{new Date(event.date).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Clock className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <MapPin className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{event.description}</p>
                  <Button className="w-full bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 font-heading tracking-wider text-xs transition-all duration-300">
                    Zapisz się
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </div>
              </motion.div>
            ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="font-heading text-lg mb-2">Brak wyników</p>
            <p className="text-sm">Spróbuj zmienić kryteria wyszukiwania.</p>
          </div>
        )}
      </section>
    </div>
  );
}