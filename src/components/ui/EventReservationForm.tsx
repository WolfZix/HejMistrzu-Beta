import type { Event } from "@/types/event";
import { CircleAlert, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

type EventRegistrationFormProps = {
  event: Event;
  freeSlots: number;
  onClose: () => void;
  preview?: boolean;
  onRegistrationSuccess: () => void;
}

type FormErrors = {
  name: string;
  surname: string;
  pokemonId: string;
  email: string;
  nickname: string;
  slots: string;
};

export default function EventRegistrationForm({event, freeSlots, onClose, preview = false, onRegistrationSuccess }: EventRegistrationFormProps) {
  const [slots, setSlots] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    pokemonId: "",
    email: "",
    nickname: "",
    slots: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    surname: '',
    pokemonId: '',
    email: '',
    nickname: '',
    slots: '',
  })

  const handleChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setSubmitStatus("idle");
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    setErrors(prev => ({
      ...prev,
      [field]: "",
    }));
  }

  function validateForm(): FormErrors | null {
    const newErrors: FormErrors = {
      name: "",
      surname: "",
      pokemonId: "",
      email: "",
      nickname: "",
      slots: "",
    };

  const nameRegex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(?:-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pokemonIdRegex = /^\d*$/;

  if (!nameRegex.test(formData.name)) {
    newErrors.name = "Imię powinno zaczynać się z wielkiej litery!";
  }
  if (!nameRegex.test(formData.surname)) {
    newErrors.surname = "Nazwisko powinno zaczynać się z wielkiej litery!";
  }
  if (!pokemonIdRegex.test(formData.pokemonId)) {
    newErrors.pokemonId = "Pokemon ID może zawierać tylko cyfry";
  }
  if (!emailRegex.test(formData.email)) {
    newErrors.email = "Niepoprawny adres email";
  }
  if (slots < 1) {
    newErrors.slots = "Niepoprawna ilość wykupionych miejsc";
  }

  setErrors(newErrors);
  if (
    newErrors.name ||
    newErrors.surname ||
    newErrors.pokemonId ||
    newErrors.email ||
    newErrors.slots
  ) {
    return newErrors;
  }
  return null;
  }

  async function handleRegistration(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitStatus("idle");
    setErrorMessage("");
    const validationErrors = validateForm();
    if (validationErrors) {
      return;
    }


    setIsLoading(true);
    const registrationData = {
      eventId: event.id,
      name: formData.name,
      surname: formData.surname,
      pokemonId: formData.pokemonId,
      nickname: formData.nickname,
      email: formData.email,
      slots,
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/eventRegistrations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });
    const data = await response.json();
    if (!response.ok) {
      setErrorMessage(data.message || "Przepraszamy, coś poszło nie tak!");
      setSubmitStatus("error");
      return;
    }
    setSubmitStatus("success");
    onRegistrationSuccess();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      {submitStatus === "success" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center z-50 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center bg-card h-[24rem]"
        >
          <div className="p-6 rounded-full bg-green-500/10 w-fit mx-auto mb-5 border border-green-500/20">
            <CircleCheck className="w-20 h-20 text-green-400" />
          </div>
          <h5 className="font-heading text-2xl font-semibold mb-2">Zapis udany!</h5>
          <p className="text-muted-foreground text-base max-w-xs mx-auto">Miłej zabawy na wydarzeniu!</p>
        </motion.div>
      ) : submitStatus === "error" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center z-50 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center bg-card"
        >
          <div className="p-6 rounded-full bg-red-500/10 w-fit mx-auto mb-5 border border-red-500/20">
            <CircleAlert className="w-20 h-20 text-red-400" />
          </div>
          <h5 className="font-heading text-2xl font-semibold mb-2">Zapis nieudany</h5>
          <p className="text-muted-foreground text-base max-w-xs mx-auto">{errorMessage || "Przepraszamy, coś poszło nie tak!"}</p>
        </motion.div>
      ) : (
        <form onSubmit={handleRegistration}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative">
            <div>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Imię"
                className="
                  w-full md:w-fit
                  bg-background
                  border
                  rounded
                  p-2
                  outline-none
                  focus:border-primary
                  transition-all duration-300
                  text-primary
              "/>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                required
                type="text"
                value={formData.surname}
                onChange={(e) => handleChange("surname", e.target.value)}
                placeholder="Nazwisko"
                className="
                  w-full md:w-fit
                  bg-background
                  border
                  rounded
                  p-2
                  outline-none
                  focus:border-primary
                  transition-all duration-300
                  text-primary
              "/>
              {errors.surname && (
                <p className="text-red-500 text-sm mt-1">{errors.surname}</p>
              )}
            </div>
            <div>
              <input
                required
                type="text"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Email"
                className="
                  w-full md:w-fit
                  bg-background
                  border
                  rounded
                  p-2
                  outline-none
                  focus:border-primary
                  transition-all duration-300
                  text-primary
              "/>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            {event.category === "Pokémon TCG" ? (
              <div>
                <input
                  type="text"
                  value={formData.pokemonId}
                  onChange={(e) => handleChange("pokemonId", e.target.value)}
                  placeholder="Pokémon ID (opcjonalnie)"
                  className="
                    w-full md:w-fit
                    bg-background
                    border
                    rounded
                    p-2
                    outline-none
                    focus:border-primary
                    transition-all duration-300
                    text-primary
                "/>
                {errors.pokemonId && (
                  <p className="text-red-500 text-sm mt-1">{errors.pokemonId}</p>
                )}
              </div>
              ) : (
                <div>
                <input
                  type="text"
                  value={formData.nickname}
                  onChange={(e) => handleChange("nickname", e.target.value)}
                  placeholder="Nickname (Opcjonalnie)"
                  className="
                    w-full md:w-fit
                    bg-background
                    border
                    rounded
                    p-2
                    outline-none
                    focus:border-primary
                    transition-all duration-300
                    text-primary
                "/>
              </div>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-between">
              <div className="rounded w-fit gap-3 text-lg flex items-center justify-center">
                <p className="flex items-center">Liczba miejsc: </p>
                <button
                  type="button"
                  disabled={isLoading || slots === 1}
                  onClick={() => setSlots(slots - 1)}
                  className="
                    w-8 h-8
                    bg-background
                    rounded
                    flex items-center justify-center
                    hover:border hover:border-primary
                    hover:text-primary
                    transition-all duration-300
                    select-none
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  ">
                  -
                </button>
                <span className="text-primary">{slots}</span>
                <button
                  type="button"
                  disabled={isLoading || slots === freeSlots}
                  onClick={() => setSlots(slots + 1)}
                  className="
                    w-8 h-8
                    bg-background
                    rounded
                    flex items-center justify-center
                    hover:border hover:border-primary
                    hover:text-primary
                    transition-all duration-300
                    select-none
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  ">
                  +
                </button>
              </div>
            </div>
            <div
              className="
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-4
                mt-4
            ">
              <p className="text-xl font-semibold">
              Razem:
              <span className="text-primary text-2xl ml-2">
                {event.price * slots}zł
              </span>
              </p>
              <div className="flex w-full md:w-auto gap-2">
                <button
                type="button"
                disabled={preview}
                onClick={onClose}
                className="px-4 py-2 w-full border rounded hover:bg-muted-foreground/20 transition-all duration-300 cursor-pointer">
                  Anuluj
                </button>
                <button
                type="submit"
                disabled={isLoading || preview}
                className="
                  w-full
                  tracking-tighter
                  font-heading font-semibold
                  px-5
                  rounded
                  transition-all
                  duration-300
                  z-10
                  bg-primary/80
                  text-black/80
                  cursor-pointer
                  hover:bg-primary
                  hover:text-black
                  hover:scale-[102%]
                  hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]
                ">
                  {isLoading ? "Wysyłanie..." : "Zarezerwuj"}
                </button>
              </div>
            </div>
          </form>
        )}
    </>
  )
}