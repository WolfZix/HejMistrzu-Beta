type SafetySectionProps = {
  inputClass: string;
};

export default function SafetySection({ inputClass }: SafetySectionProps) {
  return (
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
  )
}