import { useState } from "react";
import { User } from "lucide-react";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = false;
  const username = "Patryk";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          p-2
          rounded-full
          hover:bg-muted
          transition-all
          duration-300
        "
      >
        <User size={22} />
      </button>

      {isOpen && (
        <div
          className="
            absolute
            right-0
            mt-2
            w-56
            rounded-xl
            border
            border-primary/30
            bg-background
            shadow-[0_0_15px_1px_hsl(43,50%,10%)]
            overflow-hidden
            z-50
          "
        >
          {!isLoggedIn ? (
            <>
              <button
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  hover:bg-primary/10
                  transition-all
                "
              >
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
                "
              >
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
                "
              >
                {username}
              </div>

              <button
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  hover:bg-primary/10
                  transition-all
                "
              >
                Profil
              </button>

              <button
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  hover:bg-primary/10
                  transition-all
                "
              >
                Statystyki
              </button>

              <button
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  hover:bg-primary/10
                  transition-all
                "
              >
                Historia
              </button>

              <button
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  text-red-500
                  hover:bg-red-500/10
                  transition-all
                "
              >
                Wyloguj
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}