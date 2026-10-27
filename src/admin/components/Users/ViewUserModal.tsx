import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shield, User, X } from "lucide-react";
import { createPortal } from "react-dom";
import type { User as UserType } from "@/types/user";

type ViewUserModalProps = {
  user: UserType | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ViewUserModal({
  user,
  isOpen,
  onClose,
}: ViewUserModalProps) {

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
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
              onClick={onClose}
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
            <div className="flex flex-col items-center">
              <div
                className="
                  w-28
                  h-28
                  rounded-full
                  bg-primary/10
                  border-2
                  border-primary/20
                  flex
                  items-center
                  justify-center
                  text-5xl
                  font-heading
                  text-primary
                  select-none
                  transition-all duration-200
                  hover:bg-primary/20
                  hover:shadow-[0_0_8px_2px_hsl(43,40%,20%)]
                "
              >
                {user?.username[0].toUpperCase()}
              </div>
              <h1 className="font-heading text-2xl mt-5">
                {user?.username}
              </h1>
              <p className="text-sm text-muted-foreground">
                @{user?.username.toLowerCase()}
              </p>
              <p className="text-sm text-muted-foreground">
                dołączył: {new Date().toLocaleDateString("pl-PL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
                <span
                  className="
                    mt-4
                    px-3
                    py-1
                    rounded-full
                    bg-primary/15
                    border
                    border-primary/20
                    text-primary
                    text-sm
                    flex
                    items-center
                    gap-2
                  "
                >
                  {user?.role === "admin" ? (
                    <>
                      <Shield size={14} />
                      Administrator
                    </>
                  ): (
                    <>
                      <User size={14} />
                      Użytkownik
                    </>
                  )}
                </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h1>Informacje</h1>
              <hr />
              <p>Imię: {user?.name}</p>
              <p>Nazwisko: {user?.surname}</p>
              <p>Email: {user?.email}</p>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}