import ProfileButtons from "@/components/profile/Left/ProfileButtons";
import ProfileHero from "@/components/profile/Left/ProfileHero";
import ProfileStats from "@/components/profile/Left/ProfileStats";
import BattlepassCard from "@/components/profile/Right/Battlepass/BattlepassCard";
import ProfileHistory from "@/components/profile/Right/ProfileHistory";

export default function ProfilePage() {
  const role = "admin"
  const username = "Admin"
  return (
    <section className="container mx-auto max-w-7xl px-4 py-28">
      <div className="grid grid-cols-4 gap-8">

        {/* Lewa kolumna */}
        <aside className="bg-card/40 backdrop-blur-md border border-border-40 rounded-3xl p-6 sticky top-28 space-y-8">
          <ProfileHero username={username} role={role} />
          <ProfileButtons role={role} />
          <ProfileStats events={17} reservations={2} orders={3} />
        </aside>

        {/* Prawa kolumna */}
        <div className="col-span-3">
          <BattlepassCard />
          <ProfileHistory />
        </div>

      </div>
    </section>
  );
}