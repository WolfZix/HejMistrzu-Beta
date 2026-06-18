import type { StoreProduct } from "@/types/store";
import Pokemon from "@/assets/Pokemon.webp";
import PokemonBooster1 from "@/assets/PokemonBooster1.webp";
import PokemonEliteBox from "@/assets/PokemonEliteBox.webp";
import RiftboundShadowRealm from "@/assets/RiftboundShadowRealm.webp";
import WarhammerMarinesStarter from "@/assets/WarhammerMarinesStarter.webp";
import DragonShields from "@/assets/DragonShield.webp";
import RiftboundBooster from "@/assets/RiftboundBooster.webp";
import DeckBox from "@/assets/DeckBox.webp";

export const storeProducts: StoreProduct[] = [
  {
    id: 1,
    name: "Pokémon TCG: Booster Box — Scarlet & Violet",
    price: 549.99,
    originalPrice: 629.99,
    category: "Pokémon TCG",
    image: PokemonBooster1,
    badge: "Promocja",
    inStock: true,
    rating: 4.8,
    description: "36 boosterów z najnowszego dodatku Scarlet & Violet. Idealny na start kolekcji.",
  },
  {
    id: 2,
    name: "Pokémon TCG: Elite Trainer Box",
    price: 249.99,
    category: "Pokémon TCG",
    image: PokemonEliteBox,
    inStock: false,
    rating: 4.9,
    description: "8 boosterów, karty energii, damage dice, status markers — wszystko czego potrzebujesz.",
  },
  {
    id: 3,
    name: "Riftbound: Starter Deck — Shadow Realm",
    price: 89.99,
    category: "Riftbound",
    image: RiftboundShadowRealm,
    inStock: true,
    rating: 4.7,
    description: "Gotowy do gry deck Riftbound z unikalną mechaniką cienia i 60 kartami.",
  },
  {
    id: 4,
    name: "Warhammer 40K: Space Marines Starter Set",
    price: 399.99,
    category: "Warhammer 40K",
    image: WarhammerMarinesStarter,
    badge: "Bestseller",
    inStock: true,
    rating: 4.9,
    description: "Kompletny zestaw startowy Space Marines. Zawiera figurki, farby, pędzle i instrukcję.",
  },
  {
    id: 5,
    name: "Dragon Shield: Matte Sleeves (100 szt.)",
    price: 39.99,
    category: "Akcesoria",
    image: DragonShields,
    inStock: true,
    rating: 4.6,
    description: "Najwyższej jakości koszulki ochronne. Matowe wykończenie, idealny shuffle.",
  },
  {
    id: 6,
    name: "Ultra Pro: Premium Deck Box",
    price: 69.99,
    category: "Akcesoria",
    image: DeckBox,
    inStock: true,
    rating: 4.5,
    description: "Elegancki deck box mieszczący do 100 kart w podwójnych koszulkach.",
  },
  {
    id: 7,
    name: "Riftbound: Booster Pack Display",
    price: 459.99,
    category: "Riftbound",
    image: RiftboundBooster,
    badge: "Preorder",
    inStock: false,
    rating: null,
    description: "Display 36 boosterów Riftbound. Premiera już wkrótce.",
  },
  {
    id: 8,
    name: "Pokémon TCG: Premium Collection",
    price: 329.99,
    category: "Pokémon TCG",
    image: Pokemon,
    inStock: true,
    rating: 4.8,
    description: "Ekskluzywna kolekcja z promocyjnymi kartami i akcesoriami.",
  },
];

export const storeCategories = ["Wszystkie", "Pokémon TCG", "Riftbound", "Warhammer 40K", "Akcesoria"] as const;

export const badgeStyles: Record<NonNullable<StoreProduct["badge"]>, string> = {
  Promocja: "bg-red-500/20 text-red-200 border-red-200/50 hover:bg-red-800/30 hover:text-white",
  Bestseller: "bg-primary/10 text-primary border-primary/20",
  Preorder: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

const categoryStyles: Record<string, string> = {
  "Pokémon TCG": "bg-yellow-950/80 text-yellow-200 border-yellow-500/50 shadow-yellow-500/30 hover:bg-yellow-800/30 hover:text-yellow-300",
  "Riftbound": "bg-purple-950/80 text-purple-200 border-purple-200/50 hover:bg-purple-800/30 hover:text-purple-300",
  "Warhammer 40K": "bg-red-950/80 text-red-200 border-red-200/50 hover:bg-red-800/30 hover:text-red-300",
};