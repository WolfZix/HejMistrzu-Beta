import { Search, Pencil, Trash2, Plus } from "lucide-react";
import AdminTable from "../components/AdminTable";
import { useState } from "react";
import PageLoader from "@/pages/PageLoader";
import AddUserModal from "../components/Users/AddUserModal";

const users = [
  {
    id: 1,
    username: "example",
    email: "example@example.com",
    battlepass: 12,
    role: "Admin",
  },
{
    id: 2,
    username: "example",
    email: "example@example.com",
    battlepass: 76,
    role: "User",
  },
  {
    id: 3,
    username: "example",
    email: "example@example.com",
    battlepass: 23,
    role: "User",
  },
  {
    id: 4,
    username: "example",
    email: "example@example.com",
    battlepass: 34,
    role: "User",
  },
  {
    id: 5,
    username: "example",
    email: "example@example.com",
    battlepass: 24,
    role: "User",
  },
  {
    id: 6,
    username: "example",
    email: "example@example.com",
    battlepass: 7,
    role: "User",
  },
  {
    id: 7,
    username: "example",
    email: "example@example.com",
    battlepass: 98,
    role: "User",
  },
  {
    id: 8,
    username: "example",
    email: "example@example.com",
    battlepass: 34,
    role: "User",
  },
  {
    id: 9,
    username: "example",
    email: "example@example.com",
    battlepass: 56,
    role: "User",
  },
  {
    id: 10,
    username: "example",
    email: "example@example.com",
    battlepass: 23,
    role: "User",
  },
];

const USERS_PER_PAGE = 6;

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);
  return (
    <div className="space-y-6 min-h-[45rem] relative">
      <div>
        <h1 className="font-heading text-3xl">
          Użytkownicy
        </h1>

        <p className="text-muted-foreground mt-2">
          Zarządzaj użytkownikami systemu.
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
            placeholder="Szukaj użytkownika..."
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
          Dodaj użytkownika
        </button>
      </div>
      <div className="h-[33rem] flex flex-col justify-between">
        <AdminTable>
          <thead>
            <tr className="border-b border-border text-primary text-center">
              <th className="p-4">ID</th>
              <th className="p-4">Nazwa</th>
              <th className="p-4">Email</th>
              <th className="p-4">Battlepass</th>
              <th className="p-4">Rola</th>
              <th className="p-4">Akcje</th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((user) => (
              <tr
                key={user.id}
                className="
                  border-b
                  border-border/50
                  hover:bg-muted/20
                  text-center
                "
              >
                <td className="p-4">{user.id}</td>

                <td className="p-4">
                  {user.username}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">
                  {user.battlepass}
                </td>

                <td className="p-4">
                  {user.role}
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
    { users.length === 0 && (
      <div className="absolute -top-12 left-0 right-0 bottom-0">
        <PageLoader /> 
      </div>
    )}
    {isOpen && (
      <AddUserModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    )}
    </div>
  );
}