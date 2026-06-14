import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 lg:mb-16 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.15em] uppercase bg-primary/10 text-primary border border-primary/20 mb-5">
          {badge}
        </span>
      )}

      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-foreground leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 sm:mt-5 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}