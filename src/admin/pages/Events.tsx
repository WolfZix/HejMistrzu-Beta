import { useState } from "react";
import { Search, Plus, Trash2, Pencil, Eye } from "lucide-react";
import AdminTable from "../components/AdminTable";
import PageLoader from "@/pages/PageLoader";
import AddEventModal from "../components/Events/AddEventModal";

const events = [
  {
    id: 1,
    title: "Friday Night Magic",
    category: "MTG",
    date: "27.06.2026",
    occupiedSlots: 18,
    maxSlots: 24,
    price: 25,
  },
  {
    id: 2,
    title: "Pokemon League",
    category: "Pokemon",
    date: "28.06.2026",
    occupiedSlots: 12,
    maxSlots: 20,
    price: 20,
  },
  {
    id: 3,
    title: "Warhammer 40k",
    category: "Warhammer",
    date: "29.06.2026",
    occupiedSlots: 10,
    maxSlots: 16,
    price: 30,
  },
  {
    id: 4,
    title: "D&D One Shot",
    category: "RPG",
    date: "01.07.2026",
    occupiedSlots: 5,
    maxSlots: 8,
    price: 15,
  },
  {
    id: 5,
    title: "Lorcana Tournament",
    category: "Lorcana",
    date: "02.07.2026",
    occupiedSlots: 14,
    maxSlots: 20,
    price: 20,
  },
  {
    id: 6,
    title: "Pokemon Challenge",
    category: "Pokemon",
    date: "03.07.2026",
    occupiedSlots: 7,
    maxSlots: 16,
    price: 10,
  },
  {
    id: 7,
    title: "Commander Night",
    category: "MTG",
    date: "04.07.2026",
    occupiedSlots: 22,
    maxSlots: 24,
    price: 25,
  },
];
const EVENTS_PER_PAGE = 6;

export default function Events() {

  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const totalPages = Math.ceil(
    events.length / EVENTS_PER_PAGE
  );

  const currentEvents = events.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  return (
    <>
    <div className="space-y-6 min-h-[45rem] relative">
      <div>
        <h1 className="font-heading text-3xl">
          Eventy
        </h1>

        <p className="text-muted-foreground mt-2">
          Zarządzaj eventami.
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
            placeholder="Szukaj wydarzenia..."
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
          onClick={() => setIsOpen(!isOpen)}
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
          <Plus size={16} />
          Dodaj event
        </button>
      </div>
      <div className="h-[33rem] flex flex-col justify-between">
        <AdminTable>
          <thead>
            <tr className="border-b border-border text-primary text-center">
              <th className="p-4">ID</th>
              <th className="p-4">Tytuł</th>
              <th className="p-4">Kategoria</th>
              <th className="p-4">Data</th>
              <th className="p-4">Miejsca</th>
              <th className="p-4">Cena</th>
              <th className="p-4">Akcje</th>
            </tr>
          </thead>

          <tbody>
            {currentEvents.map((event) => (
              <tr
                key={event.id}
                className="
                  border-b
                  border-border/50
                  hover:bg-muted/20
                  text-center
                "
              >
                <td className="p-4">{event.id}</td>

                <td className="p-4">
                  {event.title}
                </td>

                <td className="p-4">
                  {event.category}
                </td>

                <td className="p-4">
                  {event.date}
                </td>

                <td className="p-4">
                  <span
                    className={
                      event.occupiedSlots / event.maxSlots > 0.8
                        ? "text-red-400"
                        : event.occupiedSlots / event.maxSlots > 0.5
                        ? "text-yellow-400"
                        : "text-green-400"
                    }
                  >
                    {event.occupiedSlots}/{event.maxSlots}
                  </span>
                </td>

                <td className="p-4">
                  {event.price} zł
                </td>

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
                        hover:bg-muted
                        border border-transparent
                        hover:border-muted-foreground/30
                      "
                    >
                      <Pencil size={16} />
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
      { events.length === 0 && (
        <div className="absolute -top-12 left-0 right-0 bottom-0">
          <PageLoader /> 
        </div>
      )}
    </div>
      {isOpen && (
        <AddEventModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      )}
    </>
  );
}