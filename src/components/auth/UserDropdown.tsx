import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { User, LogIn, UserPlus, History, Trophy, LogOut } from "lucide-react";

type UserDropdownProps = {
  onLoginClick: () => void;
}

export default function UserDropdown({ onLoginClick }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = false;
  const username = "Patryk";

  return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/30">
          <User size={22} />
        </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="
              absolute
              right-0
              mt-2
              w-56
              rounded-xl
              border
              border-primary/30
              bg-card
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]
              overflow-hidden
              z-50
            "
          >
            {!isLoggedIn ? (
              <>
                <button
                onClick={() => {
                  onLoginClick();
                  setIsOpen(false);
                }}
                  className="
                    w-full
                    text-left
                    px-4
                    py-3
                    hover:bg-primary/10
                    transition-all
                    flex gap-2 items-center
                  "
                >
                  <LogIn size={18} />
                  Zaloguj się
                </button>

                <button
                  className="
                    w-full
                    text-left
                    px-4
                    py-3
                    hover:bg-primary/10
                    transition-all
                    flex gap-2 items-center
                  "
                >
                  <UserPlus size={18} />
                  Utwórz konto
                </button>
              </>
            ) : (
              <>
                <div
                  className="
                    px-4
                    py-3
                    border-b
                    border-primary/20
                    font-semibold
                    text-primary
                    flex gap-1
                  "
                >
                  {username}
                </div>

                <Link
                to="/profil/:username"
                  className="
                    w-full
                    text-left
                    px-4
                    py-3
                    hover:bg-primary/10
                    transition-all
                    flex gap-2 items-center
                  "
                >
                  <User size={18} />
                  Profil
                </Link>

                <Link
                to="/profil/:username/statystyki"
                  className="
                    w-full
                    text-left
                    px-4
                    py-3
                    hover:bg-primary/10
                    transition-all
                    flex gap-2 items-center
                  "
                >
                  <Trophy size={18} />
                  Statystyki
                </Link>

                <Link
                to="/profil/:username/historia"
                  className="
                    w-full
                    text-left
                    px-4
                    py-3
                    hover:bg-primary/10
                    transition-all
                    flex gap-2 items-center
                  "
                >
                  <History size={18} />
                  Historia
                </Link>

                <button
                  className="
                    w-full
                    text-left
                    px-4
                    py-3
                    text-red-500
                    hover:bg-red-500/10
                    transition-all
                    flex gap-2 items-center
                  "
                >
                  <LogOut size={18} />
                  Wyloguj
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}