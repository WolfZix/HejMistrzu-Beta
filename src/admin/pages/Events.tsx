import { useEffect, useState } from "react";
import { Plus, Trash2, Pencil, Eye } from "lucide-react";
import AdminTable from "../components/AdminTable";
import PageLoader from "@/pages/PageLoader";
import AddEventModal from "../components/Events/AddEventModal";
import { events } from "@/data/events";
import { normalizeText } from "@/utils";
import TableFilters from "../components/TableFilters";

const EVENTS_PER_PAGE = 6;

export default function Events() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const filteredEvents = events.filter((event) =>
    normalizeText(event.title).includes(
      normalizeText(search)
    ));
    
    const sortedEvents = [...filteredEvents];

    switch (sortBy) {
      case "title-asc":
        sortedEvents.sort((a, b) => a.title.localeCompare(b.title));
        break;
  
      case "title-desc":
        sortedEvents.sort((a, b) => b.title.localeCompare(a.title));
        break;
  
      case "date-asc":
        sortedEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
  
      case "date-desc":
        sortedEvents.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;

      case "slots-asc":
        sortedEvents.sort((a, b) => a.bookedSlots - b.bookedSlots);
        break;
  
      case "slots-desc":
        sortedEvents.sort((a, b) => b.bookedSlots - a.bookedSlots);
        break;
    }

  const totalPages = Math.ceil(
    sortedEvents.length / EVENTS_PER_PAGE
  );

  const currentEvents = sortedEvents.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );
  

    const sortOptions = [
  {
    value: "default",
    label: "Domyślnie",
  },
  {
    value: "title-asc",
    label: "Tytuł A-Z",
  },
  {
    value: "title-desc",
    label: "Tytuł Z-A",
  },
  {
    value: "date-asc",
    label: "Najbliższe",
  },
  {
    value: "date-desc",
    label: "Najdalsze",
  },
  {
    value: "slots-asc",
    label: "Miejsca-asc",
  },
  {
    value: "slots-desc",
    label: "Miejsca-desc",
  },
];

  useEffect(() => {
    setCurrentPage(1);
  }, [search])

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

      <TableFilters
        label="Szukaj eventów"
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOptions={sortOptions}
        button={
          <button
            onClick={() => setIsOpen(true)}
            className="
            flex
            items-center
            gap-2
            px-4
            py-3
            rounded-lg
            bg-primary/90
            w-fit
            text-black/90
            hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]
            hover:bg-primary
            hover:text-black
            transition-all duration-200
            "
          >
            <Plus size={18} />
            Dodaj event
          </button>
        }
      />
      <div className="h-[33rem] flex flex-col justify-between">
        <AdminTable>
          <thead>
            <tr className="border-b border-border text-primary text-center">
              <th className="p-4 w-20">ID</th>
              <th className="p-4 w-[25%]">Tytuł</th>
              <th className="p-4 w-[25%]">Kategoria</th>
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
                <td className="p-4"> {event.id} </td>
                <td className="p-4">
                  <div className="relative group">
                    <div className="truncate">
                      {event.title}
                    </div>

                    <div
                      className="
                        hidden
                        group-hover:block
                        absolute
                        left-0
                        right-0
                        w-fit
                        mx-auto
                        bottom-full
                        mb-1
                        z-50
                        rounded-md
                        bg-zinc-900
                        px-2
                        py-1
                        text-sm
                        whitespace-nowrap
                        shadow-lg
                      "
                    >
                      {event.title}
                    </div>
                  </div>
                </td>
                <td className="p-4"> {event.category} </td>
                <td className="p-4"> {new Date(event.date).toLocaleDateString("pl-PL")} </td>
                <td className="p-4">
                  <span
                    className={
                      event.bookedSlots / event.totalSlots > 0.8
                        ? "text-red-400"
                        : event.bookedSlots / event.totalSlots > 0.5
                        ? "text-yellow-400"
                        : "text-green-400"
                    }
                  >
                    {event.bookedSlots}/{event.totalSlots}
                  </span>
                </td>
                <td className="p-4"> {event.price} zł </td>
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