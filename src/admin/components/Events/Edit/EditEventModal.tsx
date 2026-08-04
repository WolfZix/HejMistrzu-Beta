import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import EditEventForm from "./EditEventForm";
import type { EventFormData, Event } from "@/types/event";
import EventCard from "@/components/ui/EventCard";

type EditEventModalProps = {
  isOpen: boolean;
  event: Event;
  onClose: () => void;
  onEventUpdated: () => void;
};

export default function EditEventModal({
  isOpen,
  event,
  onClose,
  onEventUpdated,
}: EditEventModalProps) {
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
  const [removeImage, setRemoveImage] = useState(false);

  useEffect(() => {
    if (!formData.image) {
      setPreviewImage(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(formData.image);
    setRemoveImage(false);
    setPreviewImage(objectUrl);
    return () => {
      URL.revokeObjectURL(objectUrl);
    }
  }, [formData.image])

  useEffect(() => {
    if (!event) return;
    setFormData({
      title: event.title,
      description: event.description,
      category: event.category,
      date: event.date,
      time: event.startTime.slice(0,5),
      image: null,
      price: event.price.toString(),
      totalSlots: event.maxSlots.toString(),
      link: event.link,
      location: event.location,
    })
  }, [event]);

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

  function removePreviewImage() {
    setRemoveImage(true);
    setPreviewImage(undefined);
    setFormData((prev) => ({
      ...prev,
      image: null,
    }));
  }

  const previewEvent: Event = {
    id: 0,
    title: formData.title || "Nowe wydarzenia",
    description: formData.description || "Tutaj pojawi się opis wydarzenia",
    category: formData.category || "Inne",
    date: formData.date || new Date().toISOString().split("T")[0],
    startTime: formData.time || "12:00",
    image: removeImage ? "" : previewImage || event.image,
    location: formData.location || "Hej Mistrzu, Rumia",
    maxSlots: Number(formData.totalSlots) || 20,
    price: Number(formData.price) || 0,
    link: formData.link,
  };

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
                Edytuj Event
              </h2>
            </div>

            <EditEventForm
              event={event}
              formData={formData}
              setFormData={setFormData}
              closeModal={closeModal}
              onEventUpdated={onEventUpdated}
              onRemoveImage={removePreviewImage}
              removeImage={removeImage}
            />
          </motion.div>
          <EventCard event={previewEvent} isPreview imageSrc={previewImage} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}