import { MapPin, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { inputClasses, buttonClasses } from "@/data/order";
import DeliveryData from "@/components/order/DeliveryData";
import DeliveryMethod from "@/components/order/DeliveryMethod";
import PaymentMethod from "@/components/order/PaymentMethod";
import type { OrderData } from "@/types/order";

export default function Order() {
  const { items, totalPrice } = useCart();

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    postalCode: "",
    deliveryMethod: "",
    paymentMethod: "",
  });

  const [formData, setFormData] = useState<OrderData>({
    name: "",
    surname: "",
    companyName: "",
    nip: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    postalCode: "",
    deliveryMethod: null,
    paymentMethod: null,
    inPostPoint: null,
  });

  const deliveryPrice =
  formData.deliveryMethod === "InPost Paczkomat 24/7"
    ? 16.99
    : formData.deliveryMethod === "InPost Paczkomat Pobranie"
    ? 20.66
    : formData.deliveryMethod === "InPost Kurier"
    ? 19.99
    : formData.deliveryMethod === "InPost Kurier Pobranie"
    ? 27.07
    : formData.deliveryMethod === "Odbiór Osobisty"
    ? 0
    : null;

  const totalWithDelivery = totalPrice + (deliveryPrice ?? 0);

  const validateFormData = () => {
    const errors = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      country: "",
      address: "",
      city: "",
      postalCode: "",
      deliveryMethod: "",
      paymentMethod: "",
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const postalCodeRegex = /^\d{2}-\d{3}$/;
    const phoneRegex = /^\d{3} \d{3} \d{3}$/;

    if (!formData.name.trim()) errors.name = "Imię jest wymagane";
    if (!formData.surname.trim()) errors.surname = "Nazwisko jest wymagane";
    if (!formData.email.trim()) errors.email = "Email jest wymagany";
    if (formData.email.trim() && !emailRegex.test(formData.email.trim())) errors.email = "Nieprawidłowy adres email";
    if (!formData.phone.trim()) errors.phone = "Numer telefonu jest wymagany";
    if (formData.phone.trim() && !phoneRegex.test(formData.phone.trim())) errors.phone = "Nieprawidłowy numer telefonu";
    if (!formData.country.trim()) errors.country = "Kraj / Region jest wymagany";
    if (!formData.address.trim()) errors.address = "Adres jest wymagany";
    if (!formData.city.trim()) errors.city = "Miasto jest wymagane";
    if (!formData.postalCode.trim()) errors.postalCode = "Kod pocztowy jest wymagany";
    if (formData.postalCode.trim() && !postalCodeRegex.test(formData.postalCode.trim())) errors.postalCode = "Nieprawidłowy kod pocztowy";
    if (!formData.deliveryMethod) errors.deliveryMethod = "Wybierz metodę dostawy";
    if (!formData.paymentMethod) errors.paymentMethod = "Wybierz metodę płatności";

    if (formData.name.trim().length > 50) errors.name = "Imię jest za długie";
    if (formData.surname.trim().length > 50) errors.surname = "Nazwisko jest za długie";
    if (formData.email.trim().length > 254) errors.email = "Email jest za długi";
    if (formData.country.trim().length > 100) errors.country = "Nazwa kraju jest za długa";
    if (formData.address.trim().length > 150) errors.address = "Adres jest za długi";
    if (formData.city.trim().length > 100) errors.city = "Nazwa miasta jest za długa";
    return errors;
  };

  const handleSubmit = () => {
    const errors = validateFormData();
    const hasErrors = Object.values(errors).some((error) => error !== "");
    setValidationErrors(errors);

    if (hasErrors) return;
    console.log(formData);
  }

  return (
    <div className="pt-20 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-10">
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2"> Sklep </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold"> Zamówienie </h1>
          <p className="text-muted-foreground mt-2"> Uzupełnij dane zamówienia i wybierz sposób dostawy oraz płatności. </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(360px,0.8fr)] gap-6 lg:gap-8">

          {/* Lewa kolumna */}
          <div className="space-y-6">
            <section className="glass rounded-2xl p-5 md:p-6">
              <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/10"> <MapPin className="w-5 h-5 text-primary" /> </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold"> Dane rozliczeniowe </h2>
                  <p className="text-sm text-muted-foreground mt-1"> Dane potrzebne do realizacji zamówienia </p>
                </div>
              </div>
              <DeliveryData
              formData={formData}
              setFormData={setFormData}
              validationErrors={validationErrors}
              setValidationErrors={setValidationErrors}
              />
            </section>
            <section className="glass rounded-2xl p-5 md:p-6">
              <DeliveryMethod
              deliveryMethod={formData.deliveryMethod}
              formData={formData}
              setFormData={setFormData}
              validationErrors={validationErrors}
              setValidationErrors={setValidationErrors}
              />
            </section>
            <section className="glass rounded-2xl p-5 md:p-6">
              <PaymentMethod
              paymentMethod={formData.paymentMethod}
              formData={formData}
              setFormData={setFormData}
              validationErrors={validationErrors}
              setValidationErrors={setValidationErrors}
              />
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
              <button
              className={buttonClasses + " w-full mt-4"}
              onClick={handleSubmit}
              >
                Kupuję i płacę
              </button>
            </section>
          </aside>
        </div>
      </section>
    </div>
  );
}