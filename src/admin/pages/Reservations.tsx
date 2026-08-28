import { useState, useEffect } from "react";
import { Plus, Trash2, Pencil, Eye } from "lucide-react";
import AdminTable from "../components/AdminTable";
import PageLoader from "@/pages/PageLoader";
import axios from "axios";
import type { Reservation } from "@/types/reservation";
import { normalizeText } from "@/utils";
import EditReservationModal from "../components/Reservations/Edit/EditReservationModal";
import DeleteModal from "../components/DeleteModal";
import ViewReservationModal from "../components/Reservations/ViewReservationModal";
import TableFilters from "../components/TableFilters";

const SORT_OPTIONS = [
  {
    value: "default",
    label: "Domyślnie",
  },
  {
    value: "name-asc",
    label: "Imię i nazwisko A-Z",
  },
  {
    value: "email-asc",
    label: "Email A-Z",
  },
  {
    value: "type",
    label: "Typ rezerwacji",
  },
  {
    value: "date-asc",
    label: "Data rosnąco",
  },
  {
    value: "date-desc",
    label: "Data malejąco",
  },
];

export default function Reservations() {
  const RESERVATIONS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const filteredReservations = reservations.filter((reservation) => 
    normalizeText(reservation.fullName).includes(normalizeText(search)) ||
    normalizeText(reservation.email).includes(normalizeText(search))
  );

  const sortedReservations = [...filteredReservations];

  switch (sortBy) {
    case "name-asc":
      sortedReservations.sort((a,b) => a.fullName.localeCompare(b.fullName, "pl"));
      break;
    case "email-asc":
      sortedReservations.sort((a,b) => a.email.localeCompare(b.email));
      break;
    case "type":
      sortedReservations.sort((a,b) => {
        const typeA = a.duration === null ? "Gralnia" : "Sesja RPG";
        const typeB = b.duration === null ? "Gralnia" : "Sesja RPG";
        return typeA.localeCompare(typeB, "pl");
      })
      break;
    case "date-asc":
      sortedReservations.sort((a,b) => {
        const dateA = new Date(`${a.reservationDate}T${a.reservationTime}`).getTime();
        const dateB = new Date(`${b.reservationDate}T${b.reservationTime}`).getTime();
        return dateA - dateB;
      });
      break;
    case "date-desc":
      sortedReservations.sort((a,b) => {
        const dateA = new Date(`${a.reservationDate}T${a.reservationTime}`).getTime();
        const dateB = new Date(`${b.reservationDate}T${b.reservationTime}`).getTime();
        return dateB - dateA;
      });
      break;
  }
  
  const totalPages = Math.ceil(
    sortedReservations.length / RESERVATIONS_PER_PAGE
  );
  
  const currentReservations = sortedReservations.slice(
    (currentPage - 1) * RESERVATIONS_PER_PAGE,
    currentPage * RESERVATIONS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, sortBy]);

  useEffect(() => {
    fetchReservations();
  }, [])

  async function fetchReservations() {
    try {
      setIsLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/reservations`);
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

  async function handleDeleteReservation() {
    if (!selectedReservation) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/reservations/${selectedReservation.id}`);
      setIsDeleteOpen(false);
      setSelectedReservation(null);
      fetchReservations();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="space-y-6 min-h-[45rem] relative">
        <div>
          <h1 className="font-heading text-3xl">
            Rezerwacje
          </h1>

          <p className="text-muted-foreground mt-2">
            Zarządzaj rezerwacjami.
          </p>
        </div>
        <TableFilters 
          label="Wyszukaj rezerwację"
          search={search}
          setSearch={setSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOptions={SORT_OPTIONS}
          button={
            <button
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
            font-heading
            font-medium
            hover:shadow-[0_0_10px_1px_hsl(43,50%,26%)]
            hover:bg-primary
            hover:text-black
            transition-all duration-200
            ">
              <Plus size={16} /> Dodaj rezerwację
            </button>
          }
        />
        
        <div className="h-[33rem] flex flex-col justify-between">
          <AdminTable>
            <thead>
              <tr className="border-b border-border text-primary text-center">
                <th className="p-4 w-8">ID</th>
                <th className="p-4 w-[15%]">Imię i nazwisko</th>
                <th className="p-4 w-[20%]">Email</th>
                <th className="p-4 w-32">Typ</th>
                <th className="p-4 w-32">Data</th>
                <th className="p-4 w-32">Godzina</th>
                <th className="p-4 w-32">Status</th>
                <th className="p-4 w-32">Akcje</th>
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
                    {reservation.reservationTime.slice(0,5)}
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
                          onClick={() => {
                            setSelectedReservation(reservation);
                            setIsViewOpen(true);
                          }}
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
                          onClick={() => {
                            setSelectedReservation(reservation);
                            setIsEditOpen(true);
                          }}
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
                        onClick={() => {
                          setSelectedReservation(reservation);
                          setIsDeleteOpen(true);
                        }}
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
      {selectedReservation && (
        <>
        {isEditOpen && (
          <EditReservationModal 
            isOpen={isEditOpen}
            reservation={selectedReservation}
            onClose={() => {
              setIsEditOpen(false)
              setSelectedReservation(null)
            }}
            onReservationUpdated={fetchReservations}
          />
        )}
        {isDeleteOpen && (
          <DeleteModal
          isOpen={isDeleteOpen}
          title="Usunąć rezerwację?"
          description={`Czy na pewno chcesz usunąć rezerwację ${selectedReservation.id}?\nTej operacji nie można cofnąć.`}
          onClose={() => {
            setIsDeleteOpen(false);
            setSelectedReservation(null);
          }}
          onConfirm={handleDeleteReservation}
          />
        )}
        {isViewOpen && (
          <ViewReservationModal
          isOpen={isViewOpen}
          reservation={selectedReservation}
          onClose={() => {
            setIsViewOpen(false);
            setSelectedReservation(null);
          }}
          />
        )}
        </>
      )}
    </>
  );
}