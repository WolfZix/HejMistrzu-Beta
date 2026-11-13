import { CalendarDays, ShoppingBag, StarIcon, Ticket } from "lucide-react";
import { useState, useEffect } from 'react';

export default function ProfileStats() {
  const stats = [
    {
      label: "Odwiedzone wydarzenia",
      value: 17,
      icon: CalendarDays,
    },
    {
      label: "Zamówienia",
      value: 3,
      icon: ShoppingBag,
    },
    {
      label: "Złożone rezerwacje",
      value: 2,
      icon: Ticket,
    },
    {
      label: "Poziom Battlepass",
      value: 15,
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