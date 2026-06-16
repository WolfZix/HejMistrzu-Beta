import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star, CalendarDays, Crown, Swords, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const gamingPlans = [
  {
    id: 1, name: "Standard", duration: "2 godziny", price: "20", unit: "zł/os.",
    features: ["Dostęp do strefy gier", "Ponad 100 planszówek", "Kawa lub herbata w cenie"],
    popular: false, icon: Users,
  },
  {
    id: 2, name: "Adventure", duration: "4 godziny", price: "28", unit: "zł/os.",
    features: ["Dostęp do strefy gier", "Ponad 100 planszówek", "Kawa lub herbata w cenie", "Zniżka 10% w sklepie"],
    popular: true, icon: Users,
  },
  {
    id: 3, name: "Epic", duration: "Bez limitu", price: "40", unit: "zł/os.",
    features: ["Dostęp do strefy gier", "Ponad 100 planszówek", "Kawa lub herbata w cenie", "Zniżka 15% w sklepie", "Priorytetowa rezerwacja"],
    popular: false, icon: Users,
  },
];

const rpgPlans = [
  {
    id: 1, name: "Standard", duration: "3 godziny", price: "120", unit: "zł/pokój",
    features: ["Prywatny pokój RPG", "Atmosfera fantasy", "Mapy i figurki", "Napoje w cenie"],
    popular: false, icon: Swords,
  },
  {
    id: 2, name: "Adventure", duration: "5 godzin", price: "130", unit: "zł/pokój",
    features: ["Prywatny pokój RPG", "Atmosfera fantasy", "Mapy i figurki", "Napoje w cenie", "Przedłużenie za dopłatą"],
    popular: true, icon: Swords,
  },
  {
    id: 3, name: "Epic", duration: "Bez limitu", price: "200", unit: "zł/pokój",
    features: ["Prywatny pokój RPG", "Atmosfera fantasy", "Mapy i figurki", "Napoje w cenie", "Catering na życzenie"],
    popular: false, icon: Swords,
  },
];

interface PricingPlan {
  id: number;
  name: string;
  duration: string;
  price: string;
  unit: string;
  features: string[];
  popular: boolean;
  icon: React.ElementType;
}

interface PricingCardProps {
  plan: PricingPlan;
  isPopular: boolean;
}

function PricingCard({ plan, isPopular }: PricingCardProps) {
  return (
    <div
      className={`relative glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full ${
        isPopular
          ? "border-primary/40 glow-gold ring-1 ring-primary/10 scale-[1.04] z-10 shadow-xl shadow-primary/10"
          : "border-border/50"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground border-0 font-heading tracking-wider text-xs px-4 py-1 shadow-lg shadow-primary/20 z-20 flex gap-1 rounded-lg">
          <Star className="w-3 h-3 mr-1 fill-current" />Popularne
        </div>
      )}
      <div className="flex items-center gap-3 mb-5">
        <div className={`p-2.5 rounded-xl shrink-0 ${isPopular ? "bg-primary/20" : "bg-primary/10"} border border-primary/20 transition-colors duration-300`}>
          <plan.icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-heading text-base font-semibold tracking-wide">{plan.name}</h3>
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-0.5">
            <Clock className="w-3 h-3" />
            <span>{plan.duration}</span>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <span className="font-heading text-4xl font-bold text-gold-gradient">{plan.price}</span>
        <span className="text-muted-foreground text-sm ml-1">{plan.unit}</span>
      </div>
      <ul className="space-y-3 mb-6 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Link to="/rezerwacje">
          <Button
            className={`w-full font-heading tracking-wider text-xs transition-all duration-300 ${
              isPopular
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
            }`}
          >
            <CalendarDays className="w-4 h-4 mr-2" />Zarezerwuj
          </Button>
        </Link>
      </div>
    </div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Pricing() {
  return (
    <div className="pt-20 pb-24">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Cennik"
          title="Proste i przejrzyste ceny"
          subtitle="Wybierz pakiet dopasowany do Twojej przygody."
        />

        {/* Gaming Area */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-border/50">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-lg font-semibold tracking-wide">Gralnia</h3>
            </div>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto items-center">
            {gamingPlans.map((plan) => (
              <motion.div key={plan.id} variants={cardItem} className="h-full"><PricingCard plan={plan} isPopular={plan.popular} /></motion.div>
            ))}
          </motion.div>
        </div>

        {/* RPG Room */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-border/50">
              <Swords className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-lg font-semibold tracking-wide">Pokój RPG</h3>
            </div>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto items-center">
            {rpgPlans.map((plan) => (
              <motion.div key={plan.id} variants={cardItem} className="h-full"><PricingCard plan={plan} isPopular={plan.popular} /></motion.div>
            ))}
          </motion.div>
        </div>

        {/* Game Master CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto text-center border-primary/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mx-auto mb-5">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold tracking-wide">Sesje z Game Masterem</h3>
            <p className="text-muted-foreground text-sm opacity-50 mb-3">(max 8 os.)</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Chcesz przeżyć sesję RPG z doświadczonym Game Masterem? Skontaktuj się z nami, a przygotujemy dla Ciebie indywidualną wycenę.
            </p>
            <Link to="/kontakt">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider text-sm px-8 py-5 glow-gold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                Zapytaj o cenę
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}