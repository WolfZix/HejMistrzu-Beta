import { optionClasses, pickedOptionClasses, logoClasses } from "@/data/order";
import { CreditCard, HandCoins } from "lucide-react";
import przelewy24 from "@/assets/przelewy24.png";
import mastercard from "@/assets/mastercard.webp";
import visa from "@/assets/visa.webp";
import googlePay from "@/assets/googlePay.webp";
import blik from "@/assets/blik.png";
import { ValidationErrorsType, PaymentMethodType, DeliveryMethodType, OrderData } from "@/types/order";

type PaymentMethodProps = {
  deliveryMethod: DeliveryMethodType;
  paymentMethod: PaymentMethodType;
  formData: OrderData;
  setFormData: React.Dispatch<React.SetStateAction<OrderData>>;
  validationErrors: ValidationErrorsType;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrorsType>>;
}

export default function PaymentMethod({ deliveryMethod, paymentMethod,formData, setFormData, validationErrors, setValidationErrors }: PaymentMethodProps) {
  return (
    <>
      <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
        <div className="p-2 rounded-lg bg-primary/10"> <CreditCard className="w-5 h-5 text-primary" /> </div>
        <div>
          <h2 className="font-heading text-xl font-semibold"> Metoda płatności </h2>
          <p className="text-sm text-muted-foreground mt-1"> Wybierz preferowaną metodę płatności </p>
        </div>
      </div>

      {deliveryMethod === "InPost Paczkomat Pobranie" || deliveryMethod === "InPost Kurier Pobranie" ? (
        <div className={optionClasses}>
          Płatność przy odbiorze
          <HandCoins size={24} />
        </div>
      ) : (
        <div className="space-y-3">
        {validationErrors.paymentMethod && (
          <p className="text-red-500 text-sm mt-1"> {validationErrors.paymentMethod} </p>
        )}
        <div
        className={optionClasses + " " + (paymentMethod === "Przelewy24" ? pickedOptionClasses : "")}
        onClick={() => {
          setFormData({
            ...formData,
            paymentMethod: "Przelewy24",
          });
          setValidationErrors({
            ...validationErrors,
            paymentMethod: "",
          });
        }}
        >
          Przelewy24 <img className={logoClasses} src={przelewy24} alt="Przelewy24" />
        </div>
        <div
          className={optionClasses + " " + (paymentMethod === "Karta Kredytowa" ? pickedOptionClasses : "")}
          onClick={() => {
            setFormData({
              ...formData,
              paymentMethod: "Karta Kredytowa",
            });
            setValidationErrors({
              ...validationErrors,
              paymentMethod: "",
            });
          }}
        >
          Karta Kredytowa
          <div className="flex gap-2 items-center h-full">
          <img className={logoClasses} src={mastercard} alt="mastercard" />
          <img className={logoClasses} src={visa} alt="visa" />
          </div>
        </div>
        <div
        className={optionClasses + " " + (paymentMethod === "Google Pay" ? pickedOptionClasses : "")}
        onClick={() => {
          setFormData({
            ...formData,
            paymentMethod: "Google Pay",
          });
          setValidationErrors({
            ...validationErrors,
            paymentMethod: "",
          });
        }}
        >
          Google Pay <img className={logoClasses} src={googlePay} alt="Google Pay" />
        </div>
        <div
        className={optionClasses + " " + (paymentMethod === "BLIK" ? pickedOptionClasses : "")}
        onClick={() => {
          setFormData({
            ...formData,
            paymentMethod: "BLIK",
          });
          setValidationErrors({
            ...validationErrors,
            paymentMethod: "",
          });
        }}
        >
          BLIK <img className={logoClasses} src={blik} alt="Blik" />
        </div>
        <div
        className={optionClasses + " " + (paymentMethod === "Płatność przy odbiorze" ? pickedOptionClasses : "")}
        onClick={() => {
          setFormData({
            ...formData,
            paymentMethod: "Płatność przy odbiorze",
          });
          setValidationErrors({
            ...validationErrors,
            paymentMethod: "",
          });
        }}
        >
          Płatnośc przy odbiorze <HandCoins size={24} />
        </div>
      </div>
      )}
    </>
  )
}