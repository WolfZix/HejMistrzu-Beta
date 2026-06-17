import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
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
  )
}