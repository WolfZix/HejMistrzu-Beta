import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageSquare, Send } from 'lucide-react';

const Methods = [
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

export default function BookingMethods() {
  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-6 mx-auto mt-[5rem]">
          {Methods.map((method, i) => (
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
  )
}