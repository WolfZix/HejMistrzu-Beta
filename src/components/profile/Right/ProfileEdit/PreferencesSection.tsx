import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ProfileData } from "@/types/user";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import InPostWidget from "@/components/InPostWidget";
import type { InPostPoint } from "@/types/order";

type PreferencesSectionProps = {
  isDeliveryOpen: boolean;
  isPaymentOpen: boolean;
  setIsDeliveryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPaymentOpen: React.Dispatch<React.SetStateAction<boolean>>;
  profile: {
    defaultPaymentMethod: string;
    defaultDeliveryMethod: string;
    defaultInpostPoint: InPostPoint | null;
  };
  setProfile: React.Dispatch<React.SetStateAction<any>>;
}

export default function PreferencesSection({
  setIsDeliveryOpen,
  isPaymentOpen,
  isDeliveryOpen,
  setIsPaymentOpen,
  profile,
  setProfile
}: PreferencesSectionProps) {
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

  const [isInPostOpen, setIsInPostOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isInPostOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isInPostOpen]);

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
                <span className={profile.defaultPaymentMethod ? "" : "text-muted-foreground"}>
                  {paymentOptions.find(
                    (option) => option.value === profile.defaultPaymentMethod
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
                          setProfile((prev: ProfileData) => ({
                            ...prev,
                            defaultPaymentMethod: option.value,
                          }));
                          setIsPaymentOpen(false);
                        }}
                        className={`w-full text-left rounded-lg p-2.5 hover:bg-primary/10 hover:text-primary ${
                          profile.defaultPaymentMethod === option.value
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
                <span className={profile.defaultDeliveryMethod ? "" : "text-muted-foreground"}>
                  {deliveryOptions.find(
                    (option) => option.value === profile.defaultDeliveryMethod
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
                          setProfile((prev: ProfileData) => ({
                            ...prev,
                            defaultDeliveryMethod: option.value,
                          }));
                          setIsDeliveryOpen(false);
                        }}
                        className={`w-full text-left rounded-lg p-2.5 hover:bg-primary/10 hover:text-primary ${
                          profile.defaultDeliveryMethod === option.value
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
        {(profile.defaultDeliveryMethod === "inpost_locker" ||
          profile.defaultDeliveryMethod === "inpost_locker_pickup") && (
          <div className="mt-5 rounded-xl border border-border p-4">
            <label className="mb-2 block text-sm font-medium">
              Domyślny paczkomat InPost
            </label>

            {profile.defaultInpostPoint ? (
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-medium text-foreground">
                    {profile.defaultInpostPoint.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {profile.defaultInpostPoint.address},{" "}
                    {profile.defaultInpostPoint.postalCode}{" "}
                    {profile.defaultInpostPoint.city}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setProfile((prev: ProfileData) => ({
                    ...prev,
                    defaultInpostPoint: null,
                  }))}
                  className="text-sm text-red-500 hover:text-red-400"
                >
                  Usuń punkt
                </button>
              </div>
            ) : (
              <p className="mb-3 text-sm text-muted-foreground">
                Nie wybrano jeszcze domyślnego paczkomatu.
              </p>
            )}

            <button
              type="button"
              onClick={() => setIsInPostOpen(true)}
              className="mt-3 rounded-xl border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10"
            >
              {profile.defaultInpostPoint ? "Zmień paczkomat" : "Wybierz paczkomat"}
            </button>
          </div>
        )}
        {isInPostOpen &&
          createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
              onClick={() => setIsInPostOpen(false)}
            >
              <div
                className="relative w-full max-w-6xl h-[90vh] rounded-2xl bg-background overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsInPostOpen(false)}
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-2xl text-foreground shadow-md transition hover:bg-primary hover:text-primary-foreground"
                >
                  x
                </button>

                <InPostWidget
                  onPointSelect={(point) => {
                    setProfile((prev: ProfileData) => ({
                      ...prev,
                      defaultInpostPoint: {
                        name: point.name,
                        address: point.address.line1,
                        city: point.address_details.city,
                        postalCode: point.address_details.post_code,
                      },
                    }));
                    setIsInPostOpen(false);
                  }}
                />
              </div>
            </div>,
            document.body
          )}
      </div>
  )
}