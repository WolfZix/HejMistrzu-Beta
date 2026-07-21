import ProfileOrders from "./ProfileHistory/ProfileOrders";
import ProfileReservations from "./ProfileHistory/ProfileReservations";

export default function ProfileHistory() {
  const downloadButtonClass = `
    mt-auto
    mx-4
    w-fit
    rounded-lg
    border
    border-transparent
    px-2
    py-2
    transition-all
    duration-300
    hover:border-primary/30
    hover:bg-primary/5
    flex
    items-center
    gap-3`

  const orders = [
    {
      id: 1532,
      title: "Pokemon Booster",
      status: "Dostarczone",
      date: "12.07.2026",
    },
    {
      id: 1632,
      title: "Pokemon Mousepad",
      status: "W trakcie realizacji",
      date: "08.09.2026",
    },
    {
      id: 1563,
      title: "Pokemon Card Pack",
      status: "Anulowane",
      date: "05.12.2025",
    },
  ]

  const reservations = [
    {
      id: 1,
      title: "Gralnia",
      time: "2h",
      date: "12.07.2026",
    },
    {
      id: 2,
      title: "Sesja RPG",
      time: "5h",
      date: "08.9.2026",
    },
    {
      id: 3,
      title: "Gralnia",
      time: "2h",
      date: "05.12.2025",
    },
    {
      id: 4,
      title: "Gralnia",
      time: "Bez limitu",
      date: "05.12.2025",
    },
    {
      id: 5,
      title: "Sesja RPG",
      time: "Bez limitu",
      date: "15.06.2025",
    },
  ]
  return (
    <div className="py-8">
      <div className="grid md:grid-cols-[55%_45%]">
        <ProfileOrders orders={orders} buttonClass={downloadButtonClass} />
        <ProfileReservations reservations={reservations} buttonClass={downloadButtonClass} />
      </div>
    </div>
  );
}