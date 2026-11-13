import { useState, useEffect } from "react";
import AccountSection from "./AccountSection";
import OrderInfoSection from "./OrderInfoSection";
import SafetySection from "./SafetySection";
import PreferencesSection from "./PreferencesSection";
import type { ProfileData } from "@/types/user";
import { useAuth } from "@/context/AuthContext";

export default function ProfileEdit() {
  const { updateUser } = useAuth();
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [profile, setProfile] = useState<ProfileData>({
    username: "",
    email: "",
    name: "",
    surname: "",
    companyName: "",
    nip: "",
    phone: "",
    country: "Polska",
    city: "",
    postalCode: "",
    address: "",
    defaultPaymentMethod: "",
    defaultDeliveryMethod: "",
    defaultInpostPoint: null,
  });

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

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Nie udało się pobrać profilu")

        setProfile({
          username: data.username || "",
          email: data.email || "",
          name: data.name || "",
          surname: data.surname || "",
          companyName: data.companyName || "",
          nip: data.nip || "",
          phone: data.phone || "",
          country: data.country || "Polska",
          city: data.city || "",
          postalCode: data.postalCode || "",
          address: data.address || "",
          defaultPaymentMethod: data.defaultPaymentMethod || "",
          defaultDeliveryMethod: data.defaultDeliveryMethod || "",
          defaultInpostPoint: data.defaultInpostPoint || null,
        })}
      catch (error) { setError(error instanceof Error ? error.message : "Wystąpił nieoczekiwany błąd") }
      finally { setIsLoading(false) }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profile),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Nie udało się zaktualizować profilu")

      setProfile((prev) => ({
        ...prev,
        ...data.user,
      }));
      updateUser(data.user);

      setSuccess("Dane profilu zostały zapisane.");
    } catch (error) { setError(error instanceof Error ? error.message : "Wystąpił nieoczekiwany błąd");
    } finally { setIsSubmitting(false) }
  };

  return (
    <section
      id="edit-profile"
      className="rounded-2xl border border-border glass p-6 shadow-sm"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <AccountSection inputClass={inputClass} profile={profile} setProfile={setProfile} />
        <div className="border-t border-border pt-8">
          <OrderInfoSection inputClass={inputClass} profile={profile} setProfile={setProfile} />
          <PreferencesSection 
            isDeliveryOpen={isDeliveryOpen}
            isPaymentOpen={isPaymentOpen}
            setIsDeliveryOpen={setIsDeliveryOpen}
            setIsPaymentOpen={setIsPaymentOpen}
            profile={profile}
            setProfile={setProfile}
          />
        </div>
        <SafetySection inputClass={inputClass} />
        <div className="flex flex-col gap-4 border-t border-border pt-6">
          <div className="flex flex-col gap-2">
            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-500">
                {error}
              </div>
            )}
            {success && (
              <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-500">
                {success}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              className="w-full sm:w-auto rounded-lg border border-red-500/30 text-red-500/50 px-5 py-2.5 transition-colors hover:bg-red-500/10 hover:text-red-500 hover:border-red-500 duration-200"
            >
              Usuń konto
            </button>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="rounded-lg border border-border px-5 py-2.5 transition-colors hover:bg-muted"
              >
                Anuluj
              </button>
              <button
                type="submit"
                disabled={isSubmitting || isLoading}
                className="rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Zapisywanie..." : "Zapisz zmiany"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}