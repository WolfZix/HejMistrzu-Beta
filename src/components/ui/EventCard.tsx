import type { Event } from "@/types/event";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { getCategoryStyles } from "@/data/events";

type EventCardProps = {
  event: Event;
  onClick?: () => void;
  isPreview?: boolean;
  imageSrc?: string;
}

export default function EventCard({event, onClick, imageSrc}: EventCardProps) {
  const eventDateTime = new Date(`${event.date}T${event.startTime}`);
  const isPastEvent = eventDateTime < new Date();
  const isFull = event.freeSlots <= 0;
  const categoryStyles = getCategoryStyles(isPastEvent, isFull);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col min-h-[460px] w-full max-w-[400px] ${(isPastEvent || isFull) ? "text-muted-foreground" : "glass-hover"}`}
    >
      <div className="aspect-[16/9] overflow-hidden relative shrink-0">
        <img
        src={imageSrc ?? `http://localhost:3000/uploads/${event.image || "EventPlaceholder.webp"}`}
        onError={(e) => {
          e.currentTarget.src = "http://localhost:3000/uploads/EventPlaceholder.webp";
        }}
        alt={event.title}
        loading="lazy"
        className={`w-full h-full object-cover transition-transform duration-700
          ${(isPastEvent || isFull) ? "saturate-0 group-hover:scale-100 " : "saturate-100 group-hover:scale-105 "}`}
        />
        <div className="absolute -inset-1 bg-gradient-to-t from-card/80 to-transparent" />
        <div className={`absolute top-4 left-4 px-2 py-0.5 rounded-full select-none ${categoryStyles[event.category as keyof typeof categoryStyles]} border text-xs font-medium`}>
          {event.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className={`font-heading text-lg font-semibold tracking-wide mb-3 transition-colors ${(isPastEvent || isFull) ? "" : "group-hover:text-primary"}`}>{event.title}</h3>
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Calendar className={`w-3.5 h-3.5 shrink-0 ${(isPastEvent || isFull) ? "text-muted-foreground" : "text-primary/70"}`} />
            <span>{new Date(event.date).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Clock className={`w-3.5 h-3.5 shrink-0 ${(isPastEvent || isFull) ? "text-muted-foreground" : "text-primary/70"}`} />
            <span>{event.startTime.slice(0,5)}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <MapPin className={`w-3.5 h-3.5 shrink-0 ${(isPastEvent || isFull) ? "text-muted-foreground" : "text-primary/70"}`} />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1 line-clamp-2 whitespace-pre-line">{event.description}</p>
        <button
        disabled={(isPastEvent || isFull)}
        onClick={onClick}
        className={`w-full border py-2.5 flex justify-center rounded-lg font-heading tracking-wider text-xs transition-all duration-300
          ${(isPastEvent || isFull)  
          ? "bg-muted-foreground/30 text-muted-foreground hover:bg-muted-foreground/30 border border-foreground/20 cursor-not-allowed" 
          : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 cursor-pointer"}`}>
          {isPastEvent ? "Wydarzenie dobiegło końca" : isFull ? "Brak dostępnych miejsc" : "Zapisz się"}
          {!isPastEvent && ( <ArrowRight className="w-3.5 h-3.5 ml-1.5" />)}
        </button>
      </div>
    </motion.div>
  )
}
