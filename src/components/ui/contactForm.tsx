import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendarDays, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSessionOpen, setIsSessionOpen] = useState(false);
  const [isPeopleOpen, setIsPeopleOpen] = useState(false);
  const [sessionValue, setSessionValue] = useState("");
  const [peopleValue, setPeopleValue] = useState("");
  const bookingOptions = ['Gralnia', 'Sesja RPG', 'Sesja RPG z mistrzem gry']
  const peopleOptions = ['1 osoba', '2 osoby', '3 osoby', '4 osoby', '5 osób', '6 osób', '7 osób', '8 osób']

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (sessionValue && peopleValue) {
      e.preventDefault();
      setSubmitted(true);
    } else {
      e.preventDefault();
      setSubmitted(false);
    }
  };

  useEffect(() => {
    const handleClick = () => {
      setIsSessionOpen(false);
      setIsPeopleOpen(false);
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    }
  },[])

  return (
    <motion.div
          id="form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 sm:p-10 max-w-2xl mt-[5rem] mx-auto border-primary/10 mb-5"
        >
          <div className="text-center mb-8">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mx-auto mb-4">
              <CalendarDays className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold tracking-wide mb-2">Formularz rezerwacji</h3>
            <p className="text-muted-foreground text-sm">Wypełnij formularz, a my potwierdzimy Twoją rezerwację.</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
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
                  <Label className="text-sm font-medium">Imię i nazwisko <span className="text-red-500">*</span></Label>
                  <Input required placeholder="Jan Kowalski" className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Email <span className="text-red-500">*</span></Label>
                  <Input required type="email" placeholder="jan@email.com" className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Telefon <span className="text-red-500">*</span></Label>
                  <Input placeholder="+48 123 456 789" className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Rodzaj rezerwacji <span className="text-red-500">*</span></Label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPeopleOpen(false);
                        setIsSessionOpen(prev => !prev)
                      }}
                      className="bg-card w-full text-left px-3 flex items-center justify-between border border-border text-sm focus:border-primary/50 h-11 rounded-xl "
                    >
                      <span className={sessionValue ? "" : "text-foreground/60"}>
                      {sessionValue || "Wybierz..."}
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
                              setSessionValue(option);
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Data <span className="text-red-500">*</span></Label>
                  <Input required type="date" className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Liczba osób <span className="text-red-500">*</span></Label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsSessionOpen(false);
                        setIsPeopleOpen(prev => !prev)
                      }}
                      className="bg-card w-full text-left px-3 flex items-center justify-between border border-border text-sm focus:border-primary/50 h-11 rounded-xl "
                    >
                      <span className={peopleValue ? "" : "text-foreground/60"}>
                      {peopleValue || "Wybierz..."}
                      </span>
                      <span>
                      <ChevronDown size={14}  className="text-foreground/30"/>  
                      </span>
                    </button>
                  <AnimatePresence>
                    {isPeopleOpen && (
                      <motion.div
                      onClick={(e) => e.stopPropagation()}
                      initial={{opacity: 0, y: -10}}
                      animate={{opacity: 1, y: 0}}
                      exit={{opacity: 0, y: -10}}
                      transition={{duration: 0.2}}
                      className="absolute top-full mt-1 z-50 left-0 w-full text-sm flex flex-col border border-border items-start bg-card rounded-xl p-1">
                        {peopleOptions.map(option => (
                          <button
                            key={option}
                            type="button"
                            className="bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black"
                            onClick={() => {
                              setPeopleValue(option);
                              setIsPeopleOpen(false);
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
              <div className="space-y-2">
                <Label className="text-sm font-medium">Dodatkowe informacje</Label>
                <Textarea placeholder="Napisz, jeśli masz jakieś pytania..." className="bg-card border-border focus:border-primary/50 min-h-[100px] rounded-xl" />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider py-6 text-base glow-gold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group">
                <CalendarDays className="w-5 h-5 mr-2" />
                Wyślij rezerwację
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </form>
          )}
        </motion.div>
  )
}