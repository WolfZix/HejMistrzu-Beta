import ProfileButtons from "@/components/profile/Left/ProfileButtons";
import ProfileHero from "@/components/profile/Left/ProfileHero";
import ProfileStats from "@/components/profile/Left/ProfileStats";
import BattlepassCard from "@/components/profile/Right/Battlepass/BattlepassCard";
import ProfileHistory from "@/components/profile/Right/ProfileHistory";
import ProfileEdit from "@/components/profile/Right/ProfileEdit";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();
  const role = user?.role ?? "user";
  const username = user?.username ?? "User";

  return (
    <section className="container mx-auto max-w-7xl px-4 py-24 md:py-28">
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-4">
        {/* Lewa kolumna */}
        <aside
          className="
            bg-card/40 backdrop-blur-md
            border border-border-40
            rounded-3xl
            p-4 md:p-6
            h-fit
            space-y-6 md:space-y-8
            lg:sticky lg:-top-28
          "
        >
          <ProfileHero username={username} role={role} />
          <ProfileButtons role={role} />
          <ProfileStats
            events={17}
            reservations={2}
            orders={3}
            battlepassLevel={15}
          />
        </aside>

        {/* Prawa kolumna */}
        <div className="col-span-1 space-y-6 lg:col-span-3 lg:space-y-8">
          <BattlepassCard />
          <ProfileHistory />
          <ProfileEdit />
        </div>
      </div>
    </section>
  );
}