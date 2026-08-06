import { useState, useEffect } from "react";
import { Search, Plus, Trash2, Pencil } from "lucide-react";
import AdminTable from "../components/AdminTable";
import PageLoader from "@/pages/PageLoader";
import axios from "axios";
import type { Reservation } from "@/types/reservation";
import { normalizeText } from "@/utils";

export default function Reservations() {
  const RESERVATIONS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const filteredReservations = reservations.filter((reservation) => 
    normalizeText(reservation.fullName).includes(normalizeText(search)) ||
    normalizeText(reservation.email).includes(normalizeText(search))
  );
  
  const totalPages = Math.ceil(
    filteredReservations.length / RESERVATIONS_PER_PAGE
  );
  
  const currentReservations = filteredReservations.slice(
    (currentPage - 1) * RESERVATIONS_PER_PAGE,
    currentPage * RESERVATIONS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  useEffect(() => {
    fetchReservations();
  })

  async function fetchReservations() {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3000/reservations");
      setReservations(response.data);
    } catch(error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  
  function getStatusClass(status: string) {
    switch (status) {
      case "Oczekująca":
        return "bg-yellow-500/10 text-yellow-400";
      case "Potwierdzona":
        return "bg-green-500/10 text-green-400";
      case "Anulowana":
        return "bg-red-500/10 text-red-400";  
      default:
        return "";
    }
  }

  return (
    <div className="space-y-6 min-h-[45rem] relative">
      <div>
        <h1 className="font-heading text-3xl">
          Rezerwacje
        </h1>

        <p className="text-muted-foreground mt-2">
          Zarządzaj rezerwacjami.
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Szukaj rezerwacji..."
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
          Dodaj rezerwację
        </button>
      </div>
      <div className="h-[33rem] flex flex-col justify-between">
        <AdminTable>
          <thead>
            <tr className="border-b border-border text-primary text-center">
              <th className="p-4 w-12">ID</th>
              <th className="p-4 w-[20%]">Imię i nazwisko</th>
              <th className="p-4 w-[20%]">Email</th>
              <th className="p-4">Typ</th>
              <th className="p-4 w-36">Data</th>
              <th className="p-4 w-36">Status</th>
              <th className="p-4 w-36">Akcje</th>
            </tr>
          </thead>

          <tbody>
            {currentReservations.map((reservation) => (
              <tr
                key={reservation.id}
                className="
                  border-b
                  border-border/50
                  hover:bg-muted/20
                  text-center
                "
              >
                <td className="p-4">{reservation.id}</td>

                <td className="p-4">
                  {reservation.fullName}
                </td>

                <td className="p-4">
                  {reservation.email}
                </td>

                <td className="p-4">
                  {reservation.duration === null 
                  ? "Gralnia" 
                  : `Sesja RPG ${reservation.duration === 0 ? "Bez limitu" : `${reservation.duration}h`}`}
                </td>

                <td className="p-4">
                  {new Date(reservation.reservationDate).toLocaleDateString("pl-PL")}
                </td>

                <td className="p-4">
                  <span
                    className={`
                      px-2 py-1 rounded-md text-xs font-medium
                      ${getStatusClass(reservation.status)}
                    `}
                  >
                    {reservation.status}
                  </span>
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
      { reservations.length === 0 && (
        <div className="absolute -top-12 left-0 right-0 bottom-0">
          <PageLoader /> 
        </div>
      )}
    </div>
  );
}