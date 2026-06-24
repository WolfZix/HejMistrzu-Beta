import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dice5, Trophy, Users, Heart, Shield, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import image9 from "@/assets/image9.jpg"
import Warhammer from "@/assets/Warhammer.webp"
import BoardGames from "@/assets/BoardGames.webp"

const VENUE_IMG = image9;
const COMMUNITY_IMG = Warhammer;
const RPG_IMG = BoardGames;

const stats = [
  { icon: Dice5, value: "100+", label: "Gier planszowych" },
  { icon: Trophy, value: "50+", label: "Turniejów rocznie" },
  { icon: Users, value: "3000+", label: "Członków społeczności" },
];

const reasons = [
  { icon: Heart, title: "Pasja", description: "Prowadzimy to miejsce z miłości do gier — i to widać w każdym detalu." },
  { icon: Shield, title: "Jakość", description: "Premium gry, wygodne miejsce, profesjonalna obsługa. Bez kompromisów." },
  { icon: Sparkles, title: "Atmosfera", description: "Ciepło fantasy, zapach kawy i dźwięk rzucanych kości — to Hej Mistrzu." },
  { icon: Users, title: "Społeczność", description: "Nie jesteśmy tylko sklepem. Budujemy społeczność graczy w Trójmieście." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function About() {
  return (
    <div className="pt-20 pb-24">
      {/* Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader badge="O nas" title="Nasza historia" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              W Rumi, na obrzeżach Gdyni, powstało wyjątkowe miejsce dla fanów gier RPG, planszowych i karcianych.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-semibold">Hej Mistrzu</strong> to więcej niż sklep z planszówkami — to przystań dla każdego, kto kocha świat fantastyki. Od Pokémon TCG po Warhammer 40K, od sesji D&D po rodzinne wieczory z Catanem.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nasz prywatny pokój RPG z unikalną atmosferą przenosi Cię w sam środek przygody, a rosnąca kolekcja ponad 100 gier sprawia, że zawsze znajdziesz coś nowego do odkrycia.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/rezerwacje">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider text-xs group">
                  Odwiedź nas <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
              <Link to="/strefa-gier">
                <Button variant="outline" className="border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 font-heading tracking-wider text-xs">
                  Zobacz gry
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="relative"
          >
            <img src={VENUE_IMG} alt="Wnętrze Hej Mistrzu" className="rounded-2xl shadow-2xl shadow-primary/5 w-full max-h-[30rem] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden w-full flex justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="w-full flex flex-col md:flex-row justify-evenly gap-4 sm:gap-6 relative z-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-2 w-full lg:max-w-[25%] text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mx-auto mb-3 group-hover:bg-primary/15 transition-colors">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-heading text-3xl font-bold text-gold-gradient mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          >
            <img src={COMMUNITY_IMG} alt="Społeczność" className="rounded-2xl shadow-2xl shadow-primary/5 w-full" loading="lazy" />
          </motion.div>
          <motion.div
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
              Społeczność
            </span>
            <h2 className="font-heading text-3xl sm:text-3xl font-bold tracking-wide mb-5">
              Dołącz do <span className="text-gold-gradient">drużyny</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Regularni gracze, przyjacielska atmosfera i wspólna pasja. Niezależnie od tego, czy jesteś weteranem czy dopiero zaczynasz — znajdziesz tu swoje miejsce.
            </p>
            <div className="rounded-xl overflow-hidden">
              <img src={RPG_IMG} alt="Sesja RPG" className="w-full h-48 object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="Dlaczego my"
            title="Co nas wyróżnia"
            subtitle="Cztery filary, na których zbudowaliśmy Hej Mistrzu."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass glass-hover rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 shrink-0 group-hover:bg-primary/15 transition-colors">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-semibold tracking-wide group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}