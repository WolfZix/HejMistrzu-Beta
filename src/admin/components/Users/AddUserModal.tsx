import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import AddUserForm from "./AddUserForm";

type AddUserModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddUserModal({
  isOpen,
  onClose,
}: AddUserModalProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("user");
  const [isRoleOpen, setIsRoleOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function closeModal() {
    setUsername("");
    setEmail("");
    setPassword("");
    setRole("user");
    setIsRoleOpen(false);

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
              w-full
              max-w-md
              relative
              rounded-xl
              border
              border-primary/30
              bg-card
              px-6
              pb-6
              pt-12
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
                Dodaj użytkownika
              </h2>
            </div>

            <AddUserForm
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              role={role}
              setRole={setRole}
              isRoleOpen={isRoleOpen}
              setIsRoleOpen={setIsRoleOpen}
              handleSubmit={handleSubmit}
              closeModal={closeModal}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}