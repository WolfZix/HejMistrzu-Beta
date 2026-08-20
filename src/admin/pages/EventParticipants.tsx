import Checkbox from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useState, useEffect } from "react";
import type { Event } from "@/types/event";
import type { EventParticipant } from "@/types/event";
import type { User } from "@/types/user";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "@/pages/PageLoader";
import { normalizeText } from "@/utils";
import AddParticipantModal from "../components/AddParticipantModal";

export default function EventParticipants() {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchEmail, setSearchEmail] = useState("");
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [selectedParticipants, setSelectedParticipants] = useState<EventParticipant[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isButtonTooltipOpen, setIsButtonTooltipOpen] = useState(false);
  const [userTooltipId, setUserTooltipId] = useState<number | null>(null);
  const [userTooltipType, setUserTooltipType] = useState<"noEvent" | "aleadyAdded" | null>(null);

  const addButtonStyles = `
    w-8 h-8
    bg-primary
    text-black
    text-xl
    border-2 border-primary
    rounded-lg
    flex items-center justify-center
    hover:bg-primary/80
    hover:scale-105
    active:scale-95
    transition-all duration-200
    select-none
    disabled:duration-0
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:scale-100
    disabled:active:scale-100
    disabled:hover:bg-primary
  `;

  const removeButtonStyles = `
    w-8 h-8
    bg-red-500
    text-black
    text-xl
    border-2 border-red-600
    rounded-lg
    flex items-center justify-center
    hover:bg-red-700
    hover:scale-105
    active:scale-95
    transition-all duration-200
    select-none
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const selectedEvent = events.find((event) => event.id === selectedEventId);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setIsLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/events`);
        if (!response.ok) {
          throw new Error("Nie udało się pobrać wydarzeń");
        }
        const data = await response.json();
        setEvents(data);
      } catch(error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    async function searchUsers() {
    if (!searchEmail.trim()) {
      setSearchResults([]);
      return
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users?email=${encodeURIComponent(normalizeText(searchEmail))}`);
      if (!response.ok) {
        throw new Error("Nie udało się wyszukać użytkownika");
      }
      const data = await response.json();
      setSearchResults(data);
    } catch(error) {
      console.error(error);
    }
  }
  searchUsers();
  }, [searchEmail]);

  async function addParticipant(user: User) {
    if (selectedEventId === null) {
      setUserTooltipId(user.id);
      setUserTooltipType("noEvent");
      return;
    }
    if (selectedParticipants.some((participant) => participant.userId === user.id)) {
      setUserTooltipId(user.id);
      setUserTooltipType("aleadyAdded");
      return;
    }
    const participantData = {
      eventId: selectedEventId,
      userId: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      pokemonId: null,
      nickname: null,
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/eventParticipants`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(participantData),
      })
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Nie udało się dodać uczestnika");
      }
      const participant = await response.json();
      setSelectedParticipants((prev) => [
        ...prev,
        {
          ...participant,
          username: user.username,
          email: user.email,
        },
      ]);
    } catch(error) {
      console.error(error);
    }
  }

  async function removeParticipant(participantId: number) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/eventParticipants/${participantId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Nie udało się usunąć uczestnika");
      }
      setSelectedParticipants((prev) => prev.filter((participant) => participant.id !== participantId));
    } catch(error) {
      console.error(error);
    }
  }

  async function fetchParticipants(eventId: number | null) {
    try {
      if (eventId === null) {
        setSelectedParticipants([]);
        return;
      }
      const response = await fetch(`${import.meta.env.VITE_API_URL}/eventParticipants?eventId=${eventId}`);
      if (!response.ok) {
        throw new Error("Nie udało się pobrać uczestników");
      }
      const data = await response.json();
      setSelectedParticipants(data);
    } catch(error){
      console.error(error);
    } 
  }

  function showButtonTooltip() { selectedEventId === null ? setIsButtonTooltipOpen(true) : "" }
  function hideButtonTooltip() { setIsButtonTooltipOpen(false) }

  function showUserTooltip(participantId: number) { selectedEventId === null ? setUserTooltipId(participantId) : "" }
  function hideUserTooltip() { 
    setUserTooltipId(null);
    setUserTooltipType(null);
  }

  return (
    <>
    <div className="w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-semibold">
            Uczestnicy wydarzeń
          </h1>
          <p className="text-muted-foreground mt-2">
            Wybierz wydarzenie i zarządzaj jego uczestnikami.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="glass rounded-2xl overflow-hidden w-full">
            <div className="p-5 border-b border-border">
              <h2 className="text-lg font-semibold">
                Wydarzenia
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Wybierz wydarzenie, którym chcesz zarządzać.
              </p>
            </div>
            <div>
              <table>
                <thead>
                  <tr className="border-b border-border text-primary text-center">
                    <th className="p-4 w-[50px]"></th>
                    <th className="p-4 text-left w-full">Tytuł</th>
                    <th className="p-4 w-[50px]">Data</th>
                    <th className="p-4 w-[50px]">Godzina</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr
                    key={event.id}
                    className={`
                      text-foreground text-center
                      border-b border-border/50
                      hover:bg-foreground/5
                      transition-colors
                      ${selectedEventId === event.id ? "bg-primary/10" : ""}
                    `}>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <Checkbox
                        checked={selectedEventId === event.id}
                        onChange={() => {
                          setSelectedEventId(!selectedEventId || selectedEventId !== event.id ? event.id : null);
                          fetchParticipants(event.id);
                        }}
                        />
                      </div>
                    </td>
                    <td className="p-4 text-left max-w-[350px] truncate">
                      {event.title}
                    </td>
                    <td className="p-4">
                      {new Date(event.date).toLocaleDateString("pl-PL")}
                    </td>
                    <td className="p-4">
                      {event.startTime.slice(0,5)}
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="glass rounded-2xl h-[26rem] w-full">
            <div className="p-5 border-b border-border flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">
                  Dodaj uczestnika
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Wyszukaj konta użytkowników lub dodaj ręcznie osoby bez konta.
                </p>
              </div>
              <div
              className="relative"
                onMouseEnter={showButtonTooltip}
                onMouseLeave={hideButtonTooltip}
              >
                <button
                onClick={() => setIsAddOpen(true)}
                disabled={selectedEventId === null}
                className="
                bg-primary
                text-black
                py-2 px-4
                rounded-lg
                flex gap-2
                items-center
                transition-all duration-200
                hover:shadow-[0_0_8px_2px_hsl(43,50%,30%)]
                disabled:opacity-50
                disabled:cursor-not-allowed
                disabled:shadow-none"
                >
                  <Plus size={16} /> Dodaj ręcznie
                </button>
                <AnimatePresence>
                  {isButtonTooltipOpen && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full right-0 mb-2 bg-red-500 text-white px-3 py-1.5 rounded-lg whitespace-nowrap">
                      Najpierw wybierz wydarzenie
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="p-4">
              <div className="relative">
                <Input
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  placeholder="Wyszukaj użytkownika..."
                  className="
                    pl-10
                    glass
                    border-border
                    focus:border-primary/50
                    py-6
                    rounded-xl
                  "
                />
                <Search
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-muted-foreground
                    pointer-events-none
                  "
                />
              </div>
              <div className="mt-4 overflow-x-auto">
                {searchResults.length === 0 ? (
                  <div className="p-6 text-center text-muted-foreground">
                    {searchEmail ? "Nie znaleziono użytkownika" : ""}
                  </div>
                ) : (
                  <table className="w-full">
                    <thead>
                      <tr className="text-primary border-b border-border text-center h-12">
                        <th className="p-2 text-left">
                          Użytkownik
                        </th>
                        <th className="p-2">
                          Email
                        </th>
                        <th className="p-2 w-16"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchResults.map((user) => (
                        <tr key={user.id} className="text-foreground text-center border-b border-border/50 hover:bg-foreground/5 transition-colors">
                        <td className="p-3 text-left">
                          <div className="font-medium">
                            {user.username}
                          </div>
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">
                          {user.email}
                        </td>

                        <td className="p-3">
                          <div
                          onMouseEnter={() => showUserTooltip(user.id)}
                          onMouseLeave={hideUserTooltip}
                          className="relative flex justify-center">
                            <button
                              type="button"
                              disabled={selectedEventId === null}
                              className={addButtonStyles}
                              onClick={() => addParticipant(user)}
                            >
                              +
                            </button>
                            <AnimatePresence>
                              {userTooltipId === user.id && (
                                <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bottom-full right-0 mb-2 bg-red-500 text-white px-3 py-1.5 rounded-lg whitespace-nowrap">
                                  {userTooltipType === "noEvent" ? "Najpierw wybierz wydarzenie" : "Użytkownik jest już zapisany na to wydarzenie"}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 min-h-[20rem]">
          <div className="flex flex-col justify-center mb-5">
            <h2 className="text-2xl font-heading font-semibold">
              Uczestnicy wydarzenia
            </h2>
            <p className="text-muted-foreground mt-1">
              {selectedEvent ? selectedEvent.title : "Nie wybrano wydarzenia"}
            </p>
          </div>
          <AnimatePresence>
            {selectedEvent && (
              <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.2 }}
              className="glass rounded-2xl overflow-hidden w-full">
                <div className="overflow-x-auto">
                  {selectedParticipants.length === 0 ? (
                    <div className="p-6 text-center text-muted-foreground">
                      Nie znaleziono uczestników dla tego wydarzenia
                    </div>
                  ) : (
                    <table className="w-full">
                    <thead>
                      <tr className="text-primary border-b border-border text-center h-12">
                        <th className="p-3">
                          Nazwa użytkownika
                        </th>
                        <th className="p-3">
                          Imię i nazwisko
                        </th>
                        <th className="p-3">
                          Email
                        </th>
                        <th className="p-3 w-20"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedParticipants.map((participant) => (
                        <tr key={participant.id} className="text-foreground text-center border-b border-border/50 hover:bg-foreground/5 transition-colors">
                        <td className="p-3">
                          {participant.username ?? "Gość"}
                        </td>
                        <td className="p-3">
                          {participant.name} {participant.surname}
                        </td>
                        <td className="p-3 text-muted-foreground">
                          {participant.email}
                        </td>
                        <td className="p-3">
                          <div className="flex justify-center">
                            <button
                              type="button"
                              disabled={selectedEventId === null}
                              className={removeButtonStyles}
                              onClick={() => removeParticipant(participant.id)}
                            >
                              -
                            </button>
                          </div>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                  )}
                  </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {isAddOpen && (
        <AddParticipantModal
        isAddOpen={isAddOpen}
        eventId={selectedEventId}
        onClose={() => setIsAddOpen(false)}
        onParticipantAdded={() => fetchParticipants(selectedEventId)}
        />
      )}
      {isLoading && (
        <div className="absolute top-0 left-56 right-0 bottom-0">
          <PageLoader /> 
        </div>
      )}
    </>
  );
}