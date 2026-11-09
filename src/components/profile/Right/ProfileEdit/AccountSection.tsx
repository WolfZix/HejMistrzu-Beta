type AccountSectionProps = {
  inputClass: string;
}

export default function AccountSection({ inputClass }: AccountSectionProps) {
  return (
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
  )
}