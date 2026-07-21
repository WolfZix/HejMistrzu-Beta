import { Calendar, Pencil, Shield, ShoppingBag, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { text } from "stream/consumers";

type ProfileButtonsProps = {
  role: string;
}

const buttons = [
  {
    icon: Ticket,
    title: "Złóż rezerwacje",
    to: "/rezerwacje",
  },
  {
    icon: ShoppingBag,
    title: "Przejdź do sklepu",
    to: "/sklep",
  },
  {
    icon: Calendar,
    title: "Zobacz wydarzenia",
    to: "/wydarzenia",
  },
];

const buttonClass = `
      text-left
      border
      border-border
      hover:border-primary/30
      px-4
      py-2
      rounded-lg
      items-center
      bg-transparent
      shadow-sm
      hover:bg-primary/5 
      flex gap-4
      transition-all
      duration-300`;

export default function ProfileButtons({ role }: ProfileButtonsProps) {
  return (
    <div className="flex flex-col gap-2 space-y-4">
      {role === "admin" && (
        <Link
          to="/admin"
          className="
            text-left
            border
            border-red-500/20
            hover:border-red-500
            px-4
            py-2
            rounded-lg
            items-center
            bg-red-500/10
            text-foreground
            hover:text-white
            shadow-sm
            hover:bg-red-500/20 
            flex gap-4
            transition-all
            duration-300
          "
        >
          <Shield size={16} className="text-red-500" />
          <span>Panel administratora</span>
        </Link>
      )}
      <button
      className={buttonClass}
      onClick={() => {
        document.getElementById("edit-profile")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
      >
        <Pencil size={16} className="text-primary" />
        <span>Edytuj profil</span>
      </button>
      <hr></hr>
      {buttons.map((button) => {
        const Icon = button.icon;
        return (
            <Link
            to={button.to}
            key={button.title}
            className={buttonClass}>
              <Icon size={16} className="text-primary" />
              <span>{button.title}</span>
            </Link>
        )
      })}
      <hr></hr>
    </div>
  )
}