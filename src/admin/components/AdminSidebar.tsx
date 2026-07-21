import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Package,
  Ticket,
  ArrowLeft,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Użytkownicy",
    path: "/admin/uzytkownicy",
    icon: Users,
  },
  {
    name: "Rezerwacje",
    path: "/admin/rezerwacje",
    icon: CalendarDays,
  },
  {
    name: "Eventy",
    path: "/admin/eventy",
    icon: Ticket,
  },
  {
    name: "Produkty",
    path: "/admin/produkty",
    icon: Package,
  },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 border-r border-border bg-card/40 backdrop-blur-xl">
      <div className="p-6 border-b border-border">
        <h1 className="font-heading text-2xl text-gold-gradient">
          Hej Mistrzu
        </h1>

        <p className="text-sm text-muted-foreground mt-1">
          Panel administracyjny
        </p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/admin"}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3
                    rounded-xl px-4 py-3
                    transition-all duration-200
                    border
                    ${
                      isActive
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30 border-transparent"
                    }
                  `
                  }
                >
                  <Icon size={18} />

                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-border p-4">
        <NavLink
          to="/profil/Admin"
          className="
            flex items-center gap-3
            rounded-xl px-4 py-3
            text-muted-foreground
            hover:bg-muted/30
            hover:text-foreground
            border
            border-transparent
            transition-all
          "
        >
          <ArrowLeft size={18} />
          Wróć do profilu
        </NavLink>
      </div>
    </aside>
  );
}