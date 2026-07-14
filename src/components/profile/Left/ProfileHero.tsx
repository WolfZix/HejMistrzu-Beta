import { Shield, User } from "lucide-react";

type ProfileHeroProps = {
  username: string | undefined;
  role: string;
};

export default function ProfileHero({
  username,
  role,
}: ProfileHeroProps) {
  return (
    <div className="col-span-1">
      <div className="flex flex-col items-center">
        <div
          className="
            w-28
            h-28
            rounded-full
            bg-primary/10
            border-2
            border-primary/20
            flex
            items-center
            justify-center
            text-5xl
            font-heading
            text-primary
            select-none
            transition-all duration-200
            hover:bg-primary/20
            hover:shadow-[0_0_8px_2px_hsl(43,40%,20%)]
          "
        >
          {username?.[0]?.toUpperCase() ?? "G"}
        </div>
        <h1 className="font-heading text-2xl mt-5">
          {username}
        </h1>
        <p className="text-sm text-muted-foreground">
          @{username?.toLowerCase()}
        </p>
        <p className="text-sm text-muted-foreground">
          dołączył: {new Date().toLocaleDateString("pl-PL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
          <span
            className="
              mt-4
              px-3
              py-1
              rounded-full
              bg-primary/15
              border
              border-primary/20
              text-primary
              text-sm
              flex
              items-center
              gap-2
            "
          >
            {role === "admin" ? (
              <>
                <Shield size={14} />
                Administrator
              </>
            ): (
              <>
                <User size={14} />
                Użytkownik
              </>
            )}
          </span>

      </div>
      <div className="border-t border-border my-6" />
    </div>
  );
}