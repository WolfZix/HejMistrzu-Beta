import { Pencil, Trash2, Plus, Eye } from "lucide-react";
import AdminTable from "../components/AdminTable";
import { useEffect, useState } from "react";
import PageLoader from "@/pages/PageLoader";
import AddUserModal from "../components/Users/AddUserModal";
import type { User } from "@/types/user";
import TableFilters from "../components/TableFilters";
import { normalizeText } from "@/utils";
import DeleteModal from "../components/DeleteModal";
import EditUserModal from "../components/Users/EditUserModal";

const USERS_PER_PAGE = 6;

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredUsers = users.filter((user) =>
  normalizeText(user.username).includes(normalizeText(search)) ||
  normalizeText(user.email).includes(normalizeText(search)));

  const sortedUsers = [...filteredUsers];

  switch (sortBy) {
    case "username-asc":
      sortedUsers.sort((a, b) => a.username.localeCompare(b.username));
      break;

    case "username-desc":
      sortedUsers.sort((a, b) => b.username.localeCompare(a.username));
      break;

    case "email-asc":
      sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
      break;
    
    case "email-desc":
      sortedUsers.sort((a, b) => b.email.localeCompare(a.email));
      break;

    case "admin":
      sortedUsers.sort((a, b) => {
        if (a.role === b.role) return 0;
        return a.role === "admin" ? -1 : 1;
      });
      break;
  }


  const sortOptions = [
  {
    value: "default",
    label: "Domyślnie",
  },
  {
    value: "username-asc",
    label: "Nazwa A-Z",
  },
  {
    value: "username-desc",
    label: "Nazwa Z-A",
  },
  {
    value: "email-asc",
    label: "Email A-Z",
  },
  {
    value: "email-desc",
    label: "Email Z-A",
  },
  {
    value: "admin",
    label: "Według roli",
  },
];

  const totalPages = Math.ceil(sortedUsers.length / USERS_PER_PAGE);
  const currentUsers = sortedUsers.slice((currentPage - 1) * USERS_PER_PAGE, currentPage * USERS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [search])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users`)
    .then((res) => res.json())
    .then((data: User[]) => { setUsers(data) })
    .catch(console.error);
  }, [])

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
      <TableFilters
        label="Szukaj użytkownika"
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
            Dodaj użytkownika
          </button>
        }
      />
      <div className="h-[33rem] flex flex-col justify-between">
        <AdminTable>
          <thead>
            <tr className="border-b border-border text-primary text-center">
              <th className="p-4 w-20">ID</th>
              <th className="p-4 w-[30%]">Nazwa</th>
              <th className="p-4 w-[30%]">Email</th>
              <th className="p-4">Rola</th>
              <th className="p-4">Utworzono</th>
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
                <td className="p-4"> {user.username} </td>
                <td className="p-4"> {user.email} </td>
                <td className="p-4"> {user.role} </td>
                <td className="p-4"> {new Date(user.createdAt).toLocaleDateString("pl-PL")} </td>

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
                      onClick={() => {
                        setSelectedUser(user);
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
                        setSelectedUser(user);
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
    { users.length === 0 && (
      <div className="absolute -top-12 left-0 right-0 bottom-0">
        <PageLoader /> 
      </div>
    )}
    {isOpen && (
      <AddUserModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    )}
    {isDeleteOpen && (
      <DeleteModal
        isOpen={isDeleteOpen}
        title="Usuń użytkownika"
        description={
          <>
            Czy na pewno chcesz usunąć użytkownika?
            <br />
            <strong>{selectedUser?.username}</strong>
          </>
        }
        onClose={() => {
          setSelectedUser(null);
          setIsDeleteOpen(false);
        }}
        onConfirm={() => {
          console.log(selectedUser);
          setSelectedUser(null);
          setIsDeleteOpen(false);
        }}
      />
    )}
    {isEditOpen && (
      <EditUserModal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} user={selectedUser} />
    )}
    </div>
  );
}