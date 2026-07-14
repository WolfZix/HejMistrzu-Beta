import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Users, Clock, Baby, Dice5, Swords, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const boardGames = [
  { name: "Catan", players: "3-4", age: "10+", duration: "60-90 min", category: "Strategiczne" },
  { name: "Azul", players: "2-4", age: "8+", duration: "30-45 min", category: "Abstrakcyjne" },
  { name: "Pandemic", players: "2-4", age: "8+", duration: "45 min", category: "Kooperacyjne" },
  { name: "Gloomhaven", players: "1-4", age: "14+", duration: "120+ min", category: "Przygodowe" },
  { name: "Wingspan", players: "1-5", age: "10+", duration: "40-70 min", category: "Strategiczne" },
  { name: "Ticket to Ride", players: "2-5", age: "8+", duration: "30-60 min", category: "Rodzinne" },
  { name: "Arkham Horror", players: "1-6", age: "14+", duration: "120-180 min", category: "Przygodowe" },
  { name: "7 Wonders", players: "3-7", age: "10+", duration: "30 min", category: "Strategiczne" },
  { name: "Dixit", players: "3-8", age: "8+", duration: "30 min", category: "Imprezowe" },
  { name: "Splendor", players: "2-4", age: "10+", duration: "30 min", category: "Strategiczne" },
  { name: "Everdell", players: "1-4", age: "13+", duration: "40-80 min", category: "Strategiczne" },
  { name: "Terraforming Mars", players: "1-5", age: "12+", duration: "120 min", category: "Strategiczne" },
];

const rpgSystems = [
  { name: "Dungeons & Dragons 5e", players: "3-6", description: "Klasyczny system fantasy RPG — idealny na start." },
  { name: "Warhammer Fantasy RPG", players: "3-5", description: "Mroczne fantasy w Starym Świecie. Dla szukających głębi." },
  { name: "Call of Cthulhu", players: "3-5", description: "Horror kosmiczny Lovecrafta — tajemnice i obłęd." },
  { name: "Pathfinder 2e", players: "3-6", description: "Zaawansowany system z ogromną customizacją postaci." },
  { name: "Mausritter", players: "2-5", description: "Lekki system RPG — graj jako odważna myszka w wielkim świecie." },
  { name: "Savage Worlds", players: "3-6", description: "Uniwersalny system do każdego settingu i konwencji." },
];

const gamebooks = [
  { name: "Samotny Wilk", description: "Legendarny cykl gamebooków fantasy — klasyka gatunku." },
  { name: "Fighting Fantasy", description: "Kultowe przygody od Jacksona i Livingstone'a." },
  { name: "Linia Czasu", description: "Polskie gamebooki z elementami historii i wyborów." },
  { name: "Destynacje", description: "Nowoczesne paragrafówki w różnorodnych światach." },
];

const categoryColors = {
  Strategiczne: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Kooperacyjne: "bg-green-500/10 text-green-400 border-green-500/20",
  Przygodowe: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Rodzinne: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Abstrakcyjne: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Imprezowe: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export default function PlayArea() {
  const [search, setSearch] = useState("");

  return (
    <div className="pt-20 pb-24">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Strefa gier"
          title="Nasza kolekcja"
          subtitle="Setki gier planszowych, systemów RPG i gamebooków — wybierz swoją przygodę."
        />

        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Szukaj gier..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-card border-border focus:border-primary/50 h-11 rounded-xl"
          />
        </div>

        <Tabs defaultValue="board" className="w-full">
          <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 bg-card border border-border mb-12 rounded-xl p-1 h-auto">
            <TabsTrigger value="board" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg py-2.5 font-heading text-xs tracking-wider transition-all">
              <Dice5 className="w-4 h-4 mr-1.5" />Planszówki
            </TabsTrigger>
            <TabsTrigger value="rpg" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg py-2.5 font-heading text-xs tracking-wider transition-all">
              <Swords className="w-4 h-4 mr-1.5" />RPG
            </TabsTrigger>
            <TabsTrigger value="gamebooks" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg py-2.5 font-heading text-xs tracking-wider transition-all">
              <BookOpen className="w-4 h-4 mr-1.5" />Gamebooki
            </TabsTrigger>
          </TabsList>

          <TabsContent value="board">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {boardGames
                  .filter((g) => g.name.toLowerCase().includes(search.toLowerCase()))
                  .map((game) => (
                    <motion.div
                      key={game.name}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="glass glass-hover rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 group"
                    >
                      <div className="flex items-start justify-between mb-3 gap-3">
                        <h3 className="font-heading text-base font-semibold tracking-wide group-hover:text-primary transition-colors leading-snug">
                          {game.name}
                        </h3>
                        <div className={`
                          ${categoryColors[game.category as keyof typeof categoryColors] || "bg-muted text-muted-foreground"}
                          border text-[10px] shrink-0 px-2 py-0.5 rounded-full flex items-center`
                          }>
                        {game.category}
                      </div>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-border/50">
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <Users className="w-3 h-3 text-primary/60 shrink-0" />
                          <span>{game.players}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <Baby className="w-3 h-3 text-primary/60 shrink-0" />
                          <span>{game.age}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <Clock className="w-3 h-3 text-primary/60 shrink-0" />
                          <span>{game.duration}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
            </div>
          </TabsContent>

          <TabsContent value="rpg">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {rpgSystems
                  .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
                  .map((system) => (
                    <motion.div
                      key={system.name}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="glass glass-hover rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 group flex flex-col"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 shrink-0 group-hover:bg-primary/15 transition-colors">
                          <Swords className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading text-base font-semibold tracking-wide group-hover:text-primary transition-colors">
                            {system.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-1">
                            <Users className="w-3 h-3" />
                            <span>{system.players} graczy</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{system.description}</p>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>

          <TabsContent value="gamebooks">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <AnimatePresence mode="popLayout">
                {gamebooks
                  .filter((g) => g.name.toLowerCase().includes(search.toLowerCase()))
                  .map((book) => (
                    <motion.div
                      key={book.name}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="glass glass-hover rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 shrink-0 group-hover:bg-primary/15 transition-colors">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading text-base font-semibold tracking-wide group-hover:text-primary transition-colors mb-1">
                            {book.name}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{book.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}