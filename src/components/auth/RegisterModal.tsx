import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

type RegisterModalProps = {
  isRegisterOpen: boolean;
  onRegisterClose: () => void;
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RegisterModal({
  isRegisterOpen, onRegisterClose,
  setIsLoginOpen,
}: RegisterModalProps) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.message);
      return;
    }
    setError("");
    onRegisterClose();
    setIsLoginOpen(true);
  } catch (error) {
    console.error(error);
    setError("błąd połaczenia z serwerem");
  }
};

  return (
    <AnimatePresence>
      {isRegisterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => {
              setUsername("");
              setEmail("");
              setPassword("");
              setError("");
              onRegisterClose();
            }}
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
              onMouseDown={(e) => e.stopPropagation()}
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
                onClick={onRegisterClose}
                className="absolute top-3 right-3 p-2 rounded-lg hover:bg-muted/30"
              >
                <X size={18} />
              </button>
              <div className="flex flex-col items-center justify-center mb-6 min-h-8 overflow-hidden">
                <h2 className="font-heading text-center text-2xl font-semibold">
                  Rejestracja
                </h2>
              </div>

              <form
              onSubmit={handleRegister}
              className="flex flex-col"
              >
                <label className="mb-1">Nazwa użytkownika</label>
                  <input
                    type="text"
                    placeholder="Nazwa użytkownika"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                <label className="mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                {error && (
                  <p className="text-red-500 text-sm mb-4">
                    {error}
                  </p>
                )}
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
                  Zarejestruj się
                </button>
              </form>

              <div className="mt-6 text-center overflow-hidden">
                <p className="text-sm text-muted-foreground h-5 overflow-hidden">
                  Masz konto?
                </p>
                <button
                onClick={() => {
                  onRegisterClose();
                  setIsLoginOpen(true);
                }}
                type="button"
                className="mt-2 text-primary hover:underline">
                  Zaloguj się
                </button>
              </div>
            </motion.div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}