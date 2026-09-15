import { inputClasses } from "@/data/order";
import type { OrderData, ValidationErrorsType } from "@/types/order";

type DeliveryDataProps = {
  formData: OrderData;
  setFormData: React.Dispatch<React.SetStateAction<OrderData>>;
  validationErrors: ValidationErrorsType;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrorsType>>;
};

export default function DeliveryData({ formData, setFormData, validationErrors, setValidationErrors }: DeliveryDataProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="sm:col-span-1">
        <label htmlFor="name"> Imie </label>
        <input
          type="text"
          name="name"
          className={inputClasses + " w-full"}
          value={formData.name}
          onChange={(e) => {
            const value = e.target.value;
            setFormData({
              ...formData,
              name: value.charAt(0).toUpperCase() + value.slice(1),
            });
            setValidationErrors({
              ...validationErrors,
              name: "",
            });
          }}
        />
        {validationErrors.name && <p className="text-red-500 text-sm mt-1"> {validationErrors.name} </p> }
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="surname"> Nazwisko </label>
        <input
          type="text"
          name="surname"
          className={inputClasses + " w-full"}
          value={formData.surname}
          onChange={(e) => {
            const value = e.target.value;
            setFormData({
              ...formData,
              surname: value.charAt(0).toUpperCase() + value.slice(1),
            });
            setValidationErrors({
              ...validationErrors,
              surname: "",
            });
          }}
        />
        {validationErrors.surname && <p className="text-red-500 text-sm mt-1"> {validationErrors.surname} </p> }
      </div>
      <div className="sm:col-span-2 flex flex-col">
        <label htmlFor="companyName"> Nazwa firmy (opcjonalnie) </label>
        <input
        type="text"
        name="companyName"
        className={inputClasses + " sm:col-span-2"}
        value={formData.companyName}
        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
        />
      </div>
      <div className="sm:col-span-2 flex flex-col">
        <label htmlFor="nip"> NIP (opcjonalnie) </label>
        <input
        type="text"
        name="nip"
        className={inputClasses + " sm:col-span-2"}
        value={formData.nip}
        onChange={(e) => setFormData({...formData, nip: e.target.value})}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="email"> Email </label>
        <input
          type="text"
          name="email"
          className={inputClasses + " w-full"}
          value={formData.email}
          onChange={(e) => {
            setFormData({...formData, email: e.target.value})
            setValidationErrors({
              ...validationErrors,
              email: "",
            });
          }}
        />
        {validationErrors.email && <p className="text-red-500 text-sm mt-1"> {validationErrors.email} </p> }
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone"> Telefon </label>
        <input
          type="text"
          name="phone"
          placeholder="_ _ _  _ _ _  _ _ _"
          className={inputClasses + " w-full"}
          value={formData.phone}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "").slice(0, 9);
            const formattedValue = value.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
            setFormData({
              ...formData,
              phone: formattedValue,
            });
            setValidationErrors({
              ...validationErrors,
              phone: "",
            });
          }}
        />
        {validationErrors.phone && <p className="text-red-500 text-sm mt-1"> {validationErrors.phone} </p> }
      </div>
      
      <div className="sm:col-span-1">
        <label htmlFor="country"> Kraj / Region </label>
        <input
          type="text"
          name="country"
          className={inputClasses + " w-full"}
          value={formData.country}
          onChange={(e) => {
            setFormData({...formData, country: e.target.value})
            setValidationErrors({
              ...validationErrors,
              country: "",
            });
          }}
        />
        {validationErrors.country && <p className="text-red-500 text-sm mt-1"> {validationErrors.country} </p> }
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="address"> Adres </label>
        <input
          type="text"
          name="address"
          className={inputClasses + " w-full"}
          value={formData.address}
          onChange={(e) => {
            setFormData({...formData, address: e.target.value})
            setValidationErrors({
              ...validationErrors,
              address: "",
            });
          }}
        />
        {validationErrors.address && <p className="text-red-500 text-sm mt-1"> {validationErrors.address} </p> }
      </div>
      
      <div className="sm:col-span-1">
        <label htmlFor="city"> Miasto </label>
        <input
          type="text"
          name="city"
          className={inputClasses + " w-full"}
          value={formData.city}
          onChange={(e) => {
            setFormData({...formData, city: e.target.value})
            setValidationErrors({
              ...validationErrors,
              city: "",
            });
          }}
        />
        {validationErrors.city && <p className="text-red-500 text-sm mt-1"> {validationErrors.city} </p> }
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="postalCode"> Kod pocztowy </label>
        <input
          type="text"
          name="postalCode"
          placeholder="_ _ - _ _ _"
          className={inputClasses + " w-full"}
          value={formData.postalCode}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "").slice(0, 5);
            const formattedValue = value.length > 2 ? `${value.slice(0, 2)}-${value.slice(2)}` : value;
            setFormData({
              ...formData,
              postalCode: formattedValue,
            });
            setValidationErrors({
              ...validationErrors,
              postalCode: "",
            });
          }}
        />
        {validationErrors.postalCode && <p className="text-red-500 text-sm">{validationErrors.postalCode}</p>}
      </div>
    </div>
  );
}