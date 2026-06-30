import { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { User, LogIn, UserPlus, History, Trophy, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

type UserDropdownProps = {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export default function UserDropdown({ onLoginClick, onRegisterClick }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[]);

  const { user, logout } = useAuth();
  const isLoggedIn = !!user;
  const username = user?.username;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
      <div
      ref={dropdownRef}
      className="relative">
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex
          items-center
          gap-1
          relative
          overflow-hidden
          p-2
          text-muted-foreground
          hover:text-foreground
          transition-colors
          rounded-lg
          hover:bg-muted/30
        "
      >
        <User size={22} />
        {username ? (
          <span
          className="text-sm font-medium">
            {username.length > 15
            ? `${username.slice(0, 15)}...`
            : username}
          </span>
        ) : (
          <span className="text-sm font-medium">Guest</span>
        )}
      </button>
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
                  onClick={() => {
                    onRegisterClick();
                    setIsOpen(false)
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
                  {username && (
                    username.length > 20
                    ? `${username.slice(0, 20)}...`
                    : username
                  )}
                </div>

                <Link
                  to={`/profil/${username}`}
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

                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout()
                  }}
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
    </div>
  );
}