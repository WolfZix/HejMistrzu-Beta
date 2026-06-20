import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({
  isOpen,
  onClose,
}: LoginModalProps) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isOpen])
  return (
    <AnimatePresence>
      {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/60
            backdrop-blur-sm
            p-4
            "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="
              w-full
              relative
              max-w-md
              rounded-xl
              border
              border-primary/30
              bg-card
              px-6
              pb-6
              pt-12
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]
              "
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 p-2 rounded-lg hover:bg-muted/30"
              >
                <X size={18} />
              </button>
              <div className="flex flex-col items-center justify-center mb-6">
                <h2 className="font-heading text-center text-2xl font-semibold">
                  Logowanie
                </h2>
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Zaloguj się do swojego konta
                </p>
              </div>

              <form className="flex flex-col">
                <label className="mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="
                    w-full
                    bg-background/50
                    border border-primary/20
                    rounded-lg
                    p-3
                    outline-none
                    focus:border-primary
                    focus:ring-2 focus:ring-primary/50
                    transition-all
                    duration-300
                    text-primary
                    mb-4
                    "
                  />
                <label className="mb-1">Hasło</label>
                <input
                  type="password"
                  placeholder="Hasło"
                  className="
                  w-full
                  bg-background/50
                  border border-primary/20
                  rounded-lg
                  p-3
                  outline-none
                  focus:border-primary
                  focus:ring-2 focus:ring-primary/50
                  transition-all
                  duration-300
                  text-primary
                  mb-4
                  "
                />

                <button
                  type="submit"
                  className="
                  mt-2
                  py-3
                  rounded
                  font-heading
                  font-semibold
                  bg-primary/70
                  text-primary-foreground
                  transition-all
                  duration-300
                  hover:bg-primary
                  hover:shadow-[0_0_8px_4px_hsl(43,50%,30%)]
                  "
                >
                  Zaloguj się
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Nie masz konta?
                </p>

                <button
                  type="button"
                  className="
                  mt-2
                  text-primary
                  hover:underline
                  "
                >
                  Utwórz konto
                </button>
              </div>
            </motion.div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}