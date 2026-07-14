import { CalendarDays, ShoppingBag, StarIcon, Ticket } from "lucide-react";

type ProfileStatsProps = {
  events: number;
  reservations: number;
  orders: number;
  battlepassLevel: number;
};

export default function ProfileStats({events, reservations, orders, battlepassLevel}: ProfileStatsProps) {
  const stats = [
    {
      label: "Odwiedzone wydarzenia",
      value: events,
      icon: CalendarDays,
    },
    {
      label: "Zamówienia",
      value: orders,
      icon: ShoppingBag,
    },
    {
      label: "Złożone rezerwacje",
      value: reservations,
      icon: Ticket,
    },
    {
      label: "Poziom Battlepass",
      value: battlepassLevel,
      icon: StarIcon,
    },
  ];
  return (
    <div className="space-y-5 text-sm">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
          key={stat.label}
          className="flex justify-between">
            <span className="flex gap-2">
              <Icon size={18} className="text-primary/80" />
              <p className="text-muted-foreground"> {stat.label}</p>
            </span>
            <p className="font-medium"> {stat.value} </p>
          </div>
        )
      })}
    </div>
  );
}