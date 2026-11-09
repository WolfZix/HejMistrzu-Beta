import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type PreferencesSectionProps = {
  isDeliveryOpen: boolean;
  isPaymentOpen: boolean;
  setIsDeliveryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPaymentOpen: React.Dispatch<React.SetStateAction<boolean>>;
  preferredPayment: string | null;
  setPreferredPayment: (payment: string) => void;
  preferredDelivery: string | null;
  setPreferredDelivery: (delivery: string) => void;
}

export default function PreferencesSection({
  setIsDeliveryOpen,
  isPaymentOpen,
  isDeliveryOpen,
  setIsPaymentOpen,
  preferredPayment,
  setPreferredPayment,
  preferredDelivery,
  setPreferredDelivery }: PreferencesSectionProps) {
    const paymentOptions = [
    { value: "p24", label: "Przelewy24" },
    { value: "card", label: "Karta kredytowa" },
    { value: "google_pay", label: "Google Pay" },
    { value: "blik", label: "BLIK" },
    { value: "cod", label: "Płatność przy odbiorze" },
  ];

  const deliveryOptions = [
    { value: "inpost_locker", label: "InPost Paczkomat" },
    { value: "inpost_locker_pickup", label: "InPost Paczkomat Pobranie" },
    { value: "inpost_courier", label: "InPost Kurier" },
    { value: "inpost_courier_pickup", label: "InPost Kurier Pobranie" },
    { value: "local_pickup", label: "Odbiór osobisty" },
  ];
  return (
    <div className="mt-6 border-t border-border pt-6">
        <h4 className="font-heading text-xl mb-2">
          Preferencje zamówień
        </h4>

        <p className="mb-5 text-sm text-muted-foreground">
          Wybierz domyślne metody płatności i dostawy.
          Możesz je zmienić podczas składania zamówienia.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Metoda płatności */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Preferowana metoda płatności
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsDeliveryOpen(false);
                  setIsPaymentOpen((prev) => !prev);
                }}
                className="bg-background w-full text-left px-3 flex items-center justify-between border border-border text-sm focus:border-primary/50 h-12 rounded-xl transition-colors"
              >
                <span className={preferredPayment ? "" : "text-muted-foreground"}>
                  {paymentOptions.find(
                    (option) => option.value === preferredPayment
                  )?.label || "Wybierz metodę płatności"}
                </span>

                <ChevronDown
                  size={14}
                  className={`text-foreground/30 transition-transform ${
                    isPaymentOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isPaymentOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-1 z-50 left-0 w-full text-sm flex flex-col border border-border items-start bg-background rounded-xl p-1 shadow-xl"
                  >
                    {paymentOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setPreferredPayment(option.value);
                          setIsPaymentOpen(false);
                        }}
                        className={`w-full text-left rounded-lg p-2.5 hover:bg-primary/10 hover:text-primary ${
                          preferredPayment === option.value
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/80 bg-transparent"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Metoda dostawy */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Preferowana metoda dostawy
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsPaymentOpen(false);
                  setIsDeliveryOpen((prev) => !prev);
                }}
                className="bg-background w-full text-left px-3 flex items-center justify-between border border-border text-sm focus:border-primary/50 h-12 rounded-xl transition-colors"
              >
                <span className={preferredDelivery ? "" : "text-muted-foreground"}>
                  {deliveryOptions.find(
                    (option) => option.value === preferredDelivery
                  )?.label || "Wybierz metodę dostawy"}
                </span>

                <ChevronDown
                  size={14}
                  className={`text-foreground/30 transition-transform ${
                    isDeliveryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isDeliveryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-1 z-50 left-0 w-full text-sm flex flex-col border border-border items-start bg-background rounded-xl p-1 shadow-xl"
                  >
                    {deliveryOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setPreferredDelivery(option.value);
                          setIsDeliveryOpen(false);
                        }}
                        className={`w-full text-left rounded-lg p-2.5 hover:bg-primary/10 hover:text-primary ${
                          preferredDelivery === option.value
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/80 bg-transparent"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
  )
}