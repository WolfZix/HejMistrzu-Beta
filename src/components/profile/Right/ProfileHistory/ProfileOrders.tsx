import { Download, ShoppingBag } from "lucide-react";

type ProfileOrdersProps = {
  orders: {
    id: number;
    title: string;
    status: string;
    date: string;
  }[];
  buttonClass: string;
};

export default function ProfileOrders({
  orders,
  buttonClass,
}: ProfileOrdersProps) {
  return (
    <div className="flex h-[350px] flex-col rounded-lg glass py-4 mr-5">
      <div className="border-b">
        <div className="flex items-center gap-4 border-b px-4 pb-4">
          <ShoppingBag size={24} className="text-primary shrink-0" />

          <h1 className="font-heading text-2xl">
            Zamówienia
          </h1>
        </div>

        <div className="flex flex-col gap-2 py-2">
          {orders.map((order) => (
            <div
              key={order.id}
              className="
                grid
                grid-cols-[1fr_auto]
                gap-x-3
                gap-y-1
                px-4
                py-2
                sm:grid-cols-[20%_45%_35%]
                sm:items-center
              "
            >
              <span className="text-left whitespace-nowrap">
                {order.date}
              </span>

              <span className="text-right sm:order-3 sm:text-right">
                {order.status}
              </span>

              <span className="col-span-2 text-left sm:col-span-1 sm:order-2 sm:text-center">
                {order.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className={buttonClass}>
        <Download size={16} className="text-primary shrink-0" />
        Pobierz pełną historię
      </button>
    </div>
  );
}