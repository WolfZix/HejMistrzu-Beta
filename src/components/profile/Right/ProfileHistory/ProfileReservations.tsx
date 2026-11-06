import { Download, Ticket } from "lucide-react";

type ProfileReservationsProps = {
  reservations: {
    id: number;
    title: string;
    time: string;
    date: string;
  }[];
  buttonClass: string;
  isLoading: boolean;
};

export default function ProfileReservations({
  reservations,
  buttonClass,
  isLoading,
}: ProfileReservationsProps) {
  return (
    <div className="flex h-auto min-w-0 flex-col rounded-lg glass py-4 lg:h-[350px]">
      <div className="flex min-h-0 flex-1 flex-col border-b">
        <div className="flex items-center gap-4 border-b px-4 pb-4">
          <Ticket size={24} className="text-primary shrink-0" />

          <h1 className="font-heading text-2xl">
            Rezerwacje
          </h1>
        </div>

        <div className="custom-scrollbar flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto py-2">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="
                grid
                grid-cols-[1fr_auto]
                gap-x-3
                gap-y-1
                px-4
                py-2
                sm:grid-cols-[minmax(0,30%)_minmax(0,45%)_minmax(0,25%)]
                sm:items-center
              "
            >
              <span className="text-left whitespace-nowrap">
                {reservation.date}
              </span>

              <span className="text-center truncate min-w-0">
                {reservation.title}
              </span>

              <span className="text-right whitespace-nowrap">
                {reservation.time}
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