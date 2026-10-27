import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { User, UserFormData } from "@/types/user";
import UserForm from "./UserForm";
import { createPortal } from "react-dom";

type EditUserModalProps = {
  isOpen: boolean;
  user: User | null;
  onClose: () => void;
};

export default function EditUserModal({
  isOpen,
  user,
  onClose,
}: EditUserModalProps) {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    surname: "",
    username: "",
    email: "",
    role: "user",
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!user) return;
    setFormData({
      name: user.name,
      surname: user.surname,
      username: user.username,
      email: user.email,
      role: user.role,
    })
  }, [user])

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function closeModal() {
    setFormData({ 
      name: "",
      surname: "",
      username: "",
      email: "",
      role: "user",
    })
    onClose();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    setIsSubmitting(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      const payload = {
        ...formData,
        ...(password ? { password } : {}),
      };

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${user.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (!response.ok) { throw new Error(data.message || "Nie udało się zaktualizować użytkownika") }

      closeModal();
      window.location.reload();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Wystąpił nieoczekiwany błąd"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={closeModal}
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/60
            backdrop-blur-sm
            p-4
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-md
              rounded-xl
              border
              border-primary/30
              bg-card
              px-6
              pb-6
              pt-10
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]
            "
          >
            <button
              type="button"
              onClick={closeModal}
              className="
                absolute
                top-3
                right-3
                p-2
                rounded-lg
                hover:bg-muted/30
              "
            >
              <X size={18} />
            </button>

            <div className="mb-6">
              <h2 className="font-heading text-center text-2xl font-semibold">
                Edytuj użytkownika
              </h2>
            </div>

            <UserForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              closeModal={closeModal}
              isSubmitting={isSubmitting}
            />

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}