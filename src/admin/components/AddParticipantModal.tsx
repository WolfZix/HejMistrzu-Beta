import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import FormInput from "@/components/Forms/FormInput";

type AddParticipantModalProps = {
  isAddOpen: boolean;
  eventId: number | null,
  onClose: () => void;
  onParticipantAdded: () => void;
};

export default function AddParticipantModal({
  isAddOpen,
  eventId,
  onClose,
  onParticipantAdded,
}: AddParticipantModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    pokemonId: "",
    nickname: "",
  })

  useEffect(() => {
    document.body.style.overflow = isAddOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isAddOpen]);

  function closeModal() {
    setFormData({
      name: '',
      surname: '',
      email: '',
      pokemonId: '',
      nickname: '',
    })
    onClose();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (eventId === null) return;
    const participantData = {
      eventId,
      userId: null,
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      pokemonId: formData.pokemonId || null,
      nickname: formData.nickname || null,
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/eventParticipants`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(participantData),
      });
      const data = await response.json();
      if (!response.ok) {
        console.error(data.message);
        return;
      }
      onParticipantAdded();
      closeModal();
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <AnimatePresence>
      {isAddOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={closeModal}
          className="
            fixed
            inset-0
            z-50
            items-center
            justify-center
            gap-40
            flex
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
              max-w-lg
              relative
              rounded-xl
              border
              border-primary/30
              bg-card
              px-6
              pb-6
              pt-6
              shadow-[0_0_15px_1px_hsl(43,50%,10%)]
              col-span-2
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

            <div>
              <h2 className="font-heading text-center text-2xl mb-2 font-semibold">
                Dodaj uczestnika
              </h2>
            </div>
            <form
            onSubmit={handleSubmit}
            className="space-y-4"
            >
              <FormInput
              label="Imię"
              required={true}
              value={formData.name}
              onChange={(value) => setFormData((prev) => ({
                ...prev,
                name: value
              }))}
              />
              <FormInput
              label="Nazwisko"
              required={true}
              value={formData.surname}
              onChange={(value) => setFormData((prev) => ({
                ...prev,
                surname: value
              }))}
              />
              <FormInput
              label="Email"
              value={formData.email}
              required={true}
              onChange={(value) => setFormData((prev) => ({
                ...prev,
                email: value
              }))}
              />
              <FormInput
              label="Pokemon ID"
              value={formData.pokemonId}
              required={false}
              placeholder="opcjonalnie"
              onChange={(value) => setFormData((prev) => ({
                ...prev,
                pokemonId: value
              }))}
              />
              <FormInput
              label="Nickname"
              value={formData.nickname}
              required={false}
              placeholder="opcjonalnie"
              onChange={(value) => setFormData((prev) => ({
                ...prev,
                nickname: value
              }))}
              />
            <div className="w-full flex justify-end mt-4">
              <button className="px-4 py-2 bg-primary text-black rounded-lg flex gap-2 items-center hover:bg-primary/80 transition-all duration-200">
                <Plus size={18} />Dodaj
              </button>
            </div>
          </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}