import Warhammer from "@/assets/Warhammer.webp";
import Pokemon from "@/assets/Pokemon.webp";
import BoardGames from "@/assets/BoardGames.webp";
import RiftboundDraft from "@/assets/RiftboundDraft.webp";
import WarhammerOpenBattle from "@/assets/WarhammerOpenBattle.webp";

export const events = [
  {
    id: 1, title: "Pokémon TCG League Night", date: "2026-07-15", startTime: "17:00",
    description: "Cotygodniowy turniej Pokémon TCG. Przyjdź z własnym deckiem i walcz o nagrody!",
    category: "Pokémon TCG", image: Pokemon, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 12, price: 35, link: "",
  },
  {
    id: 2, title: "Warhammer 40K: Open Battle", date: "2026-06-20", startTime: "12:00",
    description: "Dzień otwarty Warhammer 40K — rozgrywki, malowanie figurek i porady dla nowych graczy.",
    category: "Warhammer 40K", image: WarhammerOpenBattle, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 12, price: 35, link: "",
  },
  {
    id: 3, title: "Riftbound: Nexus Night - 1v1", date: "2026-07-03", startTime: "17:00",
    description: "Nagrody: Na wejściu każdy otrzyma Booster :) Dla każdego gracza przewidziany jest Nexus Night Pack",
    category: "Riftbound", image: RiftboundDraft, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 0, price: 25, link: "https://locator.riftbound.uvsgames.com/events/703330",
  },
  {
    id: 4, title: "Pokémon TCG: Puchar Hej Mistrzu", date: "2026-06-24", startTime: "10:00",
    description: "Wielki turniej Pokémon TCG z nagrodami i atmosferą rywalizacji na najwyższym poziomie.",
    category: "Pokémon TCG", image: Pokemon, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 12, price: 35, link: "",
  },
  {
    id: 5, title: "Noc Planszówek", date: "2026-07-15", startTime: "18:00",
    description: "Maratońska noc planszówek — graj do rana! Specjalne promocje na napoje i przekąski.",
    category: "Inne", image: BoardGames, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 12, price: 35, link: "",
  },
  {
    id: 6, title: "Warhammer 40K: Painting Workshop", date: "2026-07-22", startTime: "14:00",
    description: "Warsztaty malowania figurek dla początkujących i zaawansowanych. Materiały w cenie!",
    category: "Warhammer 40K", image: Warhammer, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 20, price: 35, link: "",
  },
  {
    id: 7, title: "Warhammer 40K: Painting Workshop", date: "2026-06-15", startTime: "14:00",
    description: "Warsztaty malowania figurek dla początkujących i zaawansowanych. Materiały w cenie!",
    category: "Warhammer 40K", image: Warhammer, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 12, price: 35, link: "",
  },
];