import { CreditCard, MapPin, Package, ShoppingBag, Truck, User } from "lucide-react";
import type { PaymentMethod, DeliveryMethod } from "@/types/store";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const inputClasses = "h-11 rounded-lg bg-muted/30 border border-border px-4 text-primary outline-none focus:ring-2 focus:ring-primary";
const logoClasses = "h-10 bg-white p-1";
const optionClasses = "min-h-12 sm:min-h-16 rounded-xl border border-border bg-muted/20 hover:bg-primary/15 hover:text-primary transition-all duration-200 flex items-center justify-center sm:justify-between flex-col sm:flex-row px-4 py-2 cursor-pointer gap-2 overflow-hidden relative active:bg-primary/5";
const pickedOptionClasses = "ring-2 ring-primary bg-primary/10 text-primary";
const buttonClasses = "h-11 text-sm rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary px-2 transition-all duration-200";


export default function Order() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>(null);
  const { items, totalPrice } = useCart();

  const deliveryPrice =
  deliveryMethod === "InPost Paczkomat 24/7"
    ? 16.99
    : deliveryMethod === "InPost Paczkomat Pobranie"
    ? 20.66
    : deliveryMethod === "InPost Kurier"
    ? 19.99
    : deliveryMethod === "InPost Kurier Pobranie"
    ? 27.07
    : deliveryMethod === "Odbiór Osobisty"
    ? 0
    : null;

  const totalWithDelivery = totalPrice + (deliveryPrice ?? 0);

  return (
    <div className="pt-20 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Nagłówek */}
        <div className="mb-10">
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2"> Sklep </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold"> Zamówienie </h1>
          <p className="text-muted-foreground mt-2"> Uzupełnij dane zamówienia i wybierz sposób dostawy oraz płatności. </p>
        </div>
        {/* Główna zawartość */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(360px,0.8fr)] gap-6 lg:gap-8">
          {/* Lewa kolumna */}
          <div className="space-y-6">
            {/* Dane rozliczeniowe */}
            <section className="glass rounded-2xl p-5 md:p-6">
              <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/10"> <MapPin className="w-5 h-5 text-primary" /> </div>

                <div>
                  <h2 className="font-heading text-xl font-semibold"> Dane rozliczeniowe </h2>
                  <p className="text-sm text-muted-foreground mt-1"> Dane potrzebne do realizacji zamówienia </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Imię" className={inputClasses + " sm:col-span-1"} />
                <input type="text" placeholder="Nazwisko" className={inputClasses + " sm:col-span-1"} />
                <input type="text" placeholder="Nazwa firmy (opcjonalnie)" className={inputClasses + " sm:col-span-2"} />
                <input type="text" placeholder="NIP (opcjonalnie)" className={inputClasses + " sm:col-span-2"} />
                <input type="text" placeholder="Adres e-mail" className={inputClasses + " sm:col-span-2"} />
                <input type="text" placeholder="Numer telefonu" className={inputClasses + " sm:col-span-1"} />
                <input type="text" placeholder="Kraj / region" className={inputClasses + " sm:col-span-1"} />
                <input type="text" placeholder="Adres" className={inputClasses + " sm:col-span-2"} />
                <input type="text" placeholder="Miasto" className={inputClasses + " sm:col-span-1"} />
                <input type="text" placeholder="Kod pocztowy" className={inputClasses + " sm:col-span-1"} />
              </div>
            </section>

            {/* Dostawa */}
            <section className="glass rounded-2xl p-5 md:p-6">
              <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold"> Sposób dostawy </h2>
                  <p className="text-sm text-muted-foreground mt-1"> Wybierz sposób, w jaki chcesz otrzymać zamówienie </p>
                </div>
              </div>
              <div className="space-y-3">
                <div
                className={optionClasses + " " + (deliveryMethod === "InPost Paczkomat 24/7" ? pickedOptionClasses : "")}
                onClick={() => setDeliveryMethod("InPost Paczkomat 24/7")}
                >
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    InPost Paczkomat 24/7
                    <span className="text-sm font-medium text-fuchsia-500 text-nowrap"> 16,99 zł </span>
                  </div>
                  {deliveryMethod === "InPost Paczkomat 24/7" && (
                    <button className={buttonClasses}> Wybierz punkt odbioru </button>
                  )}
                </div>
                <div
                  className={optionClasses + " " + (deliveryMethod === "InPost Paczkomat Pobranie" ? pickedOptionClasses : "")}
                  onClick={() => setDeliveryMethod("InPost Paczkomat Pobranie")}
                >
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    InPost Paczkomat Pobranie
                    <span className="text-sm font-medium text-fuchsia-500 text-nowrap"> 20,66 zł </span>
                  </div>
                  {deliveryMethod === "InPost Paczkomat Pobranie" && (
                    <button className={buttonClasses}> Wybierz punkt odbioru </button>
                  )}
                </div>
                <div
                  className={optionClasses + " " + (deliveryMethod === "InPost Kurier" ? pickedOptionClasses : "")}
                  onClick={() => setDeliveryMethod("InPost Kurier")}
                >
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    InPost Kurier
                    <span className="text-sm font-medium text-fuchsia-500 text-nowrap"> 19,99 zł </span>
                  </div>
                </div>
                <div
                  className={optionClasses + " " + (deliveryMethod === "InPost Kurier Pobranie" ? pickedOptionClasses : "")}
                  onClick={() => setDeliveryMethod("InPost Kurier Pobranie")}
                >
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    InPost Kurier Pobranie
                    <span className="text-sm font-medium text-fuchsia-500 text-nowrap"> 27,07 zł </span>
                  </div>
                </div>
                <div
                  className={optionClasses + " " + (deliveryMethod === "Odbiór Osobisty" ? pickedOptionClasses : "")}
                  onClick={() => setDeliveryMethod("Odbiór Osobisty")}
                >
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Odbiór Osobisty
                  </div>
                </div>
              </div>
            </section>

            {/* Płatność */}
            <section className="glass rounded-2xl p-5 md:p-6">
              <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/10"> <CreditCard className="w-5 h-5 text-primary" /> </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold"> Metoda płatności </h2>
                  <p className="text-sm text-muted-foreground mt-1"> Wybierz preferowaną metodę płatności </p>
                </div>
              </div>

              <div className="space-y-3">
                <div
                className={optionClasses + " " + (paymentMethod === "Przelewy24" ? pickedOptionClasses : "")}
                onClick={() => setPaymentMethod("Przelewy24")}
                >
                  Przelewy24 <img className={logoClasses} src="/src/assets/przelewy24.png" alt="Przelewy24" />
                </div>
                <div
                  className={optionClasses + " " + (paymentMethod === "Karta Kredytowa" ? pickedOptionClasses : "")}
                  onClick={() => setPaymentMethod("Karta Kredytowa")}
                >
                  Karta Kredytowa
                  <div className="flex gap-2 items-center h-full">
                  <img className={logoClasses} src="/src/assets/mastercard.webp" alt="mastercard" />
                  <img className={logoClasses} src="/src/assets/visa.webp" alt="visa" />
                  </div>
                </div>
                <div
                className={optionClasses + " " + (paymentMethod === "Google Pay" ? pickedOptionClasses : "")}
                onClick={() => setPaymentMethod("Google Pay")}
                >
                  Google Pay <img className={logoClasses} src="/src/assets/googlePay.webp" alt="Google Pay" />
                </div>
                <div
                className={optionClasses + " " + (paymentMethod === "BLIK" ? pickedOptionClasses : "")}
                onClick={() => setPaymentMethod("BLIK")}
                >
                  BLIK <img className={logoClasses} src="/src/assets/blik.png" alt="Blik" />
                </div>
              </div>
            </section>
          </div>

          {/* Prawa kolumna */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <section className="glass rounded-2xl p-5 md:p-6">
              <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/10"> <ShoppingBag className="w-5 h-5 text-primary" /> </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold"> Twoje zamówienie </h2>
                  <p className="text-sm text-muted-foreground mt-1"> Podsumowanie zakupów </p>
                </div>
              </div>

              {/* Produkty */}
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-xl border border-border bg-muted/20 p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate"> {item.name} </p>
                      <p className="text-xs text-muted-foreground mt-1"> {item.quantity} × {item.price.toFixed(2)} zł </p>
                    </div>
                    <span className="text-sm font-semibold shrink-0"> {(item.price * item.quantity).toFixed(2)} zł </span>
                  </div>
                ))}
              </div>

              {/* Kupon */}
              <div className="border-t border-border pt-5 mb-5">
                <input type="text" placeholder="Kod Kuponu" className={inputClasses + " w-full"} />
              </div>

              {/* Podsumowanie */}
              <div className="border-t border-border pt-5 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground"> Produkty </span>
                  <span className="font-medium"> {totalPrice.toFixed(2)} zł </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground"> Dostawa </span>
                  <span className="font-medium">
                    {deliveryPrice === null
                      ? "-"
                      : `${deliveryPrice.toFixed(2)} zł`
                    }
                  </span>
                </div>
                <div className="border-t border-border pt-4 mt-4 flex items-center justify-between">
                  <span className="font-heading font-semibold"> Razem </span>
                  <span className="font-bold text-lg"> {totalWithDelivery.toFixed(2)} zł </span>
                </div>
              </div>

              {/* Przycisk */}
              <button className={buttonClasses + " w-full mt-4"}> Kupuję i płacę </button>
            </section>
          </aside>
        </div>
      </section>
    </div>
  );
}