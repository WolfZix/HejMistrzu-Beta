import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import HeroBackground from "@/assets/HeroBackground.png";
import HeroBackgroundAnimation from "@/assets/HeroBackgroundAnimation.mp4";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const y = useTransform(scrollY, [0, 800], [0, 300]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div
          className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HeroBackground})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </motion.div>

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-20 w-[30rem] h-[30rem] rounded-full bg-primary/[0.03] blur-[100px]" />
        <div className="absolute bottom-1/2 -right-20 w-[25rem] h-[25rem] rounded-full bg-secondary/[0.03] blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-[1.1]"
        >
          Przyjdź i wkrocz
          <br />
          <span className="text-gold-gradient">w świat fantastyki</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Planszówki, RPG, Pokémon TCG, Riftbound i Warhammer pod jednym dachem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/rezerwacje">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold tracking-wider px-8 py-6 text-base glow-gold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
            >
              Zarezerwuj stolik
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
          <Link to="/wydarzenia">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:text-foreground hover:bg-primary/10 hover:border-primary/50 font-heading tracking-wider px-8 py-6 text-base backdrop-blur-sm transition-all duration-300"
            >
              Zobacz wydarzenia
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-primary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}