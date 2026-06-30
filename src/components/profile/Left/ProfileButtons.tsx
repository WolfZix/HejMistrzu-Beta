import { Calendar, Pencil, Shield, ShoppingBag, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

type ProfileButtonsProps = {
  role: string;
}

const buttons = [
  {
    icon: Calendar,
    title: "Zobacz wydarzenia",
  },
  {
    icon: ShoppingBag,
    title: "Przejdź do sklepu",
  },
  {
    icon: Ticket,
    title: "Złóż rezerwacje",
  },
  {
    icon: Pencil,
    title: "Edytuj profil",
  },
];

export default function ProfileButtons({ role }: ProfileButtonsProps) {
  return (
    <div className="flex flex-col gap-2 space-y-4">
      {buttons.map((button) => {
        const Icon = button.icon;
        return (
            <button
            className="
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
            duration-300
            ">
              <Icon size={16} className="text-primary" />
              <span>{button.title}</span>
            </button>
        )
      })}
    
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
    </div>
  )
}