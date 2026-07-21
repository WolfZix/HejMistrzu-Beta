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

export default function ProfileReservations({ reservations, buttonClass }: ProfileReservationsProps) {

  return (
    <div className="flex flex-col h-[350px] rounded-lg glass py-4">
          <div className="border-b">
            <div className="flex items-center gap-4 border-b px-4 pb-4">
              <Ticket size={24} className="text-primary" />
              <h1 className="font-heading text-2xl">
                Rezerwacje
              </h1>
            </div>
            <div className="grid grid-rows-5 gap-2">
              {reservations.map((reservation) => (
                <div className="grid grid-cols-3 px-4 py-2" key={reservation.id}>
                  <span className="text-left">{reservation.date}</span>
                  <span className="text-center">{reservation.title}</span>
                  <span className="text-right">{reservation.time}</span>
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