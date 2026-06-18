import type { Event } from "@/types/event";
import { CircleAlert, CircleCheck } from "lucide-react";
import { useState } from "react";

type ReservationFormProps = {
  event: Event;
  freeSlots: number;
  onClose: () => void;
}

type FormErrors = {
  firstName: string;
  lastName: string;
  pokemonId: string;
  email: string;
};

export default function ReservationForm({event, freeSlots, onClose }: ReservationFormProps) {
  const [slots, setSlots] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    pokemonId: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: '',
    lastName: '',
    pokemonId: '',
    email: '',
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
      firstName: "",
      lastName: "",
      pokemonId: "",
      email: "",
    };

  const nameRegex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(?:-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pokemonIdRegex = /^\d+$/;

  if (!nameRegex.test(formData.firstName)) {
    newErrors.firstName = "Imię powinno zaczynać się z wielkiej litery!";
  }
  if (!nameRegex.test(formData.lastName)) {
    newErrors.lastName = "Nazwisko powinno zaczynać się z wielkiej litery!";
  }
  if (!pokemonIdRegex.test(formData.pokemonId)) {
    newErrors.pokemonId = "Pokemon ID może zawierać tylko cyfry";
  }
  if (!emailRegex.test(formData.email)) {
    newErrors.email = "Niepoprawny adres email";
  }

  setErrors(newErrors);
  if (
    newErrors.firstName ||
    newErrors.lastName ||
    newErrors.pokemonId ||
    newErrors.email
  ) {
    return newErrors;
  }
  return null;
  }

  async function handleReservation(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setSubmitStatus("idle");
  const validationErrors = validateForm();
  if (validationErrors) {
    return;
  }


  setIsLoading(true);
  await new Promise(resolve => setTimeout(resolve, 2000));
  setIsLoading(false);
  const reservationData = {
    eventId: event.id,
    date: event.date,
    userInfo: formData,
    slots,
    totalPrice: event.price * slots,
  };
  setSubmitStatus("success");
  console.log(reservationData);
}
  return (
    <form onSubmit={handleReservation}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              required
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
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
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              required
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
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
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
          <div>
            <input
              required
              type="text"
              value={formData.pokemonId}
              onChange={(e) => handleChange("pokemonId", e.target.value)}
              placeholder="Pokémon ID"
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
            {submitStatus === "success" && (
              <div className="flex items-center gap-2 text-green-500">
                <CircleCheck size={12} />
                <p>Rezerwacja została wysłana.</p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="flex items-center gap-2 text-red-500">
                <CircleAlert size={12} />
                <p>Nie udało się wysłać rezerwacji.</p>
              </div>
            )}
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
            onClick={onClose}
            className="px-4 py-2 w-full border rounded hover:bg-muted-foreground/20 transition-all duration-300">
              Anuluj
            </button>
            <button
            type="submit"
            disabled={isLoading}
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
  )
}