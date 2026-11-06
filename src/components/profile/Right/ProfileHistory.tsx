import ProfileOrders from "./ProfileHistory/ProfileOrders";
import ProfileReservations from "./ProfileHistory/ProfileReservations";
import { useState, useEffect } from "react";

type Order = {
  id: number;
  created_at: string;
  status: string;
  total: string;
  items: {
    product_name: string;
    quantity: number;
    price: string;
  }[];
};

type Reservation = {
  id: number;
  reservation_date: string;
  reservation_time: string;
  duration: number | null;
  people_count: number | null;
  status: string;
};

export default function ProfileHistory() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [reservationsLoading, setReservationsLoading] = useState(true);

  const downloadButtonClass = `
    mt-3
    mx-4
    w-fit
    rounded-lg
    border
    border-transparent
    px-2
    py-2
    transition-all
    duration-300
    hover:border-primary/30
    hover:bg-primary/5
    flex
    items-center
    gap-3
  `;

  const displayedOrders = orders.slice(0, 5).map((order) => ({
    id: order.id,
    title: order.items
      .map((item) =>
        item.quantity > 1
          ? `${item.product_name} x${item.quantity}`
          : item.product_name
      )
      .join(", "),
    status: order.status,
    date: new Date(order.created_at).toLocaleDateString("pl-PL"),
  }));

  const displayedReservations = reservations.slice(0, 5).map((reservation) => ({
    id: reservation.id,
    title:
      reservation.duration === null
        ? "Gralnia"
        : `Sesja RPG ${
            reservation.duration === 0
              ? "Bez limitu"
              : `${reservation.duration}h`
          }`,
    time: reservation.reservation_time.slice(0, 5),
    date: reservation.reservation_date
      .split("T")[0]
      .split("-")
      .reverse()
      .join("."),
  }));

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/order/myOrders`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (!response.ok) { throw new Error("Nie udało się pobrać zamówień") }
        const data = await response.json();
        setOrders(data.orders);
      } catch (error) {
        console.error("Błąd pobierania zamówień:", error);
      } finally {
        setOrdersLoading(false);
      }
    }
    fetchOrders();
  }, []);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/reservations/myReservations`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (!response.ok) { throw new Error("Nie udało się pobrać rezerwacji") }
        const data = await response.json();
        setReservations(data.reservations);
      } catch (error) {
        console.error("Błąd pobierania rezerwacji:", error);
      } finally {
        setReservationsLoading(false);
      }
    }
    fetchReservations();
  }, []);

  return (
    <div className="py-8">
      <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)]">
        <ProfileOrders orders={displayedOrders} buttonClass={downloadButtonClass} isLoading={ordersLoading} />
        <ProfileReservations reservations={displayedReservations} buttonClass={downloadButtonClass} isLoading={reservationsLoading} />
      </div>
    </div>
  );
}