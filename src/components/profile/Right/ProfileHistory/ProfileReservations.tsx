import { Download, Ticket } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

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
  const [tooltip, setTooltip] = useState<{
    text: string;
    top: number;
    left: number;
  } | null>(null);

  function showTooltip(
    event: React.MouseEvent<HTMLSpanElement>,
    text: string
  ) {
    const rect = event.currentTarget.getBoundingClientRect();

    setTooltip({
      text,
      top: rect.top - 8,
      left: rect.left + rect.width / 2,
    });
  }

  return (
    <div className="flex h-auto min-w-0 flex-col rounded-lg glass py-4 lg:h-[350px]">
      <div className="flex min-h-0 flex-1 flex-col border-b">
        <div className="flex items-center gap-4 border-b px-4 pb-4">
          <Ticket size={24} className="text-primary shrink-0" />
          <h1 className="font-heading text-2xl">
            Rezerwacje
          </h1>
        </div>

        <div className="flex flex-col gap-2 py-2">
          {isLoading ? (
            <p className="px-4 py-4 text-sm text-muted-foreground">
              Wczytywanie rezerwacji...
            </p>
          ) : reservations.length === 0 ? (
            <p className="px-4 py-4 text-sm text-muted-foreground">
              Nie masz jeszcze żadnych rezerwacji.
            </p>
          ) : (
            reservations.map((reservation) => (
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

                <span
                  className="text-center truncate min-w-0 cursor-default"
                  onMouseEnter={(event) => showTooltip(event, reservation.title)}
                  onMouseLeave={() => setTooltip(null)}
                >
                  {reservation.title}
                </span>

                <span className="text-right whitespace-nowrap">
                  {reservation.time}
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

      {tooltip &&
        createPortal(
          <div
            className="
              fixed
              z-[9999]
              -translate-x-1/2
              -translate-y-full
              rounded-md
              bg-zinc-900
              px-2
              py-1
              text-sm
              text-white
              whitespace-nowrap
              shadow-lg
              pointer-events-none
              max-w-[calc(100vw-32px)]
              truncate
            "
            style={{
              top: tooltip.top,
              left: tooltip.left,
            }}
          >
            {tooltip.text}
          </div>,
          document.body
        )}
    </div>
  );
}