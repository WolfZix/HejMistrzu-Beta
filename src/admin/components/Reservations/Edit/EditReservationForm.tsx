import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Reservation, ReservationFormData } from "@/types/reservation";
import type { ReservationFormErrors } from "@/types/reservation";
import axios from "axios";

type EditReservationFormProps = {
  reservation: Reservation;
  formData: ReservationFormData;
  setFormData: React.Dispatch<React.SetStateAction<ReservationFormData>>;
  closeModal: () => void;
  onReservationUpdated: () => void;
  requiresDuration: boolean;
  bookingOptions: string[];
  durationOptions: {value: number, label: string}[];
  peopleCountOptions: number[];
  hourOptions: string[];
  statusOptions: string[];
  isSessionOpen: boolean;
  setIsSessionOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isTimeOpen: boolean;
  setIsTimeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isPeopleCountOpen: boolean;
  setIsPeopleCountOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isHourOpen: boolean;
  setIsHourOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isStatusOpen: boolean;
  setIsStatusOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EditReservationForm({
  reservation,
  formData, setFormData,
  closeModal,
  onReservationUpdated,
  requiresDuration,
  bookingOptions,
  durationOptions,
  peopleCountOptions,
  hourOptions,
  statusOptions,
  isSessionOpen, setIsSessionOpen,
  isTimeOpen, setIsTimeOpen,
  isPeopleCountOpen, setIsPeopleCountOpen,
  isHourOpen, setIsHourOpen,
  isStatusOpen, setIsStatusOpen,
}: EditReservationFormProps) {
  const [errors, setErrors] = useState<ReservationFormErrors>({
    fullName: '',
    email: '',
    phone: '',
    reservationDate: '',
    reservationTime: '',
    duration: '',
    peopleCount: '',
    notes: '',
    status: '',
  });
  const [serverError, setServerError] = useState("");

  const validateForm = (data: ReservationFormData) => {
    const newErrors: ReservationFormErrors = {
      fullName: "",
      email: "",
      phone: "",
      reservationDate: "",
      reservationTime: "",
      duration: "",
      peopleCount: "",
      notes: "",
      status: "",
    };

    const nameRegex = 
      /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+(?:[-'][A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+)?(?:\s[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+(?:[-'][A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+)?)+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{9,15}$/;
    const phone = data.phone.replace(/\s/g, "");

    if (!nameRegex.test(data.fullName)) { newErrors.fullName = "Podaj poprawne imię i nazwisko" }
    if (!emailRegex.test(data.email)) { newErrors.email = "Niepoprawny email" }
    if (phone && !phoneRegex.test(phone)) {
      newErrors.phone = "Niepoprawny numer telefonu";
    }
    if (!data.reservationDate) { newErrors.reservationDate = "Wybierz datę rezerwacji" }
    if (!data.reservationTime) { newErrors.reservationTime = "Wybierz godzinę rezerwacji" }
    if (data.duration !== null) {
      if (
        data.duration !== 3 &&
        data.duration !== 5 &&
        data.duration !== 0
      ) { newErrors.duration = "Niepoprawna długość sesji" }
    } else {
      if (
        data.peopleCount === null ||
        data.peopleCount < 1 ||
        data.peopleCount > 4
      ) { newErrors.peopleCount = "Wybierz liczbę osób" }
    }

    if (
      data.status !== "Oczekująca" &&
      data.status !== "Potwierdzona" &&
      data.status !== "Anulowana"
    ) { newErrors.status = "Niepoprawny status" }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    if (!validateForm(formData)) { return }
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/reservations/${reservation.id}`, formData);
      onReservationUpdated();
      closeModal();
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        setServerError(error.response?.data?.message || "Nie udało się zaktualizować rezerwacji");
      } else {
        setServerError("Nie udało się zaktualizować rezerwacji");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex gap-5">
        <div className="w-full">
          <label className="mb-1 block">
            Imię i nazwisko
          </label>

          <input
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                fullName: e.target.value,
              })
            }
            className="
              w-full
              bg-background/50
              border border-primary/20
              rounded-lg
              p-2
              outline-none
              focus:border-primary
              focus:ring-2
              focus:ring-primary/50
              transition-all
              duration-300
              text-primary
            "
          />

          <p className="text-red-500 text-xs min-h-4">
            {errors.fullName}
          </p>
        </div>
        <div className="w-full">
          <label className="mb-1 block">
            Email
          </label>

          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="
              w-full
              bg-background/50
              border border-primary/20
              rounded-lg
              p-2
              outline-none
              focus:border-primary
              focus:ring-2
              focus:ring-primary/50
              transition-all
              duration-300
              text-primary
            "
          />

          <p className="text-red-500 text-xs min-h-4">
            {errors.email}
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="w-full">
        <label className="mb-1 block">
          Telefon
        </label>

        <input
          type="text"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
          className="
            w-full
            bg-background/50
            border border-primary/20
            rounded-lg
            p-2
            outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/50
            transition-all
            duration-300
            text-primary
          "
        />

        <p className="text-red-500 text-xs min-h-4">
          {errors.phone}
        </p>
      </div>

        <div className="space-y-1 w-full">
          <label className="mb-1 block">
            Status
          </label>

          <div className="relative">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsHourOpen(false);
                setIsTimeOpen(false);
                setIsPeopleCountOpen(false);
                setIsSessionOpen(false);
                setIsStatusOpen((prev) => !prev);
              }}
              className="
              text-left
              px-3
              flex
              items-center
              justify-between
              text-sm
              h-11
              w-full
              bg-background/50
              border border-primary/20
              rounded-lg
              p-2
              outline-none
              focus:border-primary
              focus:ring-2
              focus:ring-primary/50
              transition-all
              duration-300
              text-primary
              ">
              <span> {formData.status} </span>

              <ChevronDown
                size={14}
                className="text-foreground/30"
              />
            </button>

            <AnimatePresence>
              {isStatusOpen && (
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="
                  absolute
                  top-full
                  mt-1
                  z-50
                  left-0
                  text-sm
                  flex
                  flex-col
                  items-start
                  w-full
                  bg-background
                  border border-primary/20
                  rounded-lg
                  p-2
                  outline-none
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/50
                  transition-colors
                  duration-300
                  text-primary"
                >
                  {statusOptions
                  .filter((option) => option !== formData.status)
                  .map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          status: option,
                        })
                        setIsStatusOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div> 
      </div>

      <div className="flex gap-5">
        <div className="space-y-1 w-full">
          <label className="mb-1 block">
            Data
          </label>
          <input 
          value={formData.reservationDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              reservationDate: e.target.value,
            })
          }
          type="date"
          className="
          p-2
          outline-none
          focus:border-primary
          focus:ring-2
          focus:ring-primary/50
          transition-all
          duration-300
          text-primary
          bg-background/50
          border
          border-border
          rounded-lg
          h-11
          w-full
          px-3
          "/>
        </div>
        
        <div className="space-y-1 w-full">
          <label className="mb-1 block">
            Godzina
          </label>

          <div className="relative">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsStatusOpen(false);
                setIsSessionOpen(false);
                setIsTimeOpen(false);
                setIsPeopleCountOpen(false);
                setIsHourOpen((prev) => !prev);
              }}
              className="
              text-left
              px-3
              flex
              items-center
              justify-between
              text-sm
              h-11
              w-full
              bg-background/50
              border border-primary/20
              rounded-lg
              p-2
              outline-none
              focus:border-primary
              focus:ring-2
              focus:ring-primary/50
              transition-all
              duration-300
              text-primary
              ">
              <span> {formData.reservationTime.slice(0,5)} </span>

              <ChevronDown
                size={14}
                className="text-foreground/30"
              />
            </button>

            <AnimatePresence>
              {isHourOpen && (
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="
                  absolute
                  top-full
                  mt-1
                  z-50
                  left-0
                  text-sm
                  flex
                  flex-col
                  items-start
                  w-full
                  bg-background
                  border border-primary/20
                  rounded-lg
                  p-2
                  outline-none
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/50
                  transition-colors
                  duration-300
                  text-primary"
                >
                  {hourOptions.map((hour) => (
                    <button
                      key={hour}
                      type="button"
                      className="bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          reservationTime: hour,
                        })
                        setIsHourOpen(false);
                      }}
                    >
                      {hour}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="space-y-1 w-full">
          <label className="mb-1 block">
            Rodzaj rezerwacji
          </label>

          <div className="relative">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsStatusOpen(false);
                setIsHourOpen(false);
                setIsTimeOpen(false);
                setIsPeopleCountOpen(false);
                setIsSessionOpen((prev) => !prev);
              }}
              className="
              text-left
              px-3
              flex
              items-center
              justify-between
              text-sm
              h-11
              w-full
              bg-background/50
              border border-primary/20
              rounded-lg
              p-2
              outline-none
              focus:border-primary
              focus:ring-2
              focus:ring-primary/50
              transition-all
              duration-300
              text-primary
              ">
              <span> {formData.duration === null ? "Gralnia" : "Sesja RPG"} </span>

              <ChevronDown
                size={14}
                className="text-foreground/30"
              />
            </button>

            <AnimatePresence>
              {isSessionOpen && (
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="
                  absolute
                  top-full
                  mt-1
                  z-50
                  left-0
                  text-sm
                  flex
                  flex-col
                  items-start
                  w-full
                  bg-background
                  border border-primary/20
                  rounded-lg
                  p-2
                  outline-none
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/50
                  transition-colors
                  duration-300
                  text-primary"
                >
                  {bookingOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black"
                      onClick={() => {
                        if (option === "Gralnia") {
                          setFormData({
                            ...formData,
                            duration: null,
                            peopleCount: 4,
                          })
                        } else {
                          setFormData({
                            ...formData,
                            duration: 3,
                            peopleCount: null,
                          })
                        }
                        setIsSessionOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div> 
        {requiresDuration ? (
          <div className="space-y-1 w-full">
            <label className="mb-1 block">
              Ilość godzin
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsStatusOpen(false);
                  setIsHourOpen(false);
                  setIsSessionOpen(false);
                  setIsTimeOpen((prev) => !prev);
                }}
                className="
                text-left
                px-3
                flex
                items-center
                justify-between
                text-sm
                h-11
                w-full
                bg-background/50
                border border-primary/20
                rounded-lg
                p-2
                outline-none
                focus:border-primary
                focus:ring-2
                focus:ring-primary/50
                transition-all
                duration-300
                text-primary
                ">
                <span> 
                  {formData.duration === 0 
                    ? "Bez limitu" 
                    : formData.duration === 3
                      ? "3 godziny"
                      : "5 godzin"
                  }
                </span>

                <ChevronDown
                  size={14}
                  className="text-foreground/30"
                />
              </button>

              <AnimatePresence>
                {isTimeOpen && (
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="
                    absolute
                    top-full
                    mt-1
                    z-50
                    left-0
                    text-sm
                    flex
                    flex-col
                    items-start
                    w-full
                    bg-background
                    border border-primary/20
                    rounded-lg
                    p-2
                    outline-none
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/50
                    transition-colors
                    duration-300
                    text-primary"
                  >
                    {durationOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className="bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            duration: option.value,
                          })
                          setIsTimeOpen(false);
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ) : (
            <div className="space-y-1 w-full">
            <label className="mb-1 block">
              Ilość osób
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsStatusOpen(false);
                  setIsSessionOpen(false);
                  setIsHourOpen(false);
                  setIsTimeOpen(false);
                  setIsPeopleCountOpen((prev) => !prev);
                }}
                className="
                text-left
                px-3
                flex
                items-center
                justify-between
                text-sm
                h-11
                w-full
                bg-background/50
                border border-primary/20
                rounded-lg
                p-2
                outline-none
                focus:border-primary
                focus:ring-2
                focus:ring-primary/50
                transition-all
                duration-300
                text-primary
                ">
                <span>
                  {formData.peopleCount} {formData.peopleCount === 1 ? "osoba" : "osoby"}
                </span>

                <ChevronDown
                  size={14}
                  className="text-foreground/30"
                />
              </button>

              <AnimatePresence>
                {isPeopleCountOpen && (
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="
                    absolute
                    top-full
                    mt-1
                    z-50
                    left-0
                    text-sm
                    flex
                    flex-col
                    items-start
                    w-full
                    bg-background
                    border border-primary/20
                    rounded-lg
                    p-2
                    outline-none
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/50
                    transition-colors
                    duration-300
                    text-primary"
                  >
                    {peopleCountOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className="bg-transparent hover:bg-primary w-full text-left rounded-md p-2 hover:text-black"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            peopleCount: option,
                          })
                          setIsPeopleCountOpen(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      <div>
        <label className="mb-1 block">
          Notatki
        </label>
        <textarea
          value={formData.notes}
          onChange={(e) => setFormData({
            ...formData,
            notes: e.target.value,
            })}
          rows={2}
          className="
            w-full
            bg-background/50
            border border-primary/20
            rounded-lg
            p-2
            outline-none
            resize-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/50
            transition-colors
            duration-300
            text-primary
          "
        />
      </div>

      <AnimatePresence>
        {serverError && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-400 text-center"
          >
            {serverError}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={closeModal}
          className="
            flex-1
            py-2
            rounded-md
            border
            border-muted-foreground/20
            hover:bg-foreground/10
            hover:border-foreground/20
            hover:text-white
            transition-all
          "
        >
          Anuluj
        </button>

        <button
          type="submit"
          className="
            flex-1
            py-2
            rounded-md
            font-heading
            font-semibold
            bg-primary/70
            text-primary-foreground
            transition-all
            duration-300
            hover:bg-primary
            hover:shadow-[0_0_8px_4px_hsl(43,50%,30%)]
          "
        >
          Zapisz zmiany
        </button>
      </div>
    </form>
  )
}