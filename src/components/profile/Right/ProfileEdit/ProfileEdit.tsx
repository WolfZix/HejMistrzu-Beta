import { useState } from "react";
import AccountSection from "./AccountSection";
import OrderInfoSection from "./OrderInfoSection";
import SafetySection from "./SafetySection";
import PreferencesSection from "./PreferencesSection";

export default function ProfileEdit() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [preferredPayment, setPreferredPayment] = useState("");
  const [preferredDelivery, setPreferredDelivery] = useState("");

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
        <AccountSection inputClass={inputClass} />
        <div className="border-t border-border pt-8">
          <OrderInfoSection inputClass={inputClass} />
          <PreferencesSection 
            isDeliveryOpen={isDeliveryOpen}
            isPaymentOpen={isPaymentOpen}
            preferredPayment={preferredPayment}
            setIsDeliveryOpen={setIsDeliveryOpen}
            setIsPaymentOpen={setIsPaymentOpen}
            setPreferredPayment={setPreferredPayment}
            preferredDelivery={preferredDelivery}
            setPreferredDelivery={setPreferredDelivery}
          />
        </div>
        <SafetySection inputClass={inputClass} />
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