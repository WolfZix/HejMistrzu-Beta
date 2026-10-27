import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, LoaderCircle } from "lucide-react";

type AddUserFormProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;

  surname: string;
  setSurname: React.Dispatch<React.SetStateAction<string>>;

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

  isSubmitting: boolean;
  error: string;
  handleSubmit: (e: React.FormEvent) => void;
  closeModal: () => void;
};

const inputClassName = `
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
`;

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

type FormInputProps = {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
};

function FormInput({
  label,
  type,
  value,
  onChange,
  autoComplete = "off",
}: FormInputProps) {
  return (
    <div>
      <label className="mb-1 block">{label}</label>

      <input
        required
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className={inputClassName}
      />
    </div>
  );
}

export default function AddUserForm({
  name, setName,
  surname, setSurname,
  username, setUsername,
  email, setEmail,
  password, setPassword,
  role, setRole,
  isRoleOpen, setIsRoleOpen,
  handleSubmit, isSubmitting,
  closeModal, error
}: AddUserFormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >

      <FormInput
        label="Imię"
        type="text"
        value={name}
        onChange={setName}
        autoComplete="given-name"
      />

      <FormInput
        label="Nazwisko"
        type="text"
        value={surname}
        onChange={setSurname}
        autoComplete="family-name"
      />

      <FormInput
        label="Nazwa użytkownika"
        type="text"
        value={username}
        onChange={setUsername}
      />

      <FormInput
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
      />

      <FormInput
        label="Hasło"
        type="password"
        value={password}
        onChange={setPassword}
        autoComplete="new-password"
      />

      <div className="relative">
        <label className="mb-1 block">
          Rola
        </label>

        <button
          type="button"
          onClick={() => setIsRoleOpen(!isRoleOpen)}
          aria-haspopup="listbox"
          aria-expanded={isRoleOpen}
          className={`${inputClassName} flex items-center justify-between gap-3 cursor-pointer`}
        >
          <span>
            { roleOptions.find((option) => option.value === role)?.label }
          </span>

          <ChevronDown
            size={18}
            className={`shrink-0 transition-transform ${isRoleOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isRoleOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
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

      {error.trim().length > 0 && ( <span>{error}</span> )}

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
          {isSubmitting ? (<><LoaderCircle size={14} className="animate-spin" /> "Dodawanie..."</>) : "Dodaj"}
        </button>
        </div>
    </form>
  )
}