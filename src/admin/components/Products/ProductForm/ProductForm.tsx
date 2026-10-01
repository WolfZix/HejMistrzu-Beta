import type { ProductFormData } from "@/types/store";
import { BasicInformation } from "./BasicInformation";
import { ImagesSection } from "./ImagesSection";
import { PriceSection } from "./PriceSection";
import { StockSection } from "./StockSection";
import { VariableSection } from "./VariableSection";
import { DeliverySection } from "./DeliverySection";
import { CategoriesSection } from "./CategoriesSection";
import { AdvancedSection } from "./AdvancedSection";

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 xl:max-w-xl">
      <BasicInformation formData={formData} setFormData={setFormData} />
      <ImagesSection formData={formData} setFormData={setFormData} />
      <PriceSection formData={formData} setFormData={setFormData} />
      <StockSection formData={formData} setFormData={setFormData} />
      <VariableSection formData={formData} setFormData={setFormData} onAddVariation={onAddVariation} />
      <DeliverySection formData={formData} setFormData={setFormData} />
      <CategoriesSection formData={formData} setFormData={setFormData} categories={categories} subcategories={subcategories} />
      <AdvancedSection formData={formData} setFormData={setFormData} />
      <div className="flex gap-3 border-t border-primary/10 pt-6">
        <button
          type="button"
          onClick={closeModal}
          className="flex-1 rounded-md border border-muted-foreground/20 py-2 transition-all duration-200 hover:bg-foreground/10"
        >
          Anuluj
        </button>
        <button
          type="submit"
          className="flex-1 rounded-md bg-primary/70 py-2 font-heading font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary"
        >
          Dodaj
        </button>
      </div>
    </form>
  );
}