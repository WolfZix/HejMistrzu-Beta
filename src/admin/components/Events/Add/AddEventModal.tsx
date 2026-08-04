import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import AddEventForm from "./AddEventForm";
import type { EventFormData, Event } from "@/types/event";
import EventCard from "@/components/ui/EventCard";

type AddEventModalProps = {
  isAddOpen: boolean;
  onClose: () => void;
  onEventCreated: () => void;
};

export default function AddEventModal({
  isAddOpen,
  onClose,
  onEventCreated,
}: AddEventModalProps) {
  const [formData, setFormData] = useState<EventFormData>({
    title: "",
    description: "",
    category: "",
    date: "",
    time: "",
    image: null,
    price: "",
    totalSlots: "",
    link: "",
    location: "",
  })

  const [previewImage, setPreviewImage] = useState<string>();

  useEffect(() => {
    if (!formData.image) {
      setPreviewImage(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(formData.image);
    setPreviewImage(objectUrl);
    return () => {
      URL.revokeObjectURL(objectUrl);
    }
  }, [formData.image])

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
      title: '',
      description: '',
      category: '',
      date: '',
      time: '',
      image: null,
      price: '',
      totalSlots: '',
      link: '',
      location: '',
    })
    onClose();
  }

  const previewEvent: Event = {
    id: 0,
    title: formData.title || "Nowe wydarzenia",
    description: formData.description || "Tutaj pojawi się opis wydarzenia",
    category: formData.category || "Inne",
    date: formData.date || new Date().toISOString().split("T")[0],
    startTime: formData.time || "12:00",
    image: "",
    location: formData.location || "Hej Mistrzu, Rumia",
    maxSlots: Number(formData.totalSlots) || 20,
    price: Number(formData.price) || 0,
    link: formData.link,
  };

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
              max-w-2xl
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

            <div className="">
              <h2 className="font-heading text-center text-2xl mb-2 font-semibold">
                Dodaj Event
              </h2>
            </div>

            <AddEventForm
              formData={formData}
              setFormData={setFormData}
              closeModal={closeModal}
              onEventCreated={onEventCreated}
            />
          </motion.div>
          <EventCard event={previewEvent} isPreview imageSrc={previewImage} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}