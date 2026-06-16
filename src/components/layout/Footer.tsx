import { Link } from "react-router-dom";
import { MapPin, Clock, Mail, ArrowUpRight, Heart } from "lucide-react";
import Logo from "@/assets/Logo.png";
import Instagram from "@/assets/instagram.png";
import Facebook from "@/assets/facebook.png";
import Discord from "@/assets/discord.png";
import Phone from "@/assets/phone.png";

const footerLinks = [
  { name: "Wydarzenia", path: "/wydarzenia" },
  { name: "Sklep", path: "/sklep" },
  { name: "Strefa gier", path: "/strefa-gier" },
  { name: "Cennik", path: "/cennik" },
  { name: "Rezerwacje", path: "/rezerwacje" },
  { name: "O nas", path: "/o-nas" },
  { name: "Kontakt", path: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <img src={Logo} className="w-16 h-16" />
              <span className="font-heading text-lg tracking-wider">
                Hej <span className="text-primary">Mistrzu</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Planszówki, RPG, TCG i więcej — Twoja przystań dla fanów fantastyki w Rumi.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Phone, href: "tel:+48508302733", label: "+48 508 302 733"},
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Discord, href: "https://discord.com", label: "Discord" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded-lg bg-transparent hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
                  aria-label={social.label}
                >
                  <img src={social.icon} className="object-cover w-12 h-12" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-heading text-sm tracking-wider text-primary mb-5">Nawigacja</h4>
            <div className="space-y-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-0.5 inline-flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-primary/50" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-sm tracking-wider text-primary mb-5">Godziny otwarcia</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground/80 font-medium">Poniedziałek – Piątek</p>
                  <p>14:00 – 22:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground/80 font-medium">Sobota</p>
                  <p>10:00 – 22:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground/80 font-medium">Niedziela</p>
                  <p>10:00 – 20:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm tracking-wider text-primary mb-5">Kontakt</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" />
                <span>Jana III Sobieskiego 93<br />84-230 Rumia</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary/70 shrink-0" />
                <span>kontakt@hejmistrzu.pl</span>
              </div>
              <Link to="/rezerwacje" className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-medium transition-colors mt-2 group">
                Zarezerwuj stolik
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Hej Mistrzu. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
            Stworzone z <Heart className="w-3 h-3 text-primary fill-primary" /> dla społeczności graczy
          </p>
        </div>
      </div>
    </footer>
  );
}