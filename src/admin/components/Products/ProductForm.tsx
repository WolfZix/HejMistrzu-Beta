import { useState } from "react";
import FormInput from "@/components/Forms/FormInput";
import FormTextarea from "@/components/Forms/FormTextarea";
import FormToggle from "@/components/Forms/FormToggle";
import FormSelect from "@/components/Forms/FormSelect";
import FormFileInput from "@/components/Forms/FormFileInput";
import type { ProductFormData } from "@/types/store";

type ProductFormProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
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

export default function ProductForm({
  formData,
  setFormData,
  handleSubmit,
  closeModal,
}: ProductFormProps) {
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
        <div className="col-span-3 flex gap-4 items-end justify-between">
          <FormInput
            label="Nazwa produktu"
            value={formData.name}
            onChange={(value) => setFormData((prev) => ({
              ...prev,
              name: value,
            }))}
            placeholder="Figurki Warhammer 40K"
            required
          />

          <FormSelect
            label="Kategoria"
            containerClassname="w-full"
            value={formData.category}
            onChange={(value) => setFormData((prev) => ({
                      ...prev,
                      category: value,
                    }))}
            options={categories.map(category => ({
                value: category,
                label: category
            }))}
          />

          <FormSelect
            label="Podkategoria"
            containerClassname="w-full"
            value={subcategory}
            onChange={setSubcategory}
            options={subcategories.map(subcategory => ({
              value: subcategory,
              label: subcategory,
            }))}
          />
        </div>
      </div>

      {/* ROW 2 */}

      <div className="grid grid-cols-3 gap-4">
        <FormTextarea
          className="col-span-2"
          label="Opis"
          value={formData.description}
          onChange={(value) => setFormData((prev) => ({
              ...prev,
              description: value,
            }))}
          placeholder="Ładnie się świeci..."
          rows={6}
          required
        />

        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-3">
            <FormFileInput
              label="Zdjęcie"
              required
            />
          </div>
          <div className="col-span-3 flex justify-between gap-4">
            <FormToggle
              label="Preorder"
              value={preorder}
              onChange={setPreorder}
            />

            <FormToggle
              label="Promocja"
              value={onSale}
              onChange={setOnSale}
            />

            <FormToggle
              label="Widoczny"
              value={visible}
              onChange={setVisible}
            />
          </div>
        </div>
      </div>

      {/* ROW 3 */}

      <div className="grid grid-cols-3 gap-4">
        <FormInput
          label="Cena"
          value={formData.price}
          onChange={(value) => setFormData((prev) => ({
              ...prev,
              price: value,
            }))}
          type="number"
          placeholder="9999,99"
          required
        />

        <FormInput
          label="Cena promocyjna"
          value={formData.salePrice}
          onChange={(value) => setFormData((prev) => ({
              ...prev,
              salePrice: value,
            }))}
          type="number"
          placeholder="9999,99"
        />

        <FormInput
            label="Stan magazynowy"
            value={formData.stock}
            onChange={(value) => setFormData((prev) => ({
              ...prev,
              stock: value,
            }))}
            type="number"
            placeholder="9999"
            required
          />
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
            transition-all duration-200
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
            duration-200
          "
        >
          Dodaj
        </button>
      </div>
    </form>
  );
}