import { Download, ShoppingBag, Ticket } from "lucide-react";

export default function ProfileHistory() {
  return (
    <div className="py-8">
      <h2 className="font-heading text-2xl mb-6">
        Historia <span className="text-sm text-muted-foreground">ostatnie 30 dni</span>
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <button
          className="
            text-left
            rounded-2xl
            border
            border-border
            p-6
            transition-all
            hover:border-primary/30
            hover:bg-primary/5
            group
          "
        >
          <ShoppingBag className="text-primary mb-4" size={26} />

          <h3 className="font-heading text-lg">
            Zamówienia
          </h3>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Pobierz pełną historię swoich zamówień
            w formacie TXT.
          </p>

          <div className="mt-6 flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            <Download size={16} />
            Pobierz
          </div>
        </button>

        <button
          className="
            text-left
            rounded-2xl
            border
            border-border
            p-6
            transition-all
            hover:border-primary/30
            hover:bg-primary/5
            group
          "
        >
          <Ticket className="text-primary mb-4" size={26} />

          <h3 className="font-heading text-lg">
            Rezerwacje
          </h3>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Pobierz pełną historię swoich rezerwacji
            w formacie TXT.
          </p>

          <div className="mt-6 flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            <Download size={16} />
            Pobierz
          </div>
        </button>

      </div>
    </div>
  )
}