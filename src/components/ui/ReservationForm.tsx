import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendarDays, CheckCircle2, ArrowRight, ChevronDown, LoaderCircle } from "lucide-react";
import axios from "axios";

type ReservationFormProps = {
  selectedDate: Date;
}

export default function ReservationForm({ selectedDate }: ReservationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSessionOpen, setIsSessionOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [reservationType, setReservationType] = useState("");
  const [duration, setDuration] = useState<number | null>(null);
  const [serverError, setServerError] = useState("");
  const bookingOptions = ['Gralnia', 'Sesja RPG']
  const durationOptions = [
    {value: 3, label: "3 godziny"},
    {value: 5, label: "5 godzin"},
    {value: 0, label: "Bez limitu"},
  ]
  const [reservationTime, setReservationTime] = useState("");
  const [peopleCount, setPeopleCount] = useState(4);
  const [isPeopleCountOpen, setIsPeopleCountOpen] = useState(false);
  const peopleCountOptions = [1, 2, 3, 4];

  const [isHourOpen, setIsHourOpen] = useState(false);
  const hourOptions = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
  ]
  const requiresDuration = reservationType === "Sesja RPG";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  })

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  function validateForm() {
  const newErrors = {
    fullName: "",
    email: "",
    phone: "",
  };

  const nameRegex =
    /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+(?:[-'][A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+)?(?:\s[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+(?:[-'][A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+)?)+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{9,15}$/;

  const phone = formData.phone.replace(/\s/g, "");

  if (!nameRegex.test(formData.fullName)) {
    newErrors.fullName = "Podaj poprawne imię i nazwisko";
  }
  if (!emailRegex.test(formData.email)) {
    newErrors.email = "Niepoprawny email";
  }
  if (phone && !phoneRegex.test(phone)) {
    newErrors.phone = "Niepoprawny numer telefonu";
  }

  setErrors(newErrors);
  return !Object.values(newErrors).some(Boolean);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError("");
    const isValid = validateForm();

    if (!isValid) return;
    if (!reservationType) return;
    if (requiresDuration && !duration) return;

    setIsSubmitting(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/reservations`, {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        reservationDate: selectedDate.toLocaleDateString("en-CA"),
        reservationTime,
        duration: requiresDuration ? duration : null,
        peopleCount: !requiresDuration ? peopleCount : null,
        notes: formData.notes,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      notes: "",
    });
    setReservationType("");
    setDuration(null);
    setReservationTime("");
    setPeopleCount(4);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setServerError(
          error.response?.data?.message ??
          "Nie udało się wysłać rezerwacji."
        );
      } else {
        setServerError("Nie udało się połączyć z serwerem.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    setErrors(prev => ({
      ...prev,
      [field]: "",
    }));
  }

  useEffect(() => {
    const handleClick = () => {
      setIsSessionOpen(false);
      setIsTimeOpen(false);
      setIsPeopleCountOpen(false);
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    }
  },[])

  const canSubmit =
  formData.fullName &&
  formData.email &&
  reservationType &&
  (!requiresDuration || duration);

  const formattedDate = new Intl.DateTimeFormat("pl-PL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(selectedDate);

  return (
    <motion.div
      id="form"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass p-4 rounded-2xl sm:p-6 w-full md:w-[31rem] lg:w-[30rem] xl:w-[36rem] mx-auto border-primary/10"
    >
      <div className="flex items-center gap-4 mb-4">
        <CalendarDays className="w-6 h-6 text-primary" />
        <h2 className="font-heading text-2xl">Formularz rezerwacji</h2>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 min-h-[28rem]"
        >
          <div className="p-4 rounded-full bg-green-500/10 w-fit mx-auto mb-5 border border-green-500/20">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>
          <h3 className="font-heading text-xl font-semibold mb-2">Dziękujemy!</h3>
          <p className="text-muted-foreground text-sm max-w-xs mx-auto">
            Twoja rezerwacja została wysłana. Skontaktujemy się z Tobą w ciągu 24 godzin.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1">
              <Label>Wybrana data</Label>

              <div className="bg-card border border-border rounded-xl h-11 px-3 flex items-center">
                {formattedDate}
              </div>
            </div>

            <div className="space-y-1">
              <Label className="text-sm font-medium">
                Godzina <span className="text-red-500">*</span>
              </Label>

              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSessionOpen(false);
                    setIsTimeOpen(false);
                    setIsHourOpen((prev) => !prev);
                  }}
                  className="bg-card w-full text-left px-3 flex items-center justify-between border border-border text-sm focus:border-primary/50 h-11 rounded-xl"
                >
                  <span className={reservationTime ? "" : "text-foreground/60"}>
                    {reservationTime || "Wybierz godzinę"}
                  </span>

                  <ChevronDown
                    size={14}
                    className="text-foreground/30"
                  />
                </button>

                <AnimatePresence>
                  {isHourOpen && (
                    <motion.div
                      onClick={(e) => e.stopPropagation()}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-1 z-50 left-0 w-full text-sm flex flex-col border border-border items-start bg-card rounded-xl p-1"
                    >
                      {hourOptions.map((hour) => (
                        <button
                          key={hour}
                          type="button"
                          className="bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black"
                          onClick={() => {
                            setReservationTime(hour);
                            setIsHourOpen(false);
                          }}
                        >
                          {hour}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1">
              <Label className="text-sm font-medium">
                Rodzaj rezerwacji <span className="text-red-500">*</span>
              </Label>

              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsHourOpen(false);
                    setIsTimeOpen(false);
                    setIsPeopleCountOpen(false);
                    setIsSessionOpen((prev) => !prev);
                  }}
                  className="bg-card w-full text-left px-3 flex items-center justify-between border border-border text-sm focus:border-primary/50 h-11 rounded-xl"
                >
                  <span className={reservationType ? "" : "text-foreground/60"}>
                    {reservationType || "Gralnia czy Sesja RPG?"}
                  </span>

                  <ChevronDown
                    size={14}
                    className="text-foreground/30"
                  />
                </button>

                <AnimatePresence>
                  {isSessionOpen && (
                    <motion.div
                      onClick={(e) => e.stopPropagation()}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-1 z-50 left-0 w-full text-sm flex flex-col border border-border items-start bg-card rounded-xl p-1"
                    >
                      {bookingOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className="bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black"
                          onClick={() => {
                            setReservationType(option);
                            setDuration(null);
                            setIsSessionOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {requiresDuration ? (
              <div className="space-y-1">
                <Label className="text-sm font-medium">
                  Ilość godzin <span className="text-red-500">*</span>
                </Label>

                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSessionOpen(false);
                      setIsHourOpen(false);
                      setIsTimeOpen((prev) => !prev);
                    }}
                    className="bg-card w-full text-left px-3 flex items-center justify-between border border-border text-sm focus:border-primary/50 h-11 rounded-xl"
                  >
                    <span className={duration ? "" : "text-foreground/60"}>
                      {duration || "3h, 5h czy bez limitu?"}
                    </span>

                    <ChevronDown
                      size={14}
                      className="text-foreground/30"
                    />
                  </button>

                  <AnimatePresence>
                    {isTimeOpen && (
                      <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-1 z-50 left-0 w-full text-sm flex flex-col border border-border items-start bg-card rounded-xl p-1"
                      >
                        {durationOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            className="bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black"
                            onClick={() => {
                              setDuration(option.value);
                              setIsTimeOpen(false);
                            }}
                          >
                            {option.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ) : (
                <div className="space-y-1">
                <Label className="text-sm font-medium">
                  Ilość osób <span className="text-red-500">*</span>
                </Label>

                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSessionOpen(false);
                      setIsHourOpen(false);
                      setIsTimeOpen(false);
                      setIsPeopleCountOpen((prev) => !prev);
                    }}
                    className="bg-card w-full text-left px-3 flex items-center justify-between border border-border text-sm focus:border-primary/50 h-11 rounded-xl"
                  >
                    <span>
                      {peopleCount} {peopleCount === 1 ? "osoba" : "osoby"}
                    </span>

                    <ChevronDown
                      size={14}
                      className="text-foreground/30"
                    />
                  </button>

                  <AnimatePresence>
                    {isPeopleCountOpen && (
                      <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-1 z-50 left-0 w-full text-sm flex flex-col border border-border items-start bg-card rounded-xl p-1"
                      >
                        {peopleCountOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            className="bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black"
                            onClick={() => {
                              setPeopleCount(option);
                              setIsPeopleCountOpen(false);
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
          <AnimatePresence>
            {reservationType !== "Sesja RPG" && (
              <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.1 }}
              className="overflow-hidden flex gap-1 text-xs text-muted-foreground"
              >
                <span>
                  *
                </span>
                <span className="flex flex-col">
                  <p>
                    Rezerwacja Gralni obejmuje maksymalnie 4 osoby.
                  </p>
                  <p>
                    Większe grupy prosimy zgłaszać telefonicznie lub w notatkach.
                  </p>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="space-y-1">
            <Label className="text-sm font-medium">
              Imię i nazwisko <span className="text-red-500">*</span>
            </Label>

            <Input
              placeholder="Jan Kowalski"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="bg-card border-border focus:border-primary/50 h-11 rounded-xl"
            />

            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1">
              <Label className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </Label>

              <Input
                type="email"
                placeholder="przykladowy@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="bg-card border-border focus:border-primary/50 h-11 rounded-xl"
              />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label className="text-sm font-medium">
                Telefon (opcjonalnie)
              </Label>

              <Input
                type="text"
                placeholder="+48 123 456 789"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="bg-card border-border focus:border-primary/50 h-11 rounded-xl"
              />

              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          <AnimatePresence>
            {(!canSubmit || serverError) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.1 }}
                className="text-sm text-red-400 text-left"
              >
                {serverError ? serverError : "Brakuje wymaganych pól"}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-1">
            <Label className="text-sm font-medium">
              Dodatkowe informacje
            </Label>

            <Textarea
              placeholder="Napisz, jeśli masz jakieś pytania..."
              value={formData.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              className="bg-card border-border focus:border-primary/50 min-h-[70px] rounded-xl resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider py-6 text-base glow-gold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                Wysyłanie
                <LoaderCircle size={18} className="animate-spin" />
              </span>
            ) : (
              <>
                <CalendarDays className="w-5 h-5 mr-2" />
                Wyślij rezerwację
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  )}