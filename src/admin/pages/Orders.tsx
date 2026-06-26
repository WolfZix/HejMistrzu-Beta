import { useState, useEffect } from "react";
import { Search, Trash2, RefreshCcw, Eye } from "lucide-react";
import AdminTable from "../components/AdminTable";
import { Order } from "@/types/order";
import PageLoader from "@/pages/PageLoader";

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const ORDERS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    orders.length / ORDERS_PER_PAGE
  );

  const currentOrders = orders.slice(
    (currentPage - 1) * ORDERS_PER_PAGE,
    currentPage * ORDERS_PER_PAGE
  );

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/orders`)
  //   .then((res) => res.json())
  //   .then((data: Order[]) => {
  //     setOrders(data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   })
  // }, [])

  const mockOrders: Order[] = [
  {
    id: 1,
    user: {
      id: 1,
      username: "WolfeZix",
      email: "wolfezix@gmail.com",
    },
    items: [
      {
        productId: 1,
        productName: "Booster Box",
        quantity: 1,
        price: 499,
      },
      {
        productId: 5,
        productName: "Starter Deck",
        quantity: 2,
        price: 79,
      },
    ],
    totalPrice: 657,
    status: "PENDING",
    createdAt: "2026-06-25",
  },

  {
    id: 2,
    user: {
      id: 2,
      username: "Patryk",
      email: "patryk@gmail.com",
    },
    items: [
      {
        productId: 8,
        productName: "Playmat",
        quantity: 1,
        price: 119,
      },
    ],
    totalPrice: 119,
    status: "READY",
    createdAt: "2026-06-24",
  },
];

  function loadOrders() {
    setOrders([...mockOrders].sort( (a,b) => b.id - a.id ));
  }

  useEffect(() => {
    loadOrders();
  }, [])

  function getOrderStatusClass(status: string) {
    switch (status) {
      case "PENDING":
        return "bg-yellow-500/10 text-yellow-400";
      case "PAID":
        return "bg-blue-500/10 text-blue-400";
      case "READY":
        return "bg-green-500/10 text-green-400";
      case "COMPLETED":
        return "bg-emerald-500/10 text-emerald-400";
      case "CANCELED":
        return "bg-red-500/10 text-red-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  }

  function getOrderStatusLabel(status: Order["status"]) {
    switch (status) {
      case "PENDING":
        return "Oczekuje";

      case "PAID":
        return "Opłacone";

      case "READY":
        return "Gotowe";

      case "COMPLETED":
        return "Zrealizowane";

      case "CANCELED":
        return "Anulowane";
    }
  }

  return (
    <div className="space-y-6 min-h-[45rem] relative">
      <div>
        <h1 className="font-heading text-3xl">
          Zamówienia
        </h1>

        <p className="text-muted-foreground mt-1">
          Zarządzaj zamówieniami sklepu.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1">
          <Search
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-muted-foreground
              z-10
            "
          />

          <input
            placeholder="Szukaj zamówienia..."
            className="
            w-full
            glass
            border
            border-border
            rounded-lg
            py-2
            pl-10
            pr-4
            outline-none
            focus:border-primary/50
            text-primary
            "
          />
        </div>

        <button
          onClick={loadOrders}
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-lg
            bg-primary/90
            w-fit
            text-black/90
            font-heading
            font-medium
            hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]
            hover:bg-primary
            hover:text-black
            transition-all duration-200
          "
        >
          <RefreshCcw size={16} />
          Odśwież
        </button>
      </div>
      <div className="h-[34rem] flex flex-col justify-between">
        <AdminTable>
          <thead>
            <tr className="border-b border-border text-primary text-center">
              <th className="p-4">ID</th>
              <th className="p-4">Email</th>
              <th className="p-4">Produkty</th>
              <th className="p-4">Wartość</th>
              <th className="p-4">Status</th>
              <th className="p-4">Data</th>
              <th className="p-4">Akcje</th>
            </tr>
          </thead>

          <tbody>
            {currentOrders.map((order) => (
              <tr
                key={order.id}
                className="
                  border-b
                  border-border/50
                  hover:bg-muted/20
                  text-center
                "
              >
                <td className="p-4"> {order.id} </td>
                <td className="p-4"> {order.user?.email} </td>
                <td className="p-4"> {order.items?.length} szt. </td>
                <td className="p-4"> {order.totalPrice} zł </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${getOrderStatusClass(order.status)}`}>
                    {getOrderStatusLabel(order.status)}
                  </span>
                </td>

                <td className="p-4"> {new Date(order.createdAt).toLocaleDateString("pl-PL")}</td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                      <button
                        className="
                          p-2
                          rounded-lg
                          hover:bg-muted
                          border border-transparent
                          hover:border-muted-foreground/30
                        "
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        className="
                          p-2
                          rounded-lg
                          hover:bg-destructive/10
                          hover:text-destructive
                          border border-transparent
                          hover:border-destructive/30
                        "
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </AdminTable>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Strona {currentPage} z {totalPages}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.max(prev - 1, 1)
                )
              }
              disabled={currentPage === 1}
              className="
                px-3 py-2
                rounded-lg
                border border-border
                hover:bg-primary/10
                hover:border-primary/30
                hover:text-primary
                disabled:opacity-50
                disabled:hover:bg-transparent
                disabled:hover:border-border
                disabled:hover:text-foreground
                transition-all duration-200
              "
            >
              Poprzednia
            </button>

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages}
              className="
                px-3 py-2
                rounded-lg
                border border-border
                hover:bg-primary/10
                hover:border-primary/30
                hover:text-primary
                disabled:opacity-50
                disabled:hover:bg-transparent
                disabled:hover:border-border
                disabled:hover:text-foreground
                transition-all duration-200
              "
            >
              Następna
            </button>
          </div>
        </div>
      </div>
        { orders.length === 0 && (
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <PageLoader /> 
          </div>
        )}
    </div>
  );
}