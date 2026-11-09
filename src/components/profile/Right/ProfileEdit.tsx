export default function ProfileEdit() {
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