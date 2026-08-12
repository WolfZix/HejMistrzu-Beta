import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Reservation, ReservationFormData } from "@/types/reservation";
import EditReservationForm from "./EditReservationForm";

type EditReservationModalProps = {
  isOpen: boolean;
  reservation: Reservation;
  onClose: () => void;
  onReservationUpdated: () => void;
}

const BOOKING_OPTIONS = ['Gralnia', 'Sesja RPG']
const PEOPLE_COUNT_OPTIONS = [1, 2, 3, 4];
const STATUS_OPTIONS = ['Potwierdzona', 'Anulowana'];
const DURATION_OPTIONS = [
  {value: 3, label: "3 godziny"},
  {value: 5, label: "5 godzin"},
  {value: 0, label: "Bez limitu"},
]
const HOUR_OPTIONS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
]
const INITIAL_FORM_DATA: ReservationFormData = {
  fullName: '',
  email: '',
  phone: '',
  reservationDate: '',
  reservationTime: '',
  duration: null,
  peopleCount: null,
  notes: '',
  status: '',
}

export default function EditReservationModal({
  isOpen,
  reservation,
  onClose,
  onReservationUpdated,
}: EditReservationModalProps) {
  const [isSessionOpen, setIsSessionOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isPeopleCountOpen, setIsPeopleCountOpen] = useState(false);
  const [isHourOpen, setIsHourOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [formData, setFormData] = useState<ReservationFormData>(INITIAL_FORM_DATA)
  const requiresDuration = formData.duration !== null;
    
  useEffect(() => {
  if (!reservation) return;

  setFormData({
    fullName: reservation.fullName,
    email: reservation.email,
    phone: reservation.phone,
    reservationDate: reservation.reservationDate,
    reservationTime: reservation.reservationTime,
    duration: reservation.duration,
    peopleCount: reservation.peopleCount,
    notes: reservation.notes,
    status: reservation.status,
  });
}, [reservation]);

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function closeModal() {
    setFormData(INITIAL_FORM_DATA);
    setIsSessionOpen(false);
    setIsTimeOpen(false);
    setIsPeopleCountOpen(false);
    setIsHourOpen(false);
    onClose();
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
              max-w-xl
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
                Edytuj Rezerwacje
              </h2>
            </div>

            <EditReservationForm
              reservation={reservation}
              formData={formData}
              setFormData={setFormData}
              closeModal={closeModal}
              onReservationUpdated={onReservationUpdated}
              requiresDuration={requiresDuration}
              bookingOptions={BOOKING_OPTIONS}
              durationOptions={DURATION_OPTIONS}
              peopleCountOptions={PEOPLE_COUNT_OPTIONS}
              hourOptions={HOUR_OPTIONS}
              statusOptions={STATUS_OPTIONS}
              isSessionOpen={isSessionOpen}
              setIsSessionOpen={setIsSessionOpen}
              isTimeOpen={isTimeOpen}
              setIsTimeOpen={setIsTimeOpen}
              isPeopleCountOpen={isPeopleCountOpen}
              setIsPeopleCountOpen={setIsPeopleCountOpen}
              isHourOpen={isHourOpen}
              setIsHourOpen={setIsHourOpen}
              isStatusOpen={isStatusOpen}
              setIsStatusOpen={setIsStatusOpen}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}