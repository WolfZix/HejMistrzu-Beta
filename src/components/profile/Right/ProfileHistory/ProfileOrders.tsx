import { Download, ShoppingBag } from "lucide-react"

type ProfileOrdersProps = {
  orders: {
    id: number;
    title: string;
    status: string;
    date: string;
  }[];
  buttonClass: string;
};

export default function ProfileOrders({ orders, buttonClass }: ProfileOrdersProps) {
  return (
    <div className="flex flex-col h-[350px] rounded-lg glass py-4 mr-5">

          <div className="border-b">
            <div className="flex items-center gap-4 border-b px-4 pb-4">
              <ShoppingBag size={24} className="text-primary" />
              <h1 className="font-heading text-2xl">
                Zamówienia
              </h1>
            </div>

            <div className="grid grid-rows-5 gap-2">
              {orders.map((order) => (
                <div className="grid grid-cols-[20%_45%_35%] px-4 py-2" key={order.id}>
                  <span className="text-left">{order.date}</span>
                  <span className="text-center">{order.title}</span>
                  <span className="text-right">{order.status}</span>
                </div>
              ))}
            </div>
          </div>

          <button className={buttonClass} >
            <Download size={16} className="text-primary" />
            Pobierz pełną historię
          </button>
        </div>
  )
}