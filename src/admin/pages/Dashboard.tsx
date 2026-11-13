import { useState, useEffect } from "react";
import DashboardSection from "../components/Dashboard/DashboardSection";
import InventorySection from "../components/Dashboard/InventorySection";
import type { User } from "@/types/user";
import type { StoreProduct } from "@/types/store";
import type { Event as EventType} from "@/types/event";

export default function Dashboard() {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const [events, setEvents] = useState<EventType[]>([]);
  const [shopStats, setShopStats] = useState({
    ordersThisMonth: 0,
    ordersThisYear: 0,
    topProduct: "Brak danych",
    ranking: [] as { name: string; quantity: number }[],
  });
  const [battlepassStats, setBattlepassStats] = useState({
    highestLevel: 0,
    averageLevel: 0,
    ranking: [] as { name: string; level: number }[],
  });
  const [reservationStats, setReservationStats] = useState({
    reservationsThisMonth: 0,
    reservationsThisYear: 0,
    activeReservations: 0,
  });

  const SECTION_USERS = "Użytkownicy";
  const SECTION_EVENTS = "Eventy";
  const SECTION_RESERVATIONS = "Rezerwacje";
  const SECTION_SHOP = "Sklep";
  const SECTION_BATTLEPASS = "Battlepass";
  const SECTION_INVENTORY = "Magazyn"

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((data: StoreProduct[]) => setProducts(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_API_URL}/events`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.json())
    .then((data: EventType[]) => setEvents(data))
    .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_API_URL}/dashboard/shop`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (!res.ok) throw new Error("Nie udało się pobrać statystyk sklepu")
      return res.json();
    })
    .then((data) => setShopStats(data))
    .catch((error) => console.error("Błąd statystyk sklepu:", error));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_API_URL}/dashboard/battlepass`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (!res.ok) throw new Error("Nie udało się pobrać statystyk Battle Passa")
      return res.json();
    })
    .then((data) => setBattlepassStats(data))
    .catch((error) =>
      console.error("Błąd statystyk Battle Passa:", error)
    );
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_API_URL}/dashboard/reservations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (!res.ok) throw new Error("Nie udało się pobrać statystyk rezerwacji")
      return res.json();
    })
    .then((data) => setReservationStats(data))
    .catch((error) => console.error("Błąd statystyk rezerwacji:", error));
  }, []);

  function toggleSection(section: string) {
    if (openSections.includes(section)) {
      setOpenSections(
        openSections.filter((s) => s !== section)
      );
    } else {
      setOpenSections([
        ...openSections,
        section,
      ]);
    }
  }

  const now = new Date();
  const usersThisMonth = users.filter((user) => {
    const created = new Date(user.createdAt);
    return (
      created.getMonth() === now.getMonth() &&
      created.getFullYear() === now.getFullYear()
    );
  }).length;

  const eventsThisMonth = events.filter((event) => {
    const date = new Date(event.date);

    return (
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  }).length;

  const eventsThisYear = events.filter((event) => {
    return new Date(event.date).getFullYear() === now.getFullYear();
  }).length;

  const topEvents = [...events]
    .map((event) => ({
      name: event.title,
      value: event.maxSlots - event.freeSlots,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const adminCount = users.filter((user) => user.role === "admin").length
  const outOfStock = products.filter((product) => product.stock === 0);
  const lowStock = products.filter((product) => product.stock > 0 && product.stock <= 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl">
          Dashboard
        </h1>

        <p className="text-muted-foreground mt-2">
          Przegląd najważniejszych statystyk.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="flex flex-col gap-6">
          <DashboardSection
            title="Użytkownicy"
            isOpen={openSections.includes(SECTION_USERS)}
            onToggle={() => toggleSection(SECTION_USERS)}
            stats={[
              {
                label: "Nowi w tym miesiącu",
                value: usersThisMonth,
              },
              {
                label: "Administratorzy",
                value: adminCount,
              },
              {
                label: "Łącznie",
                value: users.length,
              },
            ]}
          />
          <DashboardSection
            title="Battlepass"
            isOpen={openSections.includes(SECTION_BATTLEPASS)}
            onToggle={() => toggleSection(SECTION_BATTLEPASS)}
            countLabel="Poziom"
            stats={[
              {
                label: "Najwyższy poziom",
                value: battlepassStats.highestLevel,
              },
              {
                label: "Średni poziom",
                value: battlepassStats.averageLevel,
              },
            ]}
            ranking={battlepassStats.ranking.map((player) => ({
              name: player.name,
              value: player.level,
            }))}
          />
        <DashboardSection
            title="Eventy"
            isOpen={openSections.includes(SECTION_EVENTS)}
            onToggle={() => toggleSection(SECTION_EVENTS)}
            countLabel="Wykupione wejściówki"
            stats={[
            {
              label: "W tym miesiącu",
              value: eventsThisMonth,
            },
            {
              label: "W tym roku",
              value: eventsThisYear,
            },
            {
              label: "Top wydarzenie",
              value: topEvents[0]?.name ?? "Brak danych",
            },
          ]}
          ranking={topEvents}
          />
        </div>
        <div className="flex flex-col gap-6">
          <DashboardSection
            title="Rezerwacje"
            isOpen={openSections.includes(SECTION_RESERVATIONS)}
            onToggle={() => toggleSection(SECTION_RESERVATIONS)}
            stats={[
              {
                label: "W tym miesiącu",
                value: reservationStats.reservationsThisMonth,
              },
              {
                label: "W tym roku",
                value: reservationStats.reservationsThisYear,
              },
              {
                label: "Aktywne",
                value: reservationStats.activeReservations,
              },
            ]}
          />

          <DashboardSection
            title="Sklep"
            isOpen={openSections.includes(SECTION_SHOP)}
            onToggle={() => toggleSection(SECTION_SHOP)}
            countLabel="Ilość zamówień"
            stats={[
              {
                label: "Zamówienia w tym miesiącu",
                value: shopStats.ordersThisMonth,
              },
              {
                label: "Zamówienia w tym roku",
                value: shopStats.ordersThisYear,
              },
              {
                label: "Top produkt",
                value: shopStats.topProduct,
              },
            ]}
            ranking={shopStats.ranking.map((product) => ({
              name: product.name,
              value: product.quantity,
            }))}
          />
          <InventorySection
            isOpen={openSections.includes(SECTION_INVENTORY)}
            onToggle={() => toggleSection(SECTION_INVENTORY)}
            outOfStock={outOfStock.map(product => ({ name: product.name }))}
            lowStock={lowStock.map(product => ({
              name: product.name,
              quantity: product.stock,
            }))}
          />
        </div>
      </div>
    </div>
  );
}