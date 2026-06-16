import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  CalendarDays, Instagram, Facebook, Send, MessageSquare,
  CheckCircle2, ArrowRight
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import Calendar from "@/components/ui/callendar";

const bookingMethods = [
  {
    icon: Instagram, name: "Instagram", description: "Napisz do nas na Instagramie — odpowiadamy najszybciej!",
    cta: "Otwórz Instagram", href: "https://instagram.com/hejmistrzu", color: "from-pink-500/10 to-purple-500/10 border-pink-500/20",
    iconColor: "text-pink-400", iconBg: "bg-pink-500/10",
  },
  {
    icon: Facebook, name: "Facebook", description: "Wyślij wiadomość przez Messenger lub nasz fanpage.",
    cta: "Otwórz Facebook", href: "https://facebook.com/hejmistrzu", color: "from-blue-500/10 to-blue-600/10 border-blue-500/20",
    iconColor: "text-blue-400", iconBg: "bg-blue-500/10",
  },
  {
    icon: MessageSquare, name: "Discord", description: "Wejdź na nasz serwer Discord i napisz do nas przez czat lub wiadomość prywatną!",
    cta: "Otwórz Discord", href: "#form", color: "from-primary/10 to-secondary/10 border-primary/20",
    iconColor: "text-primary", iconBg: "bg-primary/10",
  },
];

export default function Reservations() {
  const [submitted, setSubmitted] = useState(false);
  const [month, setMonth] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  function handleCallendarOpen() {
  setMonth(new Date().getMonth() + 1)
  setIsOpen(!isOpen);
}

  return (
    <div className="pt-20 overflow-x-hidden">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center gap-5">
        <SectionHeader
          badge="Rezerwacje"
          title="Zarezerwuj swoją przygodę"
          subtitle="Wybierz wygodną metodę rezerwacji i zabookuj miejsce dla siebie i przyjaciół."
        />
        <button
        onClick={handleCallendarOpen}
        className="bg-primary px-5 py-2 rounded-full w-fit text-black font-heading font-medium mb-14">
          Sprawdź dostępne terminy
        </button>
        <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
            initial={{ opacity: 0, y: -20}}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -20}}
            transition={{ duration: 0.2}}
            className="flex justify-between gap-5 w-[90%]"
            >
              <Calendar month={month} setMonth={setMonth}/>
              <div className="w-[30rem] bg-primary/5 p-5 rounded-lg border-4 border-primary">
                <h1 className="text-primary">Notatki co tu zrobić</h1>
                <p>1. Wywalić jak będzie wyglądać źle</p>
                <p>2. Zadanie: pokazać najblizsze wydarzenie lub wydarzenia z wybranego dnia</p>
                <p>3. Layout:</p>
                <p>grafika</p>
                <p>Dodatkowe info</p>
                <p>Jakies jeszcze info</p>
                <p>Moze jakis przycisk albo dwa</p><br/>
                <h1 className="text-primary text-xl">! WAŻNE !</h1>
                <p>jeszcze większość nie działa ale mniej więcej tak to bedzie wyglądać</p>
              </div>
            </motion.div>
            </>
        )}
        </AnimatePresence>
        
        {/* Booking Methods */}
        <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-6 mx-auto mt-[5rem]">
          {bookingMethods.map((method, i) => (
            <motion.a
              key={method.name}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`glass w-full rounded-2xl p-4 text-center transition-all duration-500 hover:-translate-y-1.5 border bg-gradient-to-br ${method.color} group flex flex-col`}
            >
              <div className={`p-3.5 rounded-xl ${method.iconBg} w-fit mx-auto mb-4 border border-white/5`}>
                <method.icon className={`w-6 h-6 ${method.iconColor}`} />
              </div>
              <h3 className="font-heading text-base font-semibold tracking-wide mb-2">{method.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{method.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                {method.cta}
                <Send className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          id="form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 sm:p-10 max-w-2xl mt-[5rem] mx-auto border-primary/10"
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
                  <Label className="text-sm font-medium">Imię i nazwisko</Label>
                  <Input required placeholder="Jan Kowalski" className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Email</Label>
                  <Input required type="email" placeholder="jan@email.com" className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Telefon</Label>
                  <Input placeholder="+48 123 456 789" className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Rodzaj rezerwacji</Label>
                  <Select>
                    <SelectTrigger className="bg-card border-border h-11 rounded-xl"><SelectValue placeholder="Wybierz..." /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gaming">Strefa gier</SelectItem>
                      <SelectItem value="rpg">Pokój RPG</SelectItem>
                      <SelectItem value="tournament">Turniej</SelectItem>
                      <SelectItem value="event">Wydarzenie prywatne</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Data</Label>
                  <Input type="date" className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Liczba osób</Label>
                  <Select>
                    <SelectTrigger className="bg-card border-border h-11 rounded-xl"><SelectValue placeholder="Wybierz..." /></SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n} {n === 1 ? "osoba" : n < 5 ? "osoby" : "osób"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Dodatkowe informacje</Label>
                <Textarea placeholder="Napisz, jeśli masz specjalne życzenia..." className="bg-card border-border focus:border-primary/50 min-h-[100px] rounded-xl" />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider py-6 text-base glow-gold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group">
                <CalendarDays className="w-5 h-5 mr-2" />
                Wyślij rezerwację
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
}