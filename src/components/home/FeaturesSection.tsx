import { Dice5, Swords, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import image1 from "@/assets/image1.png";
import image5 from "@/assets/image5.png"
import image7 from "@/assets/image7.png";

const features = [
  {
    icon: Dice5,
    title: "Rozrywka",
    description: "Ponad 100 gier planszowych i karcianych oraz pokój RPG do dyspozycji. Przyjdź i zagraj!",
    image: `${image7}`,
    aspect: "aspect-[4/3]",
  },
  {
    icon: Swords,
    title: "Rywalizacja",
    description: "Regularne turnieje, pojedynki 1vs1, nagrody i wiele innych. Zmierz się z innymi na żywo! ",
    image: `${image1}`,
    aspect: "aspect-[4/3]",
  },
  {
    icon: Trophy,
    title: "Społeczność TCG",
    description: "Dołącz, wymieniaj się kartami lub zmierz się w pojedynku z innymi fanami Pokémon!",
    image: `${image5}`,
    aspect: "aspect-[4/3]",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Co oferujemy"
        title="Twoja przygoda zaczyna się tutaj"
        subtitle="Odkryj wszystko, co przygotowaliśmy dla Ciebie i Twoich przyjaciół."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={item}
            className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-1.5"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold tracking-wide">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}