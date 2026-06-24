import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, TriangleAlert } from "lucide-react";

type ProductItem = {
  name: string;
  quantity?: number;
};

type InventorySectionProps = {
  outOfStock: ProductItem[];
  lowStock: ProductItem[];
  isOpen: boolean;
  onToggle: () => void;
};

export default function InventorySection({
  outOfStock,
  lowStock,
  onToggle,
  isOpen,
}: InventorySectionProps) {
  return (
    <div
      onClick={onToggle}
      className="glass rounded-xl p-6 h-fit cursor-pointer"
    >
      <div className="w-full flex items-center justify-between text-left">
        <h2 className="font-heading text-2xl font-medium tracking-wide text-primary flex gap-3 items-center">
          <span>
            Magazyn
          </span>
          {outOfStock && (
            <span className="text-red-500">
              <TriangleAlert size={18} />
            </span>
          )}
          {lowStock && (
            <span className="text-yellow-500">
              <TriangleAlert size={18} />
            </span>
          )}
        </h2>
        <ChevronDown size={24} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="overflow-hidden"
          >
            <div className="flex items-center justify-between my-5">
              <span className="text-muted-foreground">
                Produktów ogółem
              </span>
              <span>523</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-red-500 font-medium mb-3 flex gap-2">
                  <TriangleAlert size={18} />
                  <span>
                    Brak na stanie
                  </span>
                </h3>
                <div className="space-y-2">
                  {outOfStock.map((product) => (
                    <div
                      key={product.name}
                      className="rounded-lg px-3 py-2 bg-muted/20"
                    >
                      {product.name}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-yellow-500 font-medium mb-3 flex gap-2">
                  <TriangleAlert size={18} />
                  <span>
                    Kończy się
                  </span>
                </h3>
                <div className="space-y-2">
                  {lowStock.map((product) => (
                    <div
                      key={product.name}
                      className="flex justify-between rounded-lg px-3 py-2 bg-muted/20"
                    >
                      <span>{product.name}</span>
                      <span>{product.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
    </AnimatePresence>
  </div>
  );
}