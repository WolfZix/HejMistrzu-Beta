import { ProductFormData } from "@/types/store";

type DeliverySectionProps = {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
};

export function DeliverySection({ formData, setFormData }: DeliverySectionProps) {
  return (
    <section>
      <div className="mb-4 border-b border-primary/10 pb-3">
        <h2 className="text-lg font-semibold">Wysyłka</h2>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Waga
          </label>
          <input
            type="number"
            placeholder="0.5"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Długość
          </label>
          <input
            type="number"
            placeholder="20"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Szerokość
          </label>
          <input
            type="number"
            placeholder="15"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Wysokość
          </label>
          <input
            type="number"
            placeholder="10"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-sm font-medium">
          Metody dostawy InPost
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {[
            "Paczkomat 24/7",
            "Kurier InPost",
            "Paczkomat — pobranie",
            "Kurier InPost — pobranie",
          ].map((method) => (
            <label
              key={method}
              className="
                flex cursor-pointer items-center gap-3
                rounded-lg border border-border
                px-4 py-3 text-sm
                transition-colors hover:border-primary/40
              "
            >
              <input type="checkbox" />
              {method}
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}