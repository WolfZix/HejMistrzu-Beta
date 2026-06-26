import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Reservation = {
  id: string;
  eventId: number;
  firstName: string;
  lastName: string;
  pokemonId: string;
  email: string;
  slots: number;
}

export default function ProfilePage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const { username } = useParams();

  useEffect(() => {
    fetchReservations();
  },[])

  async function fetchReservations() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/reservations`);
      const data = await response.json();
      setReservations(data.rezerwacje);
    }

  async function handleDelete(id: string) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/reservations/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    await fetchReservations();
  }
  return (
    <div className="min-h-[25vh] flex mt-24 px-10 flex-col gap-5">
      <p>Witaj {username}! Profile page bedzie dostepny po zrobieniu bazy danych uzytkownikow</p>
      {username === "admin" && (
        <Link to="/admin" className="px-4 py-2 w-fit bg-card border-border rounded-xl">Panel admina</Link>
      )}
    </div>
  )
}