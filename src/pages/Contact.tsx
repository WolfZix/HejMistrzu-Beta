import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Clock, Car, Send, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import Facebook from "@/assets/facebook.webp";
import Instagram from "@/assets/instagram.webp";
import Discord from "@/assets/DiscordRound.webp";

const contactItems = [
  { icon: MapPin, label: "Adres", value: "Jana III Sobieskiego 93\n84-230 Rumia, Polska" },
  { icon: Mail, label: "Email", value: "biuro.hejmistrzu@gmail.com" },
  { icon: Phone, label: "Telefon", value: "+48 572 423 020" },
  { icon: Clock, label: "Godziny otwarcia", value: "Pon–Wt: 09:00–15:00\nCzw-Pt: 09:00–15:00\nSob: 12:00–19:00" },
  { icon: Car, label: "Parking", value: "Darmowy parking pod budynkiem." },
];

const socials = [
  { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/hej_mistrzu/profilecard/?igsh=cG9yNXgwbmI0cDM1", color: "text-pink-400", bg: "hover:bg-pink-500/10" },
  { icon: Facebook, name: "Facebook", href: "https://www.facebook.com/p/hej-mistrzu-centrum-gier-rpg-61567368993724/", color: "text-blue-400", bg: "hover:bg-blue-500/10" },
  { icon: Discord, name: "Discord", href: "https://discord.gg/KYB8Auuyu3", color: "text-indigo-400", bg: "hover:bg-indigo-500/10" },
];

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }),
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 pb-24">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Kontakt"
          title="Skontaktuj się z nami"
          subtitle="Masz pytanie? Napisz do nas lub odwiedź nasz lokal."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          {/* Info Cards */}
          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={fadeItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 shrink-0 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading text-sm font-semibold tracking-wide mb-1">{item.label}</h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <motion.div
              custom={5}
              variants={fadeItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-xl p-5"
            >
              <h3 className="font-heading text-sm font-semibold tracking-wide mb-4">Social media</h3>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:-translate-y-0.5 ${social.bg} group`}
                  >
                    <img src={social.icon} className="w-5 h-5" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors hidden sm:inline">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 border-primary/10 sticky top-28 self-start"
          >
            <h4 className="font-heading text-lg font-bold tracking-wide mb-6">Napisz do nas</h4>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-14"
              >
                <div className="p-4 rounded-full bg-green-500/10 w-fit mx-auto mb-5 border border-green-500/20">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h5 className="font-heading text-xl font-semibold mb-2">Wiadomość wysłana!</h5>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">Odpowiemy najszybciej jak to możliwe.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Imię</Label>
                    <Input required placeholder="Imię" className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Email</Label>
                    <Input required type="email" placeholder="przykład@email.com" className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Temat</Label>
                  <Input required placeholder="W czym możemy pomóc?" className="bg-card border-border focus:border-primary/50 h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Wiadomość</Label>
                  <Textarea required placeholder="Twoja wiadomość..." className="bg-card border-border focus:border-primary/50 min-h-[140px] rounded-xl" />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider py-6 text-base glow-gold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group">
                  <Send className="w-5 h-5 mr-2" />
                  Wyślij wiadomość
                </Button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden border border-border h-[400px] max-w-6xl mx-auto shadow-xl shadow-primary/5"
        >
          <iframe
            title="Lokalizacja Hej Mistrzu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.6960381160798!2d18.406671476666542!3d54.5564835726649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda5276f33d17b%3A0x862eb7e8d67e6c7b!2sHej%20Mistrzu!5e0!3m2!1spl!2spl!4v1781460947857!5m2!1spl!2spl"
            className="w-full h-full"
            style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) brightness(0.75)" }}
            loading="lazy"
          />
        </motion.div>
      </section>
    </div>
  );
}