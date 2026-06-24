import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type AddUserFormProps = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;

  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;

  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;

  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;

  isRoleOpen: boolean;
  setIsRoleOpen: React.Dispatch<React.SetStateAction<boolean>>;

  handleSubmit: (e: React.FormEvent) => void;
  closeModal: () => void;
};

const roleOptions = [
  {
    value: "user",
    label: "Użytkownik",
  },
  {
    value: "admin",
    label: "Administrator",
  },
];

export default function AddUserForm({
  username, setUsername,
  email, setEmail,
  password, setPassword,
  role, setRole,
  isRoleOpen, setIsRoleOpen,
  handleSubmit,
  closeModal,
}: AddUserFormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <div>
        <label className="mb-1 block">
          Nazwa użytkownika
        </label>

        <input
          required
          type="text"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="
            w-full
            bg-background/50
            border border-primary/20
            rounded-lg
            p-3
            outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/50
            transition-all
            duration-300
            text-primary
          "
        />
      </div>

      <div>
        <label className="mb-1 block">
          Email
        </label>

        <input
          required
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="
            w-full
            bg-background/50
            border border-primary/20
            rounded-lg
            p-3
            outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/50
            transition-all
            duration-300
            text-primary
          "
        />
      </div>

      <div>
        <label className="mb-1 block">
          Hasło
        </label>

        <input
          required
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="
            w-full
            bg-background/50
            border border-primary/20
            rounded-lg
            p-3
            outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/50
            transition-all
            duration-300
            text-primary
          "
        />
      </div>

      <div className="relative">
        <label className="mb-1 block">
          Rola
        </label>

        <button
          type="button"
          onClick={() =>
            setIsRoleOpen(!isRoleOpen)
          }
          className="
            w-full
            bg-background/50
            border border-primary/20
            rounded-lg
            p-3
            flex
            items-center
            justify-between
            transition-all
            duration-300
            hover:border-primary/40
          "
        >
          <span>
            {
              roleOptions.find(
                (option) =>
                  option.value === role
              )?.label
            }
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform ${
              isRoleOpen
                ? "rotate-180"
                : ""
              }`}
          />
        </button>

        <AnimatePresence>
          {isRoleOpen && (
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
                mt-1
                z-50
                w-full
                rounded-xl
                border
                border-primary/20
                bg-card
                p-1
              "
            >
              {roleOptions.map(
                (option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                    setRole(option.value);
                    setIsRoleOpen(false);
                    }}
                    className="
                      w-full
                      text-left
                      p-2
                      rounded-md
                      hover:bg-primary
                      hover:text-black
                    "
                  >
                    {option.label}
                  </button>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-3 mt-2">
        <button
          type="button"
          onClick={closeModal}
          className="
            flex-1
            py-2
            rounded-md
            border
            border-muted-foreground/20
            hover:bg-foreground/10
            hover:border-foreground/20
            hover:text-white
            transition-all
          "
        >
          Anuluj
        </button>

        <button
          type="submit"
          className="
            flex-1
            py-2
            rounded-md
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
          Dodaj
        </button>
        </div>
    </form>
  )
}