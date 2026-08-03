export const getCategoryStyles = (isPastEvent: boolean) => ({
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
});

export const events = [
  {
    id: 1, title: "Pokémon TCG League Night", date: "2026-07-31", startTime: "17:00",
    description: "Cotygodniowy turniej Pokémon TCG. Przyjdź z własnym deckiem i walcz o nagrody!",
    category: "Pokémon TCG", image: "", location: "Hej Mistrzu, Rumia", maxSlots: 20,
    price: 35, link: "",
  },
  {
    id: 2, title: "Warhammer 40K: Open Battle", date: "2026-08-01", startTime: "12:00",
    description: "Dzień otwarty Warhammer 40K — rozgrywki, malowanie figurek i porady dla nowych graczy.",
    category: "Warhammer 40K", image: "", location: "Hej Mistrzu, Rumia", maxSlots: 20,
    price: 35, link: "https://www.facebook.com/p/hej-mistrzu-centrum-gier-rpg-61567368993724/",
  },
  {
    id: 3, title: "Riftbound: Nexus Night - 1v1", date: "2026-08-02", startTime: "17:00",
    description: "Nagrody: Na wejściu każdy otrzyma Booster :) Dla każdego gracza przewidziany jest Nexus Night Pack",
    category: "Riftbound", image: "", location: "Hej Mistrzu, Rumia", maxSlots: 20,
    price: 25, link: "https://locator.riftbound.uvsgames.com/events/703330",
  },
  {
    id: 4, title: "Pokémon TCG: Puchar Hej Mistrzu", date: "2026-08-03", startTime: "10:00",
    description: "Wielki turniej Pokémon TCG z nagrodami i atmosferą rywalizacji na najwyższym poziomie.",
    category: "Pokémon TCG", image: "", location: "Hej Mistrzu, Rumia", maxSlots: 20,
    price: 35, link: "",
  },
  {
    id: 5, title: "Noc Planszówek", date: "2026-08-04", startTime: "18:00",
    description: "Maratońska noc planszówek — graj do rana! Specjalne promocje na napoje i przekąski.",
    category: "Inne", image: "", location: "Hej Mistrzu, Rumia", maxSlots: 20,
    price: 35, link: "",
  },
  {
    id: 6, title: "Warhammer 40K: Painting Workshop", date: "2026-08-04", startTime: "14:00",
    description: "Warsztaty malowania figurek dla początkujących i zaawansowanych. Materiały w cenie!",
    category: "Warhammer 40K", image: "", location: "Hej Mistrzu, Rumia", maxSlots: 20,
    price: 35, link: "https://www.facebook.com/p/hej-mistrzu-centrum-gier-rpg-61567368993724/",
  },
  {
    id: 7, title: "Warhammer 40K: Painting Workshop", date: "2026-08-05", startTime: "14:00",
    description: "Warsztaty malowania figurek dla początkujących i zaawansowanych. Materiały w cenie!",
    category: "Warhammer 40K", image: "", location: "Hej Mistrzu, Rumia", maxSlots: 20,
    price: 35, link: "https://www.facebook.com/p/hej-mistrzu-centrum-gier-rpg-61567368993724/",
  },
];