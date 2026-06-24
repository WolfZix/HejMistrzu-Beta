import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type AddProductFormProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;

  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;

  regularPrice: string;
  setRegularPrice: React.Dispatch<React.SetStateAction<string>>;

  salePrice: string;
  setSalePrice: React.Dispatch<React.SetStateAction<string>>;

  stock: string;
  setStock: React.Dispatch<React.SetStateAction<string>>;

  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;

  handleSubmit: (e: React.FormEvent) => void;
  closeModal: () => void;
};

const categories = [
  "Pokemon",
  "Magic",
  "Warhammer",
  "RPG",
  "Planszówki",
  "Akcesoria",
];

const subcategories = [
  "Booster",
  "ETB",
  "Deck",
  "Sleeves",
  "Dice",
];

export default function AddProductForm({
  name,
  setName,
  description,
  setDescription,
  regularPrice,
  setRegularPrice,
  salePrice,
  setSalePrice,
  stock,
  setStock,
  category,
  setCategory,
  handleSubmit,
  closeModal,
}: AddProductFormProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSubcategoryOpen, setIsSubcategoryOpen] = useState(false);
  const [subcategory, setSubcategory] = useState("");
  const [preorder, setPreorder] = useState(false);
  const [onSale, setOnSale] = useState(false);
  const [visible, setVisible] = useState(true);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      {/* ROW 1 */}

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block mb-1">
            Nazwa produktu
          </label>

          <input
            required
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="
              w-full
              p-3
              rounded-lg
              bg-background/50
              border border-primary/20
              focus:border-primary
              focus:ring-2
              focus:ring-primary/50
              outline-none
            "
          />
        </div>

        <div className="relative">
          <label className="block mb-1">
            Kategoria
          </label>

          <button
            type="button"
            onClick={() =>
              setIsCategoryOpen(
                !isCategoryOpen
              )
            }
            className="
              w-full
              p-3
              rounded-lg
              bg-background/50
              border border-primary/20
              flex
              items-center
              justify-between
            "
          >
            <span>
              {category ||
                "Wybierz kategorię"}
            </span>

            <ChevronDown size={18} />
          </button>

          <AnimatePresence>
            {isCategoryOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                className="
                  absolute
                  top-full
                  mt-1
                  z-50
                  w-full
                  rounded-xl
                  border
                  border-primary/20
                  bg-card
                  p-1
                "
              >
                {categories.map(
                  (category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setCategory(
                          category
                        );
                        setIsCategoryOpen(
                          false
                        );
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
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <label className="block mb-1">
            Podkategoria
          </label>

          <button
            type="button"
            onClick={() =>
              setIsSubcategoryOpen(
                !isSubcategoryOpen
              )
            }
            className="
              w-full
              p-3
              rounded-lg
              bg-background/50
              border border-primary/20
              flex
              items-center
              justify-between
            "
          >
            <span>
              {subcategory ||
                "Wybierz podkategorię"}
            </span>

            <ChevronDown size={18} />
          </button>

          <AnimatePresence>
            {isSubcategoryOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                className="
                  absolute
                  top-full
                  mt-1
                  z-50
                  w-full
                  rounded-xl
                  border
                  border-primary/20
                  bg-card
                  p-1
                "
              >
                {subcategories.map(
                  (subcategory) => (
                    <button
                      key={subcategory}
                      type="button"
                      onClick={() => {
                        setSubcategory(
                          subcategory
                        );
                        setIsSubcategoryOpen(
                          false
                        );
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
                      {subcategory}
                    </button>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ROW 2 */}

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <label className="block mb-1">
            Opis
          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="
              w-full
              p-3
              rounded-lg
              bg-background/50
              border border-primary/20
              resize-none
              focus:border-primary
              focus:ring-2
              focus:ring-primary/50
              outline-none
            "
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
        <div className="col-span-3">
          <label className="block mb-1">
            Zdjęcie
          </label>

          <input
            type="file"
            className="
              w-full
              p-3
              rounded-lg
              bg-background/50
              border border-primary/20
            "
          />
        </div>
        <div className="border">
          <div>
            <label className="block mb-2">
              Preorder
            </label>

            <button
              type="button"
              onClick={() => setPreorder(!preorder)}
              className={`
                w-full
                h-12
                rounded-lg
                border
                transition-all
                ${
                  preorder
                    ? "bg-primary text-black border-primary"
                    : "border-primary/20 bg-background/50"
                }
              `}
            >
              {preorder ? "Tak" : "Nie"}
            </button>
          </div>

          <div>
            <label className="block mb-2">
              W promocji
            </label>

            <button
              type="button"
              onClick={() => setOnSale(!onSale)}
              className={`
                w-full
                h-12
                rounded-lg
                border
                transition-all
                ${
                  onSale
                    ? "bg-primary text-black border-primary"
                    : "border-primary/20 bg-background/50"
                }
              `}
            >
              {onSale ? "Tak" : "Nie"}
            </button>
          </div>

          <div>
            <label className="block mb-2">
              Widoczny
            </label>

            <button
              type="button"
              onClick={() => setVisible(!visible)}
              className={`
                w-full
                h-12
                rounded-lg
                border
                transition-all
                ${
                  visible
                    ? "bg-primary text-black border-primary"
                    : "border-primary/20 bg-background/50"
                }
              `}
            >
              {visible ? "Tak" : "Nie"}
            </button>
          </div>
        </div>
        </div>
      </div>

      {/* ROW 3 */}

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block mb-1">
            Cena
          </label>

          <input
            type="number"
            value={regularPrice}
            onChange={(e) =>
              setRegularPrice(
                e.target.value
              )
            }
            className="
              w-full
              p-3
              rounded-lg
              bg-background/50
              border border-primary/20
            "
          />
        </div>

        <div>
          <label className="block mb-1">
            Cena promocyjna
          </label>

          <input
            type="number"
            value={salePrice}
            onChange={(e) =>
              setSalePrice(
                e.target.value
              )
            }
            className="
              w-full
              p-3
              rounded-lg
              bg-background/50
              border border-primary/20
            "
          />
        </div>

        <div>
          <label className="block mb-1">
            Cena przed promocją
          </label>

          <input
            type="number"
            className="
              w-full
              p-3
              rounded-lg
              bg-background/50
              border border-primary/20
            "
          />
        </div>
      </div>

      {/* ROW 4 */}

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block mb-1">
            Stan magazynowy
          </label>

          <input
            type="number"
            value={stock}
            onChange={(e) =>
              setStock(e.target.value)
            }
            className="
              w-full
              p-3
              rounded-lg
              bg-background/50
              border border-primary/20
            "
          />
        </div>
      </div>

      {/* BUTTONS */}

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
            hover:bg-primary
            transition-all
          "
        >
          Dodaj
        </button>
      </div>
    </form>
  );
}