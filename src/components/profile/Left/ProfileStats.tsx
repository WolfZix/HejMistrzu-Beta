import { CalendarDays, ShoppingBag, StarIcon, Ticket } from "lucide-react";

type ProfileStatsProps = {
  events: number;
  orders: number;
  reservations: number;
};

const stats = [
  {
    label: "Eventy",
    value: 17,
    icon: CalendarDays,
  },
  {
    label: "Zamówienia",
    value: 3,
    icon: ShoppingBag,
  },
  {
    label: "Rezerwacje",
    value: 2,
    icon: Ticket,
  },
  {
    label: "Poziom Battlepass",
    value: 15,
    icon: StarIcon,
  },
];

export default function ProfileStats({
  events,
  orders,
  reservations,
}: ProfileStatsProps) {

  stats[0].value = events;
  stats[1].value = orders;
  stats[2].value = reservations;

  return (
    <div className="space-y-5 text-sm">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div className="flex justify-between">
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