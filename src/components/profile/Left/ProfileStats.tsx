
import { CalendarDays, ShoppingBag, StarIcon, Ticket } from "lucide-react";
import { useEffect, useState } from "react";

interface ProfileStatsData {
  events: number;
  orders: number;
  reservations: number;
  battlepass_points: number;
}

export default function ProfileStats() {
  const [stats, setStats] = useState<ProfileStatsData>({
    events: 0,
    orders: 0,
    reservations: 0,
    battlepass_points: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/profile/stats`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Nie udało się pobrać statystyk")
        const data = await response.json();
        setStats({
          events: Number(data.events),
          orders: Number(data.orders),
          reservations: Number(data.reservations),
          battlepass_points: Number(data.battlepass_points),
        });
      } catch (error) { console.error("Błąd pobierania statystyk:", error);
      } finally { setLoading(false) }
    };
    fetchStats();
  }, []);

  const statItems = [
    {
      label: "Odwiedzone wydarzenia",
      value: stats.events,
      icon: CalendarDays,
    },
    {
      label: "Zamówienia",
      value: stats.orders,
      icon: ShoppingBag,
    },
    {
      label: "Złożone rezerwacje",
      value: stats.reservations,
      icon: Ticket,
    },
    {
      label: "Punkty Battle Passa",
      value: Math.floor(stats.battlepass_points / 10),
      icon: StarIcon,
    },
  ];

  return (
    <div className="space-y-5 text-sm">
      {statItems.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="flex justify-between">
            <span className="flex gap-2">
              <Icon size={18} className="text-primary/80" />
              <p className="text-muted-foreground">{stat.label}</p>
            </span>
            <p className="font-medium"> {loading ? "..." : stat.value} </p>
          </div>
        );
      })}
    </div>
  );
}
