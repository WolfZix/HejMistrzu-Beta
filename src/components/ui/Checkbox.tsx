import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <div
      onClick={onChange}
      className="w-8 h-8 border-2 bg-foreground/25 border-primary rounded cursor-pointer"
    >
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Check className="w-full h-full bg-primary text-black" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}