import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Instagram from "@/assets/instagram.png";
import Facebook from "@/assets/facebook.png";
import Discord from "@/assets/DiscordRound.png";
import Logo from "@/assets/Logo.png";
import Phone from "@/assets/phone.png";
import PhoneDialog from "@/components/shared/PhoneDialog";

const navLinks = [
  { name: "Strona główna", path: "/" },
  { name: "Wydarzenia", path: "/wydarzenia" },
  { name: "Sklep", path: "/sklep" },
  { name: "Strefa gier", path: "/strefa-gier" },
  { name: "Cennik", path: "/cennik" },
  { name: "Rezerwacje", path: "/rezerwacje" },
  { name: "O nas", path: "/o-nas" },
  { name: "kontakt", path: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-2xl border-b border-primary/10 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-1 h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group shrink-0">
            <img src={Logo} className="w-8 h-8" />
            <span className="font-heading lg:text-lg tracking-wider text-foreground hidden sm:block">
              Hej <span className="text-primary">Mistrzu</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1 ml-auto">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-nowrap px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-1 shrink-0 mr-auto">
              <button
                      onClick={() => setIsPhoneDialogOpen(true)}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/30 flex gap-2"
                      >
                        <img src={Phone} className="w-6 h-6"/>
                      </button>
                        <PhoneDialog isOpen={isPhoneDialogOpen} onOpenChange={setIsPhoneDialogOpen} />
              <a
                href="https://www.instagram.com/hej_mistrzu/profilecard/?igsh=cG9yNXgwbmI0cDM1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/30 flex gap-2"
              >
                <img src={Instagram} className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/p/hej-mistrzu-centrum-gier-rpg-61567368993724/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/30 flex gap-2"
              >
                <img src={Facebook} className="w-6 h-6" />
              </a>
              <a
                href="https://discord.com/invite/KYB8Auuyu3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/30 flex gap-2"
              >
                <img src={Discord} className="w-6 h-6" />
              </a>
            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/30"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center shadow-md"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/30"
            >
              <User className="w-6 h-6" />
            </button>
            </div>

            <Link to="/rezerwacje">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wide text-sm hidden sm:flex transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Zarezerwuj
              </Button>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-foreground rounded-lg hover:bg-muted/30 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
        </div>
      </div>
    </nav>
    
    {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="xl:hidden fixed z-40 pt-16 top-0 bottom-0 right-0 w-full h-full lg:w-[50%] bg-background/95 backdrop-blur-2xl border border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/rezerwacje" className="block pt-2">
                <Button className="w-full bg-primary text-primary-foreground font-heading tracking-wide glow-gold">
                  Zarezerwuj stolik
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </>
  );
}