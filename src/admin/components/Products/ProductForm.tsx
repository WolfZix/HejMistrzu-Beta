import { useState } from "react";
import FormInput from "@/components/Forms/FormInput";
import FormTextarea from "@/components/Forms/FormTextarea";
import FormToggle from "@/components/Forms/FormToggle";
import FormSelect from "@/components/Forms/FormSelect";
import FormFileInput from "@/components/Forms/FormFileInput";
import type { ProductFormData } from "@/types/store";
import { Plus, X } from "lucide-react";

type ProductFormProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
  handleSubmit: (e: React.FormEvent) => void;
  closeModal: () => void;
  onAddVariation: () => void;
};

const categories = [
  "Pokemon",
  "Magic",
  "Warhammer",
  "RPG",
  "Inne",
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
  onAddVariation,
}: ProductFormProps) {

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
            value={formData.subcategory}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                subcategory: value,
              }))
            }
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
              onChange={(file) =>
                setFormData((prev) => ({
                  ...prev,
                  image: file,
                }))
              }
            />
          </div>
          <div className="col-span-3 flex justify-between gap-4">
            <FormToggle
              label="Preorder"
              value={formData.preorder}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  preorder: value,
                }))
              }
            />

            <FormToggle
              label="Promocja"
              value={formData.onSale}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  onSale: value,
                }))
              }
            />

            <FormToggle
              label="Widoczny"
              value={formData.visible}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  visible: value,
                }))
              }
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

      {/* VARIATIONS */}
      <div className="mt-6 border-t border-primary/10 pt-5">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium">
              Warianty produktu
            </h3>

            <p className="text-xs text-muted-foreground">
              Opcjonalne warianty z własną ceną, stanem i zdjęciem.
            </p>
          </div>

          <button
            type="button"
            onClick={onAddVariation}
            className="
              flex items-center gap-2
              rounded-lg
              border border-primary/30
              px-3 py-2
              text-sm
              text-primary
              hover:bg-primary/10
              transition-colors
            "
          >
            <Plus size={16} />
            Dodaj wariant
          </button>
        </div>

        {formData.variations.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {formData.variations.map((variation, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-2
                  rounded-full
                  border border-primary/30
                  bg-primary/10
                  px-3 py-1.5
                  text-sm
                "
              >
                <span>{variation.name}</span>

                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      variations: prev.variations.filter(
                        (_, variationIndex) => variationIndex !== index
                      ),
                    }));
                  }}
                  className="
                    rounded-full
                    p-0.5
                    text-muted-foreground
                    hover:bg-destructive/10
                    hover:text-destructive
                    transition-colors
                  "
                  aria-label={`Usuń wariant ${variation.name}`}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}

        {formData.variations.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Brak wariantów.
          </p>
        )}
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