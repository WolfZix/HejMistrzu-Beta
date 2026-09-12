import { Calendar, Pencil, Shield, ShoppingBag, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

type ProfileButtonsProps = {
  role: string;
};

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
  flex
  gap-3
  transition-all
  duration-300
  min-w-0
`;

export default function ProfileButtons({ role }: ProfileButtonsProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-col">
        {role === "admin" && (
          <Link
            to="/admin"
            className="
              col-span-2
              lg:col-span-1
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
              flex
              gap-3
              transition-all
              duration-300
              min-w-0
            "
          >
            <Shield size={16} className="text-red-500 shrink-0" />
            <span className="truncate">Panel administratora</span>
          </Link>
        )}

        <button
          className={buttonClass}
          onClick={() => {
            document
              .getElementById("edit-profile")
              ?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
          }}
        >
          <Pencil size={16} className="text-primary shrink-0" />
          <span className="truncate">Edytuj profil</span>
        </button>

        {buttons.map((button, index) => {
          const Icon = button.icon;
          return (
            <Link
              to={button.to}
              key={button.title}
              className={`
                ${buttonClass}
                ${index === buttons.length - 1 ? "col-span-2 lg:col-span-1" : ""}
              `}
            >
              <Icon size={16} className="text-primary shrink-0" />
              <span className="truncate">{button.title}</span>
            </Link>
          );
        })}
      </div>

      <hr />
    </div>
  );
}