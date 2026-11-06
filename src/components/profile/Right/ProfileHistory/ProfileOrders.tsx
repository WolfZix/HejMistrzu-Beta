import { Download, ShoppingBag } from "lucide-react";

type ProfileOrdersProps = {
  orders: {
    id: number;
    title: string;
    status: string;
    date: string;
  }[];
  buttonClass: string;
  isLoading: boolean;
};

export default function ProfileOrders({
  orders,
  buttonClass,
  isLoading,
}: ProfileOrdersProps) {
  return (
    <div className="flex h-auto min-w-0 flex-col rounded-lg glass py-4 lg:h-[350px]">
      <div className="border-b">
        <div className="flex items-center gap-4 border-b px-4 pb-4">
          <ShoppingBag size={24} className="text-primary shrink-0" />

          <h1 className="font-heading text-2xl">
            Zamówienia
          </h1>
        </div>

        <div className="custom-scrollbar flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto py-2">
          {isLoading ? (
            <p className="px-4 py-4 text-sm text-muted-foreground">
              Wczytywanie zamówień...
            </p>
          ) : orders.length === 0 ? (
            <p className="px-4 py-4 text-sm text-muted-foreground">
              Nie masz jeszcze żadnych zamówień.
            </p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="
                  grid
                  grid-cols-[1fr_auto]
                  gap-x-3
                  gap-y-1
                  px-4
                  py-2
                  sm:grid-cols-[minmax(0,20%)_minmax(0,45%)_minmax(0,35%)]
                  sm:items-center
                "
              >
                <span className="text-left whitespace-nowrap">
                  {order.date}
                </span>
                <span className="text-right sm:order-3 sm:text-right truncate max-w-[100px]">
                  {order.status}
                </span>
                <span className="col-span-2 text-left sm:col-span-1 sm:order-2 sm:text-center">
                  {order.title}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <button className={buttonClass}>
        <Download size={16} className="text-primary shrink-0" />
        Pobierz pełną historię
      </button>
    </div>
  );
}