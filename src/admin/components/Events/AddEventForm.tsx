import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type AddEventFormProps = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;

  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;

  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;

  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;

  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;

  totalSlots: string;
  setTotalSlots: React.Dispatch<React.SetStateAction<string>>;

  handleSubmit: (e: React.FormEvent) => void;
  closeModal: () => void;
};

const eventCategories = [
  "Magic",
  "Pokemon",
  "Warhammer",
  "RPG",
  "Inne",
];

export default function AddEventForm({
  title, setTitle,
  description, setDescription,
  category, setCategory,
  date, setDate,
  time, setTime,
  price, setPrice,
  totalSlots, setTotalSlots,
  handleSubmit,
  closeModal,
}: AddEventFormProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
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
      required
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="
        w-full
        bg-background/50
        border border-primary/20
        rounded-lg
        p-3
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

  <div>
    <label className="mb-1 block">
      Opis
    </label>

    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      rows={2}
      className="
        w-full
        bg-background/50
        border border-primary/20
        rounded-lg
        p-3
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
  </div>

  <div>
    <label className="mb-1 block">
      Zdjęcie
    </label>

    <input
      required
      type="file"
      className="
        w-full
        bg-background/50
        border border-primary/20
        rounded-lg
        p-3
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

  <div className="grid grid-cols-3 gap-4">
    <div className="w-full">
      <label className="mb-1 block">
        Cena
      </label>

      <input
        required
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="
          w-full
          bg-background/50
          border border-primary/20
          rounded-lg
          p-3
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

    <div className="w-full">
      <label className="mb-1 block">
        Ilość miejsc
      </label>

      <input
        required
        type="number"
        value={totalSlots}
        onChange={(e) => setTotalSlots(e.target.value)}
        className="
          w-full
          bg-background/50
          border border-primary/20
          rounded-lg
          p-3
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
          p-3
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
          {category || "Wybierz kategorię"}
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
              top-full
              mt-1
              z-50
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
                  setCategory(category);
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
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="mb-1 block">
        Data
      </label>

      <input
        required
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="
          w-full
          bg-background/50
          border border-primary/20
          rounded-lg
          p-3
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

    <div>
      <label className="mb-1 block">
        Godzina
      </label>

      <input
        required
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="
          w-full
          bg-background/50
          border border-primary/20
          rounded-lg
          p-3
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