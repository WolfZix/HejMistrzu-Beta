import { sections, content } from "@/data/terms";

export default function Terms() {
  const groupedSections = sections.map(([label, id]) => {
    const startIndex = content.findIndex(
      (item) => item.type === "heading" && item.id === id
    );

    const nextHeading = content.findIndex(
      (item, index) => index > startIndex && item.type === "heading"
    );

    return {
      label,
      id,
      heading: content[startIndex],
      items: content.slice(
        startIndex + 1,
        nextHeading === -1 ? undefined : nextHeading
      ),
    };
  });

  return (
    <main className="min-h-screen bg-[#0f1115] pb-20 pt-28 text-white">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Nagłówek */}
        <header className="mb-16 max-w-3xl">
          <span className="mb-4 inline-flex rounded-full border border-[#c79b3b]/30 bg-[#c79b3b]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c79b3b]">
            Dokumenty prawne
          </span>

          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Regulamin <span className="text-[#c79b3b]">sklepu</span>
          </h1>

          <p className="text-base leading-7 text-white/55">
            Zasady dokonywania zakupów w sklepie internetowym HejMistrzu.
            Poniżej znajdziesz informacje dotyczące zamówień, płatności,
            dostawy oraz praw kupujących.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/40">
            <span>HejMistrzu</span>
            <span>•</span>
            <span>Regulamin sklepu</span>
            <span>•</span>
            <span>Prawa konsumenta</span>
          </div>
        </header>

        {/* Treść regulaminu */}
        <div className="space-y-14">
          {groupedSections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28"
            >
              <div className="mb-5 flex items-start gap-4">
                <span className="pt-1 text-sm font-bold tracking-wider text-[#c79b3b]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {section.heading.text}
                </h2>
              </div>

              <div className="space-y-3 pl-9 text-[15px] leading-7 text-white/55">
                {section.items.map((item, itemIndex) => {
                  if (item.type === "subheading") {
                    return (
                      <h3
                        key={itemIndex}
                        className="pt-5 font-semibold text-white"
                      >
                        {item.text}
                      </h3>
                    );
                  }

                  const isUrl = /^https?:/.test(item.text);
                  const url = item.text.replace(/\\/g, "");

                  if (item.type === "link" || isUrl) {
                    return (
                      <p key={itemIndex} className="break-all">
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#c79b3b] hover:underline"
                        >
                          {url}
                        </a>
                      </p>
                    );
                  }

                  return <p key={itemIndex}>{item.text}</p>;
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Zakończenie */}
        <div className="mt-16 rounded-2xl border border-[#c79b3b]/20 bg-[#181b22] p-6 sm:p-8">
          <h2 className="mb-3 text-xl font-semibold text-white">
            Masz pytania dotyczące regulaminu?
          </h2>

          <p className="mb-5 text-sm leading-6 text-white/55">
            Jeśli potrzebujesz dodatkowych informacji dotyczących zakupów,
            płatności lub reklamacji, skontaktuj się z nami.
          </p>

          <a
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-lg bg-[#c79b3b] px-5 py-3 text-sm font-semibold text-[#0f1115] transition hover:bg-[#d8ae50]"
          >
            Skontaktuj się z nami
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-white/30">
          HejMistrzu © {new Date().getFullYear()} · Wszelkie prawa zastrzeżone
        </p>
      </div>
    </main>
  );
}
