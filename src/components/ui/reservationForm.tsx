import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendarDays, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";

type ReservationFormProps = {
  selectedDate: Date;
}

export default function ReservationForm({ selectedDate }: ReservationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSessionOpen, setIsSessionOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [reservationType, setReservationType] = useState("");
  const [duration, setDuration] = useState("");
  const bookingOptions = ['Gralnia', 'Sesja RPG']
  const durationOptions = [
    '3 godziny',
    '5 godzin',
    'Bez limitu'
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

  const nameRegex = /^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]+(?:\s[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]+)+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{9}$/;

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateForm();

    if (!isValid) return;
    if (!reservationType || !duration) return;

    setSubmitted(true);
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
      className="glass p-4 rounded-2xl sm:p-8 w-full md:w-[31rem] lg:w-[30rem] xl:w-[36rem] mx-auto border-primary/10"
    >
      <div className="text-center mb-4">
        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mx-auto mb-2">
          <CalendarDays className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-heading text-xl font-bold tracking-wide">Formularz rezerwacji</h3>
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
            <div className="space-y-2">
              <Label>Wybrana data</Label>

              <div className="bg-card border border-border rounded-xl h-11 px-3 flex items-center">
                  {formattedDate}
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Rodzaj rezerwacji <span className="text-red-500">*</span></Label>
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsTimeOpen(false);
                    setIsSessionOpen(prev => !prev)
                  }}
                  className="bg-card w-full text-left px-3 flex items-center justify-between border border-border text-sm focus:border-primary/50 h-11 rounded-xl "
                >
                  <span className={reservationType ? "" : "text-foreground/60"}>
                    {reservationType || "Gralnia czy Sesja RPG?"}
                  </span>
                  <span>
                    <ChevronDown size={14}  className="text-foreground/30"/>  
                  </span>
                </button>
                <AnimatePresence>
                {isSessionOpen && (
                  <motion.div
                  onClick={(e) => e.stopPropagation()}
                  initial={{opacity: 0, y: -10}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -10}}
                  transition={{duration: 0.2}}
                  className="absolute top-full mt-1 z-50 left-0 w-full text-sm flex flex-col border border-border items-start bg-card rounded-xl p-1">
                    {bookingOptions.map(option => (
                      <button
                        key={option}
                        type="button"
                        className="bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black"
                        onClick={() => {
                          setReservationType(option);
                          setDuration("");
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
          </div>
          <div className={`grid grid-cols-1 gap-5 ${requiresDuration ? "sm:grid-cols-2" : ""}`}>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Imię i nazwisko <span className="text-red-500">*</span></Label>
              <Input
              required
              placeholder="Jan Kowalski"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>
          {requiresDuration && (
            <div className="space-y-2">
              <Label className="text-sm font-medium">Ilość godzin <span className="text-red-500">*</span></Label>
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSessionOpen(false);
                    setIsTimeOpen(prev => !prev)
                  }}
                  className="bg-card w-full text-left px-3 flex items-center justify-between border border-border text-sm focus:border-primary/50 h-11 rounded-xl cursor-pointer"
                >
                  <span className={duration ? "" : "text-foreground/60"}>
                    {duration || "3h, 5h czy bez limitu?"}
                  </span>
                  <span>
                    <ChevronDown size={14}  className="text-foreground/30"/>  
                  </span>
                </button>
                <AnimatePresence>
                  {isTimeOpen && (
                    <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -10}}
                    transition={{duration: 0.2}}
                    className="absolute top-full mt-1 z-50 left-0 w-full text-sm flex flex-col border border-border items-start bg-card rounded-xl p-1">
                      {durationOptions.map(option => (
                        <button
                        key={option}
                        type="button"
                        className="bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black"
                        onClick={() => {
                          setDuration(option);
                          setIsTimeOpen(false);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Email <span className="text-red-500">*</span></Label>
              <Input
              required
              type="email"
              placeholder="przykładowy@email.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Telefon (opcjonalnie)</Label>
              <Input
              type="text"
              placeholder="+48 123 456 789"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
          {(!canSubmit) && (
              <p className="text-sm text-red-400 mt-2 text-left">Uzupełnij wszystkie wymagane pola</p>
            )}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Dodatkowe informacje</Label>
            <Textarea
            placeholder="Napisz, jeśli masz jakieś pytania..."
            value={formData.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
            className="bg-card border-border focus:border-primary/50 min-h-[50px] rounded-xl" />
          </div>
          <Button
          type="submit"
          disabled={!canSubmit}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider py-6 text-base glow-gold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group relative">
            <CalendarDays className="w-5 h-5 mr-2" />
            Wyślij rezerwację
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>
        </form>
      )}
    </motion.div>
  )}