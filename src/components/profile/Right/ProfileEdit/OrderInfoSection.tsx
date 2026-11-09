type OrderInfoSectionProps = {
  inputClass: string;
  profile: {
    name: string;
    surname: string;
    companyName: string;
    nip: string;
    phone: string;
    country: string;
    city: string;
    postalCode: string;
    address: string;
  };
  setProfile: React.Dispatch<React.SetStateAction<any>>;
};

export default function OrderInfoSection({ inputClass, profile, setProfile }: OrderInfoSectionProps) {
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
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
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
            value={profile.surname}
            onChange={(e) => setProfile({ ...profile, surname: e.target.value })}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="companyName" className="mb-2 block text-sm font-medium">
            Nazwa firmy
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            autoComplete="organization"
            value={profile.companyName}
            onChange={(e) => setProfile({ ...profile, companyName: e.target.value })}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="nip" className="mb-2 block text-sm font-medium">
            NIP
          </label>
          <input
            id="nip"
            name="nip"
            type="text"
            value={profile.nip}
            onChange={(e) => setProfile({ ...profile, nip: e.target.value })}
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
            value={profile.surname}
            onChange={(e) => setProfile({ ...profile, surname: e.target.value })}
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
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
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
            value={profile.country}
            onChange={(e) => setProfile({ ...profile, country: e.target.value })}
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
            value={profile.city}
            onChange={(e) => setProfile({ ...profile, city: e.target.value })}
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
            value={profile.postalCode}
            onChange={(e) => setProfile({ ...profile, postalCode: e.target.value })}
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
            value={profile.address}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
    </>
  )
}