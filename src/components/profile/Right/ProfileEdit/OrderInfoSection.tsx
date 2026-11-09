type OrderInfoSectionProps = {
  inputClass: string;
}

export default function OrderInfoSection({ inputClass }: OrderInfoSectionProps) {
  return (
    <>
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
    </>
  )
}