import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FormSelectProps = {
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
  className?: string;
  containerClassname?: string;
};

export default function FormSelect({
  label,
  value,
  options,
  onChange,
  className = "",
  containerClassname = "",
}: FormSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative flex flex-col gap-2 ${containerClassname || "w-52"}`}>
      <p className="text-sm">
        {label}
      </p>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full
          border border-primary/20
          rounded-lg
          p-3
          flex
          items-center
          justify-between
          hover:border-primary/50
          transition-all
          ${className || "bg-background/50"}
        `}
      >
        <span>
          {value || "Wybierz..."}
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              absolute
              top-full
              left-0
              mt-1
              w-full
              z-50
              rounded-lg
              border
              border-primary/20
              bg-card
              shadow-lg
              overflow-hidden
            "
          >
            {options.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="
                  w-full
                  text-left
                  px-3
                  py-2
                  hover:bg-primary
                  hover:text-black
                  transition-colors
                "
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}