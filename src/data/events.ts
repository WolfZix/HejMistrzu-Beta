import Warhammer from "@/assets/Warhammer.png";
import Pokemon from "@/assets/Pokemon.png";
import Tavern from "@/assets/Tavern.png";
import RiftboundDraft from "@/assets/RiftboundDraft.png";
import WarhammerOpenBattle from "@/assets/WarhammerOpenBattle.png";

export const events = [
  {
    id: 1, title: "Pokémon TCG League Night", date: "2026-07-15", startTime: "17:00",
    description: "Cotygodniowy turniej Pokémon TCG. Przyjdź z własnym deckiem i walcz o nagrody!",
    category: "Pokémon TCG", image: Pokemon, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 12, price: 35,
  },
  {
    id: 2, title: "Warhammer 40K: Open Battle", date: "2026-06-22", startTime: "12:00",
    description: "Dzień otwarty Warhammer 40K — rozgrywki, malowanie figurek i porady dla nowych graczy.",
    category: "Warhammer 40K", image: WarhammerOpenBattle, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 12, price: 35,
  },
  {
    id: 3, title: "Riftbound: Draft Weekend", date: "2026-06-01", startTime: "14:00",
    description: "Specjalny weekend draftowy Riftbound z nagrodami dla najlepszych graczy.",
    category: "Riftbound", image: RiftboundDraft, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 12, price: 35,
  },
  {
    id: 4, title: "Pokémon TCG: Puchar Hej Mistrzu", date: "2026-06-08", startTime: "10:00",
    description: "Wielki turniej Pokémon TCG z nagrodami i atmosferą rywalizacji na najwyższym poziomie.",
    category: "Pokémon TCG", image: Pokemon, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 12, price: 35,
  },
  {
    id: 5, title: "Noc Planszówek", date: "2026-07-15", startTime: "18:00",
    description: "Maratońska noc planszówek — graj do rana! Specjalne promocje na napoje i przekąski.",
    category: "Planszówki", image: Tavern, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 12, price: 35,
  },
  {
    id: 6, title: "Warhammer 40K: Painting Workshop", date: "2026-05-22", startTime: "14:00",
    description: "Warsztaty malowania figurek dla początkujących i zaawansowanych. Materiały w cenie!",
    category: "Warhammer 40K", image: Warhammer, location: "Hej Mistrzu, Rumia", totalSlots: 20,
    bookedSlots: 12, price: 35,
  },
];