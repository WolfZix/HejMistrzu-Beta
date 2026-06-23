import { useParams } from "react-router-dom";
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
      const response = await fetch("http://localhost:3000/reservations");
      const data = await response.json();
      setReservations(data.rezerwacje);
    }

  async function handleDelete(id: string) {
    const response = await fetch(`http://localhost:3000/reservations/${id}`,
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
      {reservations.map((rezerwacja, i) => (
          <div key={i} className="flex flex-col">
            <p>ID: {rezerwacja.id}</p>
            <p>ID wydarzenia: {rezerwacja.eventId}</p>
            <p>Imię: {rezerwacja.firstName}</p>
            <p>Nazwisko: {rezerwacja.lastName}</p>
            <p>Email: {rezerwacja.email}</p>
            <p>Pokemon ID: {rezerwacja.pokemonId}</p>
            <p>Liczba miejsc: {rezerwacja.slots}</p>
            <button
            onClick={() => handleDelete(rezerwacja.id)}
            className="w-fit px-2 py-1 rounded-xl bg-red-500 text-white"
            >
            DELETE
            </button>
          </div>
      ))}
    </div>
  )
}