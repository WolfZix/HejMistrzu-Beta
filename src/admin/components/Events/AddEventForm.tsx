import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import type { EventFormData } from "@/types/event";
import type { EventFormErrors } from "@/types/event";
import axios from "axios";

type AddEventFormProps = {
  formData: EventFormData;
  setFormData: React.Dispatch<React.SetStateAction<EventFormData>>;
  closeModal: () => void;
};

const eventCategories = [
  "Magic",
  "Pokemon",
  "Warhammer",
  "RPG",
  "Inne",
];

export default function AddEventForm({ formData, setFormData, closeModal }: AddEventFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [errors, setErrors] = useState<EventFormErrors>({
    title: "",
    description: "",
    image: "",
    category: "",
    date: "",
    time: "",
    price: "",
    totalSlots: "",
    link: "",
    location: "",
  });
  const validateForm = (data: EventFormData) => {
    const newErrors: EventFormErrors = {
      title: "",
      description: "",
      image: "",
      category: "",
      date: "",
      time: "",
      price: "",
      totalSlots: "",
      link: "",
      location: "",
    };

    if (data.title.trim() === "") { newErrors.title = "Podaj tytuł wydarzenia" }
    if (data.description.trim() === "") { newErrors.description = "Podaj opis wydarzenia" }
    if (!data.image) { newErrors.image = "Dodaj zdjęcie wydarzenia" }
    if (!eventCategories.includes(data.category)) { newErrors.category = "Wybierz kategorię" }
    if (data.date.trim() === "") {
      newErrors.date = "Wybierz datę"
    } else {
      const selectedDate = new Date(data.date);
      selectedDate.setHours(0, 0, 0, 0);
      if (selectedDate < today) { newErrors.date = "Data nie może być z przeszłości" }
    }
    if (data.time.trim() === "") { newErrors.time = "Wybierz godzinę" }
    if (data.price.trim() === "") { newErrors.price = "Podaj cenę" }
    else if (Number(data.price) <= 0) { newErrors.price = "Cena musi być większa od 0" }
    if (data.totalSlots.trim() === "") { newErrors.totalSlots = "Podaj liczbę miejsc" }
    else if (Number(data.totalSlots) <= 0) { newErrors.totalSlots = "Liczba miejsc musi być większa od 0" }
    if (data.link.trim() !== "" && !/^https?:\/\/.+/i.test(data.link.trim())) { newErrors.link = "Podaj poprawny adres URL" }
    if (!location) { newErrors.location = "Podaj lokalizację" }
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm(formData)) { return }
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      if (formData.image) { data.append('image', formData.image) }
      data.append('category', formData.category);
      data.append('eventDate', formData.date);
      data.append('eventTime', formData.time);
      data.append('maxSlots', formData.totalSlots);
      data.append('price', formData.price);
      data.append('link', formData.link);
      data.append('location', formData.location);
      await axios.post("http://localhost:3000/events", data);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
  onSubmit={handleSubmit}
  className="flex flex-col space-y-4"
>
  <div>
    <label className="mb-1 block">
      Tytuł
    </label>

    <input
      type="text"
      value={formData.title}
      onChange={(e) => setFormData({
        ...formData,
        title: e.target.value,
        })}
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
      {errors.title}
    </p>
  </div>

  <div>
    <label className="mb-1 block">
      Opis
    </label>

    <textarea
      value={formData.description}
      onChange={(e) => setFormData({
        ...formData,
        description: e.target.value,
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
        transition-all
        duration-300
        text-primary
      "
    />
    <p className="text-red-500 text-xs min-h-4">
      {errors.description}
    </p>
  </div>

  <div className="grid grid-cols-4 gap-x-4 items-end">
    <div className="col-span-3">
      <label className="mb-1 block">
        Zdjęcie
      </label>

      <input
        ref={fileInputRef}
        type="file"
        name="image"
        onChange={(e) => setFormData({
        ...formData,
        image: e.target.files?.[0] ?? null,
        })}
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
    </div>
    <button
    type="button"
    onClick={() =>{
      if (fileInputRef.current) { fileInputRef.current.value = "" }
      setFormData({
        ...formData,
        image: null,
      })
    }
    }
    className="
    border
    p-3
    w-full h-fit
    rounded-lg
    border-red-500/30 text-red-500/50 bg-transparent
    hover:border-red-500 hover:text-red-500 hover:bg-red-500/5
    transition-all duration-200
    ">
      Usuń zdjęcie
    </button>
    <p className="text-red-500 text-xs min-h-4 col-span-4">
      {errors.image}
    </p>
  </div>

  <div className="grid grid-cols-3 gap-4">
    <div className="w-full">
      <label className="mb-1 block">
        Cena
      </label>

      <input
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({
        ...formData,
        price: e.target.value,
        })}
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
        {errors.price}
      </p>
    </div>

    <div className="w-full">
      <label className="mb-1 block">
        Ilość miejsc
      </label>

      <input
        type="number"
        value={formData.totalSlots}
        onChange={(e) => setFormData({
        ...formData,
        totalSlots: e.target.value,
        })}
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
        {errors.totalSlots}
      </p>
    </div>
    <div className="relative w-full">
      <label className="mb-1 block">
        Kategoria
      </label>

      <button
        type="button"
        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        className="
          bg-background/50
          border border-primary/20
          rounded-lg
          p-2
          flex
          w-full
          items-center
          justify-between
          transition-all
          duration-300
          hover:border-primary/40
        "
      >
        <span>
          {formData.category || "Wybierz kategorię"}
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            isCategoryOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      

      <AnimatePresence>
        {isCategoryOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="
              absolute
              z-50
              mt-1
              w-full
              rounded-xl
              overflow-hidden
              border
              border-primary/20
              bg-card
              p-1
            "
          >
            {eventCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setFormData({
                  ...formData,
                  category: category,
                  })
                  setIsCategoryOpen(false);
                }}
                className="
                  w-full
                  text-left
                  p-2
                  rounded-md
                  hover:bg-primary
                  hover:text-black
                "
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <p className="text-red-500 text-xs min-h-4">
          {errors.category}
      </p>
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="mb-1 block">
        Data
      </label>

      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({
        ...formData,
        date: e.target.value,
        })}
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
        {errors.date}
      </p>
    </div>

    <div>
      <label className="mb-1 block">
        Godzina
      </label>

      <input
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({
        ...formData,
        time: e.target.value,
        })}
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
        {errors.time}
      </p>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="mb-1 block">
        Link do zapisów <span className="text-muted-foreground text-sm">(opcjonalnie)</span>
      </label>

      <input
        type="text"
        value={formData.link}
        onChange={(e) => setFormData({
        ...formData,
        link: e.target.value,
        })}
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
        {errors.link}
      </p>
    </div>
    <div>
      <label className="mb-1 block">
        Lokalizacja
      </label>

      <input
        type="text"
        value={formData.location}
        onChange={(e) => setFormData({
        ...formData,
        location: e.target.value,
        })}
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
        {errors.location}
      </p>
    </div>
  </div>

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
      Dodaj
    </button>
  </div>
</form>
  )
}