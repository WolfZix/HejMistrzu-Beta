import { optionClasses, buttonClasses, pickedOptionClasses } from "@/data/order";
import { Package, Truck, User } from "lucide-react";
import { ValidationErrorsType, DeliveryMethodType, OrderData } from "@/types/order";
import { useState, useEffect } from "react";
import InPostWidget from "@/components/InPostWidget";
import { createPortal } from "react-dom";

type DeliveryMethodProps = {
  deliveryMethod: DeliveryMethodType;
  formData: OrderData;
  setFormData: React.Dispatch<React.SetStateAction<OrderData>>;
  validationErrors: ValidationErrorsType;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrorsType>>;
}

export default function DeliveryMethod({ deliveryMethod, formData, setFormData, validationErrors, setValidationErrors }: DeliveryMethodProps) {
  const [isInPostOpen, setIsInPostOpen] = useState(false);
  useEffect(() => {
    isInPostOpen
    ? document.body.style.overflow = "hidden"
    : document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [isInPostOpen])
  return (
    <>
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
        {validationErrors.deliveryMethod !== "" && (
          <p className="text-red-500 text-sm mt-1"> {validationErrors.deliveryMethod} </p>
        )}
        <div
        className={optionClasses + " " + (deliveryMethod === "InPost Paczkomat 24/7" ? pickedOptionClasses : "")}
        onClick={() => {
          setFormData({
            ...formData,
            deliveryMethod: "InPost Paczkomat 24/7",
            paymentMethod: "Przelewy24",
          });
          setValidationErrors({
            ...validationErrors,
            deliveryMethod: "",
          });
        }}
        >
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" />
            InPost Paczkomat 24/7
            <span className="text-sm font-medium text-fuchsia-500 text-nowrap"> 16,99 zł </span>
          </div>
          {deliveryMethod === "InPost Paczkomat 24/7" && (
            <button
            className={buttonClasses}
            onClick={(e) => {
              e.stopPropagation();
              setIsInPostOpen(true);
            }}
            >
              {formData.inPostPoint != null ? `Wybrano: ${formData.inPostPoint.name}` : "Wybierz punkt odbioru"}
            </button>
          )}
        </div>
        <div
          className={optionClasses + " " + (deliveryMethod === "InPost Paczkomat Pobranie" ? pickedOptionClasses : "")}
          onClick={() => {
            setFormData({
              ...formData,
              deliveryMethod: "InPost Paczkomat Pobranie",
              paymentMethod: "Przelewy24",
            });
            setValidationErrors({
              ...validationErrors,
              deliveryMethod: "",
            });
          }}
        >
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" />
            InPost Paczkomat Pobranie
            <span className="text-sm font-medium text-fuchsia-500 text-nowrap"> 20,66 zł </span>
          </div>
          {deliveryMethod === "InPost Paczkomat Pobranie" && (
            <button
            className={buttonClasses}
            onClick={(e) => {
              e.stopPropagation();
              setIsInPostOpen(true);
            }}
            >
              {formData.inPostPoint != null ? `Wybrano: ${formData.inPostPoint.name}` : "Wybierz punkt odbioru"}
            </button>
          )}
        </div>
        <div
          className={optionClasses + " " + (deliveryMethod === "InPost Kurier" ? pickedOptionClasses : "")}
          onClick={() => {
            setFormData({
              ...formData,
              deliveryMethod: "InPost Kurier",
              paymentMethod: "Przelewy24",
              inPostPoint: null,
            });
            setValidationErrors({
              ...validationErrors,
              deliveryMethod: "",
            });
          }}
        >
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-primary" />
            InPost Kurier
            <span className="text-sm font-medium text-fuchsia-500 text-nowrap"> 19,99 zł </span>
          </div>
        </div>
        <div
          className={optionClasses + " " + (deliveryMethod === "InPost Kurier Pobranie" ? pickedOptionClasses : "")}
          onClick={() => {
            setFormData({
              ...formData,
              deliveryMethod: "InPost Kurier Pobranie",
              paymentMethod: "Przelewy24",
              inPostPoint: null,
            });
            setValidationErrors({
              ...validationErrors,
              deliveryMethod: "",
            });
          }}
        >
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-primary" />
            InPost Kurier Pobranie
            <span className="text-sm font-medium text-fuchsia-500 text-nowrap"> 27,07 zł </span>
          </div>
        </div>
        <div
          className={optionClasses + " " + (deliveryMethod === "Odbiór Osobisty" ? pickedOptionClasses : "")}
          onClick={() => {
            setFormData({
              ...formData,
              deliveryMethod: "Odbiór Osobisty",
              paymentMethod: "Przelewy24",
              inPostPoint: null,
            });
            setValidationErrors({
              ...validationErrors,
              deliveryMethod: "",
            });
          }}
        >
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Odbiór Osobisty
          </div>
        </div>
      </div>
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
                  setFormData({
                    ...formData,
                    inPostPoint: {
                      name: point.name,
                      address: point.address.line1,
                      city: point.address_details.city,
                      postalCode: point.address_details.post_code,
                    },
                  });
                  setIsInPostOpen(false);
                }}
              />
            </div>
          </div>,
        document.body
      )}
    </>
  )
}