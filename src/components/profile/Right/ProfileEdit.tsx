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

        <div className="flex justify-between border-t border-border pt-6">
          <button
            type="button"
            className="
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
          <div className="flex justify-end gap-3">
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