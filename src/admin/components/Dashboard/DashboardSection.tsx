import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Stat = {
  label: string;
  value: string | number;
};

type RankingItem = {
  name: string;
  value: number;
};

type DashboardSectionProps = {
  title: string;
  stats: Stat[];
  ranking?: RankingItem[];
  isOpen: boolean;
  onToggle: () => void;
};

export default function DashboardSection({
  title,
  stats,
  ranking,
  isOpen,
  onToggle,
}: DashboardSectionProps) {

  return (
    <div
      onClick={onToggle}
      className="glass rounded-xl p-6 h-fit cursor-pointer"
    >
      <div className="w-full flex items-center justify-between text-left">
        <h2 className="font-heading text-2xl font-medium tracking-wide text-primary">
          {title}
        </h2>
        <ChevronDown size={24} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="overflow-hidden"
          >
            <div className="mt-5 space-y-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-muted-foreground">
                    {stat.label}
                  </span>

                  <span
                    className={`font-medium ${
                      index === stats.length - 1
                        ? "text-primary font-semibold"
                        : ""
                    }`}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {ranking && ranking.length > 0 && (
              <>
                <div className="my-5 border-t border-border" />

                <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                  Top 5
                </h3>

                <div className="space-y-2">
                  {ranking.map((item, index) => (
                    <div
                      key={item.name}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-lg
                        px-3
                        py-2
                        hover:bg-muted/30
                        transition-colors
                      "
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            w-6
                            text-center
                            text-primary
                            font-semibold
                          "
                        >
                          {index + 1}.
                        </span>

                        <span className="text-sm">
                          {item.name}
                        </span>
                      </div>

                      <span className="text-sm text-muted-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}