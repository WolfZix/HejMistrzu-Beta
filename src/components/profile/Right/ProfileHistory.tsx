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

export default function ProfileHistory() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const downloadButtonClass = `
    mt-auto
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
    gap-3`;

    const displayedOrders = orders.slice(0, 3).map((order) => ({
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
    const displayedReservations: any = []; // Placeholder for reservations, implement as needed

    useEffect(() => {
      async function fetchOrders() {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/order/my`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error("Nie udało się pobrać zamówień");
          }

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
  return (
    <div className="py-8">
      <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)]">
        <ProfileOrders orders={displayedOrders} buttonClass={downloadButtonClass} isLoading={ordersLoading} />
        <ProfileReservations reservations={displayedReservations} buttonClass={downloadButtonClass} />
      </div>
    </div>
  );
}