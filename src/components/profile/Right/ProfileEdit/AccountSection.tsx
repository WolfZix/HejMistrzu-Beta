import type { ProfileData } from "@/types/user";

type AccountSectionProps = {
  inputClass: string;
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
};

export default function AccountSection({ inputClass, profile, setProfile }: AccountSectionProps) {
  return (
    <div>
      <h3 className="font-heading text-2xl mb-4">
        Konto
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="username" className="mb-2 block text-sm font-medium">
            Nazwa użytkownika
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="name"
            value={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            className={inputClass}
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Będzie wyświetlana w tabelach wyników.
          </p>
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
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