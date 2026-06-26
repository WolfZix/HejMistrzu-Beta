import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import image4 from "@/assets/image4.png"

export default function CTASection() {
  return (
    <section className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed bg-no-repeat"
          style={{
            backgroundImage: `url(${image4})`,
          }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mb-6">
          Gotowy na <span className="text-gold-gradient">przygodę</span>?
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed max-w-lg mx-auto">
          Zarezerwuj stolik, zbierz drużynę i wkrocz do świata gier. Czekamy na Ciebie!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/rezerwacje">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider px-8 py-6 text-base glow-gold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
            >
              <CalendarDays className="w-5 h-5 mr-2" />
              Sprawdź dostępność
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
          <Link to="/kontakt">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 text-foreground hover:text-foreground hover:bg-primary/10 hover:border-primary/40 font-heading tracking-wider px-8 py-6 text-base backdrop-blur-sm transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Napisz do nas
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}