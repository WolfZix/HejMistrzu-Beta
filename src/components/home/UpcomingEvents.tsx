import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import Warhammer from "@/assets/Warhammer.png"
import Riftbound from "@/assets/Riftbound.png"
import Pokemon from "@/assets/Pokemon.png"

const events = [
  {
    id: 1,
    title: "Pokémon TCG League Night",
    date: "2025-02-15",
    time: "17:00",
    location: "Hej Mistrzu, Rumia",
    description: "Cotygodniowy turniej Pokémon TCG. Przyjdź z własnym deckiem i walcz o nagrody!",
    category: "Pokémon TCG",
    image: Pokemon,
  },
  {
    id: 2,
    title: "Warhammer 40K: Open Battle",
    date: "2025-02-22",
    time: "12:00",
    location: "Hej Mistrzu, Rumia",
    description: "Dzień otwarty Warhammer 40K — rozgrywki, malowanie figurek i porady dla nowych graczy.",
    category: "Warhammer 40K",
    image: Warhammer,
  },
  {
    id: 3,
    title: "Riftbound: Draft Weekend",
    date: "2025-03-01",
    time: "14:00",
    location: "Hej Mistrzu, Rumia",
    description: "Specjalny weekend draftowy Riftbound z nagrodami dla najlepszych graczy.",
    category: "Riftbound",
    image: Riftbound,
  },
];

const categories = ["Wszystkie", "Pokémon TCG", "Riftbound", "Warhammer 40K"];

const categoryStyles: Record<string, string> = {
  "Pokémon TCG": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Riftbound": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Warhammer 40K": "bg-red-500/10 text-red-400 border-red-500/20",
};

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

  const filtered =
    activeCategory === "Wszystkie"
      ? events
      : events.filter((e) => e.category === activeCategory);

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
          {filtered.map((event) => (
            <motion.div
              key={event.id}
              variants={cardItem}
              layout
              className="group glass glass-hover rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="aspect-[16/9] overflow-hidden relative shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <Badge
                  className={`absolute top-4 left-4 ${categoryStyles[event.category]} border text-xs font-medium`}
                >
                  {event.category}
                </Badge>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="space-y-1.5 mb-3">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Calendar className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                    <span>
                      {new Date(event.date).toLocaleDateString("pl-PL", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
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
                <h3 className="font-heading text-base font-semibold tracking-wide mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {event.description}
                </p>
                <Link to="/wydarzenia">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 font-heading tracking-wider text-xs group/btn transition-all duration-300"
                  >
                    Szczegóły
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/wydarzenia">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 font-heading tracking-wider transition-all duration-300 group"
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