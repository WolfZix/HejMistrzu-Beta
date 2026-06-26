import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { User, UserFormData } from "@/types/user";
import UserForm from "./UserForm";

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
    username: "",
    email: "",
    role: "user",
  })

  useEffect(() => {
    if (!user) return;
    setFormData({
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
      username: "",
      email: "",
      role: "user",
    })
    onClose();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    closeModal();
  }

  return (
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
            />

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}