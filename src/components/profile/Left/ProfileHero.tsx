import { Shield } from "lucide-react";

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
          "
        >
          {username?.charAt(0).toUpperCase()}
        </div>
        <h1 className="font-heading text-2xl mt-5">
          {username}
        </h1>
        <p className="text-sm text-muted-foreground">
          @{username?.toLowerCase()}
        </p>
        {role === "admin" && (
          <span
            className="
              mt-4
              px-3
              py-1
              rounded-full
              bg-primary/10
              text-primary
              text-sm
              flex
              items-center
              gap-2
            "
          >
            <Shield size={14} />
            Administrator
          </span>
        )}

      </div>
      <div className="border-t border-border my-6" />
    </div>
  );
}