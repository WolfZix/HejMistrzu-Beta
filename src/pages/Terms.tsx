import { sections, content } from "@/data/terms";


export default function Terms() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            HejMistrzu · Dokumenty
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Regulamin sklepu internetowego Hej Mistrzu
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Zasady zawierania umów poprzez Sklep oraz najważniejsze informacje o Sprzedawcy,
            Sklepie i prawach Kupującego.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:py-14">
        <aside className="h-fit rounded-2xl border border-border bg-card p-5 lg:sticky lg:top-24">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
            Spis treści
          </h2>
          <nav aria-label="Spis treści regulaminu" className="grid gap-1">
            {sections.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-lg px-3 py-2 text-sm leading-5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-8 border-b border-border pb-6">
            <p className="text-sm leading-6 text-muted-foreground">
              Poniżej znajduje się treść regulaminu sklepu internetowego Hej Mistrzu.
              Poszczególne paragrafy możesz otworzyć bezpośrednio ze spisu treści.
            </p>
          </div>

          <div className="space-y-3 text-[15px] leading-7 text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
            {content.map((item, index) => {
              if (item.type === "heading") {
                return (
                  <h2
                    key={index}
                    id={item.id}
                    className="scroll-mt-28 border-b border-border pb-3 pt-10 text-xl font-bold tracking-tight text-foreground first:pt-0 sm:text-2xl"
                  >
                    {item.text}
                  </h2>
                );
              }
              if (item.type === "subheading") {
                return (
                  <h3 key={index} className="pt-6 text-base font-bold text-foreground sm:text-lg">
                    {item.text}
                  </h3>
                );
              }
              if (item.type === "link") {
                return (
                  <p key={index} className="break-all">
                    <a href={item.text} target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4">
                      {item.text}
                    </a>
                  </p>
                );
              }
              return <p key={index}>{item.text}</p>;
            })}
          </div>

          <div className="mt-12 rounded-xl bg-muted/50 p-5">
            <p className="text-sm leading-6 text-muted-foreground">
              W razie pytań dotyczących regulaminu skontaktuj się ze Sprzedawcą,
              korzystając z danych kontaktowych wskazanych w § 2.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
