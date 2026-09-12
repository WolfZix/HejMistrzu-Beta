import { Download, Ticket } from "lucide-react";

type ProfileReservationsProps = {
  reservations: {
    id: number;
    title: string;
    time: string;
    date: string;
  }[];
  buttonClass: string;
};

export default function ProfileReservations({
  reservations,
  buttonClass,
}: ProfileReservationsProps) {
  return (
    <div className="flex h-auto min-w-0 flex-col rounded-lg glass py-4 lg:min-h-[350px]">
      <div className="border-b">
        <div className="flex items-center gap-4 border-b px-4 pb-4">
          <Ticket size={24} className="text-primary shrink-0" />

          <h1 className="font-heading text-2xl">
            Rezerwacje
          </h1>
        </div>

        <div className="flex flex-col gap-2 py-2">
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
                sm:grid-cols-3
                sm:items-center
              "
            >
              <span className="text-left whitespace-nowrap">
                {reservation.date}
              </span>

              <span className="text-right sm:text-center">
                {reservation.time}
              </span>

              <span className="col-span-2 text-left sm:col-span-1 sm:text-center">
                {reservation.title}
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