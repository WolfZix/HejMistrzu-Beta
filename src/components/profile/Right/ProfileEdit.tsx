import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProfileEdit() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [preferredPayment, setPreferredPayment] = useState("");
  const [preferredDelivery, setPreferredDelivery] = useState("");

  const paymentOptions = [
    { value: "p24", label: "Przelewy24" },
    { value: "card", label: "Karta kredytowa" },
    { value: "google_pay", label: "Google Pay" },
    { value: "blik", label: "BLIK" },
    { value: "cod", label: "Płatność przy odbiorze" },
  ];

  const deliveryOptions = [
    { value: "inpost_locker", label: "Paczkomat InPost" },
    { value: "inpost_courier", label: "Kurier InPost" },
    { value: "local_pickup", label: "Odbiór osobisty" },
  ];

  const inputClass = `
    w-full
    rounded-lg
    border
    border-border
    bg-background
    px-4
    py-3
    outline-none
    transition-all
    focus:border-primary
    focus:ring-2
    focus:ring-primary/20
  `;

  return (
    <section
      id="edit-profile"
      className="rounded-2xl border border-border glass p-6 shadow-sm"
    >
      <form className="space-y-8">

        {/* Dane konta */}

        <div>
          <h3 className="font-heading text-2xl mb-4">
            Konto
          </h3>

          <div className="grid gap-4 md:grid-cols-2">

            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium"
              >
                Nazwa użytkownika
              </label>

              <input
                id="username"
                name="username"
                type="text"
                autoComplete="name"
                className={inputClass}
              />

              <p className="mt-2 text-xs text-muted-foreground">
                Będzie wyświetlana w tabelach wyników.
              </p>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                className={inputClass}
              />

              <p className="mt-2 text-xs text-muted-foreground">
                Służy do logowania i kontaktu.
              </p>
            </div>

          </div>
        </div>
        
        {/* Dane do zamówień */}

        <div className="border-t border-border pt-8">
          <h3 className="font-heading text-2xl mb-2">
            Dane do zamówień
          </h3>

          <p className="mb-4 text-sm text-muted-foreground">
            Zapisz swoje dane, aby przy kolejnych zamówieniach
            formularz uzupełniał się automatycznie.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                Imię
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                Nazwisko
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                Numer telefonu
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="country" className="mb-2 block text-sm font-medium">
                Kraj
              </label>
              <input
                id="country"
                name="country"
                type="text"
                autoComplete="country-name"
                defaultValue="Polska"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="city" className="mb-2 block text-sm font-medium">
                Miasto
              </label>
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="postalCode" className="mb-2 block text-sm font-medium">
                Kod pocztowy
              </label>
              <input
                id="postalCode"
                name="postalCode"
                type="text"
                autoComplete="postal-code"
                className={inputClass}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="address" className="mb-2 block text-sm font-medium">
                Ulica i numer budynku / lokalu
              </label>
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="street-address"
                className={inputClass}
              />
            </div>
          </div>

          {/* Preferencje zamówień */}

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
                    className="bg-card w-full text-left px-3 flex items-center justify-between border border-border text-sm focus:border-primary/50 h-12 rounded-xl transition-colors"
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
                        className="absolute top-full mt-1 z-50 left-0 w-full text-sm flex flex-col border border-border items-start bg-card rounded-xl p-1 shadow-xl"
                      >
                        {paymentOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setPreferredPayment(option.value);
                              setIsPaymentOpen(false);
                            }}
                            className={`w-full text-left rounded-md p-2 transition-colors hover:bg-primary hover:text-black ${
                              preferredPayment === option.value
                                ? "bg-primary/10 text-primary"
                                : "bg-transparent"
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
                    className="bg-card w-full text-left px-3 flex items-center justify-between border border-border text-sm focus:border-primary/50 h-12 rounded-xl transition-colors"
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
                        className="absolute top-full mt-1 z-50 left-0 w-full text-sm flex flex-col border border-border items-start bg-card rounded-xl p-1 shadow-xl"
                      >
                        {deliveryOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setPreferredDelivery(option.value);
                              setIsDeliveryOpen(false);
                            }}
                            className={`w-full text-left rounded-md p-2 transition-colors hover:bg-primary hover:text-black ${
                              preferredDelivery === option.value
                                ? "bg-primary/10 text-primary"
                                : "bg-transparent"
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

        {/* Bezpieczeństwo */}

        <div className="border-t border-border pt-8">

          <h3 className="font-heading text-2xl mb-4">
            Bezpieczeństwo
          </h3>

          <div className="space-y-4">

            <div>
              <label
                htmlFor="currentPassword"
                className="mb-2 block text-sm font-medium"
              >
                Aktualne hasło
              </label>

              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                autoComplete="current-password"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="newPassword"
                className="mb-2 block text-sm font-medium"
              >
                Nowe hasło
              </label>

              <input
                id="newPassword"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium"
              >
                Powtórz nowe hasło
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                className={inputClass}
              />
            </div>

          </div>

        </div>

        {/* Przyciski */}

        <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            className="
              w-full
              sm:w-auto
              rounded-lg
              border
              border-red-500/30
              text-red-500/50
              px-5
              py-2.5
              transition-colors
              hover:bg-red-500/10
              hover:text-red-500
              hover:border-red-500
              duration-200
            "
          >
            Usuń konto
          </button>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="
                rounded-lg
                border
                border-border
                px-5
                py-2.5
                transition-colors
                hover:bg-muted
              "
            >
              Anuluj
            </button>

            <button
              type="submit"
              className="
                rounded-lg
                bg-primary
                px-5
                py-2.5
                font-medium
                text-primary-foreground
                transition-opacity
                hover:opacity-90
              "
            >
              Zapisz zmiany
            </button>
          </div>
        </div>

      </form>
    </section>
  );
}