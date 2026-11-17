const sections = [
  {
    title: "1. Administrator danych osobowych",
    content: (
      <>
        <p>
          Administratorem Twoich danych osobowych jest Tomasz Szachta,
          przedsiębiorca prowadzący działalność gospodarczą pod firmą
          Hej Mistrzu Tomasz Szachta, wpisany do Centralnej Ewidencji
          i Informacji o Działalności Gospodarczej.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Info label="NIP" value="5882520393" />
          <Info label="REGON" value="529933682" />
          <Info
            label="Adres"
            value="Cegielniana 57B/1, 84-230 Rumia"
          />
          <Info
            label="E-mail"
            value="biuro.hejmistrzu@gmail.com"
          />
        </div>
        <p>
          W sprawach związanych z przetwarzaniem danych osobowych
          możesz skontaktować się z nami pod wskazanym adresem e-mail.
        </p>
      </>
    ),
  },
];

const rights = [
  ["Dostęp do danych", "Możesz uzyskać informację o przetwarzanych danych oraz ich kopię (art. 15 RODO)."],
  ["Sprostowanie danych", "Możesz zażądać poprawienia nieprawidłowych lub niekompletnych danych (art. 16 RODO)."],
  ["Usunięcie danych", "Możesz zażądać usunięcia swoich danych w przypadkach przewidzianych prawem (art. 17 RODO)."],
  ["Ograniczenie przetwarzania", "Możesz zażądać ograniczenia przetwarzania danych (art. 18 RODO)."],
  ["Przenoszenie danych", "Możesz otrzymać dane w ustrukturyzowanym formacie i przekazać je innemu administratorowi (art. 20 RODO)."],
  ["Sprzeciw", "Możesz wnieść sprzeciw wobec przetwarzania danych opartego na prawnie uzasadnionym interesie (art. 21 RODO)."],
];

const processing = [
  {
    title: "Złożenie zamówienia w Sklepie",
    purpose: "Realizacja Twojego zamówienia.",
    basis: "Umowa sprzedaży lub umowa o dostarczenie treści cyfrowych (art. 6 ust. 1 lit. b RODO) oraz obowiązek prawny związany z rachunkowością (art. 6 ust. 1 lit. c RODO).",
    duration: "Przez okres obowiązywania umowy oraz do momentu wygaśnięcia obowiązków prawnych związanych z rachunkowością. Dane mogą być również przechowywane do upływu okresu przedawnienia roszczeń.",
    missing: "Nie będziesz mieć możliwości złożenia zamówienia.",
  },
  {
    title: "Założenie konta w Sklepie",
    purpose: "Prowadzenie konta użytkownika i umożliwienie korzystania z jego funkcji.",
    basis: "Umowa o świadczenie usług (art. 6 ust. 1 lit. b RODO).",
    duration: "Przez okres obowiązywania umowy oraz do upływu okresu przedawnienia ewentualnych roszczeń.",
    missing: "Nie będziesz mieć możliwości założenia konta ani korzystania z jego funkcji, takich jak historia i status zamówień.",
  },
  {
    title: "Kontakt z nami",
    purpose: "Obsługa Twoich zapytań i zgłoszeń.",
    basis: "Art. 6 ust. 1 lit. b RODO – jeśli kontakt dotyczy umowy lub jej zawarcia, albo art. 6 ust. 1 lit. f RODO – jeśli kontakt nie jest związany z umową i wynika z naszego prawnie uzasadnionego interesu.",
    duration: "Przez czas trwania umowy lub do upływu okresu przedawnienia roszczeń. W przypadku kontaktu niezwiązanego z umową – do momentu uwzględnienia sprzeciwu lub ustania celu przetwarzania.",
    missing: "Nie będziemy mogli odpowiedzieć na Twoje zapytanie lub zgłoszenie.",
  },
  {
    title: "Ustalenie, dochodzenie lub obrona roszczeń",
    purpose: "Ochrona naszych interesów prawnych związanych z zawartą umową lub świadczonymi usługami.",
    basis: "Nasz prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO).",
    duration: "Do upływu okresu przedawnienia roszczeń lub do momentu uwzględnienia sprzeciwu, zależnie od sytuacji.",
    missing: "Brak możliwości ustalenia, dochodzenia lub obrony roszczeń.",
  },
];

const recipients = [
  ["Korzystanie ze Sklepu", "Dostawca usług hostingowych"],
  ["Korzystanie ze Sklepu", "Podmiot zapewniający wsparcie techniczne i IT"],
  ["Bieżąca działalność", "Osoby współpracujące z nami na podstawie umów cywilnoprawnych"],
  ["Działania marketingowe", "Podmioty świadczące usługi marketingowe"],
  ["Złożenie zamówienia", "Dostawca usług płatniczych"],
  ["Dostawa zamówienia", "Podmiot realizujący dostawę produktu"],
  ["Rozliczenia", "Biuro rachunkowe"],
  ["Newsletter i wiadomości marketingowe", "Podmiot zapewniający wysyłkę wiadomości"],
];

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#c79b3b]">
        {label}
      </p>
      <p className="text-sm text-white/80">{value}</p>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#c79b3b]/10 text-sm font-bold text-[#c79b3b]">
          {number}
        </span>
        <h2 className="pt-1 text-xl font-semibold text-white sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 pl-0 text-sm leading-7 text-white/65 sm:pl-[52px]">
        {children}
      </div>
    </section>
  );
}

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#0f1115] pb-20 pt-28 text-white">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">

        {/* Nagłówek */}
        <header className="mb-16 max-w-3xl">
          <span className="mb-4 inline-flex rounded-full border border-[#c79b3b]/30 bg-[#c79b3b]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c79b3b]">
            Dokumenty prawne
          </span>

          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Polityka <span className="text-[#c79b3b]">prywatności</span>
          </h1>

          <p className="text-base leading-7 text-white/55">
            Dbamy o Twoją prywatność i bezpieczeństwo Twoich danych.
            Poniżej znajdziesz informacje o zasadach ich przetwarzania
            oraz wykorzystywaniu plików cookies w Sklepie HejMistrzu.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/40">
            <span>HejMistrzu</span>
            <span>•</span>
            <span>Ochrona danych osobowych</span>
            <span>•</span>
            <span>RODO</span>
          </div>
        </header>

        {/* Treść */}
        <div className="space-y-14">

          <Section number="01" title="Administrator danych osobowych">
            <p>
              Administratorem Twoich danych osobowych jest Tomasz Szachta,
              przedsiębiorca prowadzący działalność gospodarczą pod firmą
              Hej Mistrzu Tomasz Szachta, wpisany do Centralnej Ewidencji
              i Informacji o Działalności Gospodarczej.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <Info label="NIP" value="5882520393" />
              <Info label="REGON" value="529933682" />
              <Info label="Adres" value="Cegielniana 57B/1, 84-230 Rumia" />
              <Info label="Kontakt" value="biuro.hejmistrzu@gmail.com" />
            </div>

            <p>
              Jeśli chcesz skontaktować się z nami w związku
              z przetwarzaniem Twoich danych osobowych, napisz
              na adres:{" "}
              <a
                href="mailto:biuro.hejmistrzu@gmail.com"
                className="text-[#c79b3b] hover:underline"
              >
                biuro.hejmistrzu@gmail.com
              </a>.
            </p>
          </Section>

          <Section number="02" title="Twoje prawa">
            <p>
              W związku z przetwarzaniem Twoich danych osobowych
              przysługują Ci następujące prawa:
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {rights.map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-[#181b22] p-4"
                >
                  <h3 className="mb-2 font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-white/55">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <p>
              Aby skorzystać ze swoich praw, skontaktuj się z nami.
              Sprzeciw wobec wykorzystywania plików cookies możesz
              wyrazić również poprzez odpowiednie ustawienia przeglądarki.
            </p>

            <div className="rounded-xl border border-[#c79b3b]/20 bg-[#c79b3b]/[0.06] p-5">
              <p className="font-medium text-white">
                Masz prawo złożyć skargę.
              </p>
              <p className="mt-2">
                Jeśli uznasz, że Twoje dane są przetwarzane niezgodnie
                z prawem, możesz złożyć skargę do Prezesa Urzędu
                Ochrony Danych Osobowych (UODO).
              </p>
            </div>
          </Section>

          <Section number="03" title="Dane osobowe i prywatność">
            <p>
              Poniżej przedstawiamy szczegółowe informacje dotyczące
              przetwarzania Twoich danych w zależności od podejmowanych
              przez Ciebie działań.
            </p>

            <div className="space-y-4">
              {processing.map((item, index) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-xl border border-white/10 bg-[#181b22]"
                >
                  <div className="border-b border-white/10 px-5 py-4">
                    <h3 className="font-semibold text-white">
                      {index + 1}. {item.title}
                    </h3>
                  </div>

                  <div className="space-y-4 p-5">
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#c79b3b]">
                        Cel przetwarzania
                      </p>
                      <p>{item.purpose}</p>
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#c79b3b]">
                        Podstawa prawna
                      </p>
                      <p>{item.basis}</p>
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#c79b3b]">
                        Okres przechowywania
                      </p>
                      <p>{item.duration}</p>
                    </div>

                    <div className="rounded-lg bg-white/[0.03] p-3">
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">
                        Co się stanie, jeśli nie podasz danych?
                      </p>
                      <p>{item.missing}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section number="04" title="Bezpieczeństwo danych">
            <p>
              Przetwarzając Twoje dane osobowe, stosujemy środki
              organizacyjne i techniczne zgodne z obowiązującymi
              przepisami prawa. W szczególności korzystamy
              z szyfrowania połączenia za pomocą certyfikatu SSL/TLS,
              aby chronić dane przesyłane pomiędzy Twoim urządzeniem
              a naszym Sklepem.
            </p>
          </Section>

          <Section number="05" title="Pliki cookies">
            <p>
              Nasz Sklep, podobnie jak większość witryn internetowych,
              korzysta z plików cookies (tzw. ciasteczek). Są to
              niewielkie pliki zapisywane w pamięci Twojego urządzenia,
              np. komputera lub telefonu.
            </p>

            <p>
              Pliki cookies nie powodują zmian w konfiguracji
              Twojego urządzenia. W naszym Sklepie są wykorzystywane
              w następujących celach:
            </p>

            <ul className="list-disc space-y-2 pl-5 marker:text-[#c79b3b]">
              <li>Zapamiętywanie Twojej sesji.</li>
              <li>Prowadzenie statystyk.</li>
              <li>Udostępnianie funkcji Sklepu.</li>
            </ul>

            <div className="rounded-xl border border-white/10 bg-[#181b22] p-5">
              <h3 className="mb-3 font-semibold text-white">
                Zarządzanie plikami cookies
              </h3>
              <p>
                Możesz w dowolnym momencie zarządzać plikami cookies
                za pomocą ustawień swojej przeglądarki internetowej.
                Możesz między innymi:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#c79b3b]">
                <li>Usunąć zapisane pliki cookies.</li>
                <li>Zablokować zapisywanie plików cookies w przyszłości.</li>
              </ul>
              <p className="mt-3">
                Szczegółowe instrukcje znajdziesz w pomocy swojej
                przeglądarki, np. Google Chrome, Opera, Safari,
                Mozilla Firefox lub Microsoft Edge.
              </p>
            </div>

            <p>
              Zgodnie z informacjami udostępnionymi na dotychczasowej
              stronie Sklepu, pliki cookies nie są przechowywane
              dłużej niż 5 dni od ostatniej wizyty.
            </p>
          </Section>

          <Section number="06" title="Odbiorcy danych i usługi zewnętrzne">
            <p>
              Korzystamy z usług podmiotów zewnętrznych, które wspierają
              nas w prowadzeniu działalności. Podmiotom tym możemy
              powierzać przetwarzanie Twoich danych osobowych.
              Przetwarzają one dane zgodnie z naszymi udokumentowanymi
              poleceniami oraz w zakresie niezbędnym do świadczenia usług.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="bg-[#c79b3b]/10 text-[#c79b3b]">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Działanie</th>
                    <th className="px-5 py-4 font-semibold">Odbiorca danych</th>
                    <th className="px-5 py-4 font-semibold">Transfer poza UE</th>
                  </tr>
                </thead>
                <tbody>
                  {recipients.map(([action, recipient], index) => (
                    <tr
                      key={index}
                      className="border-t border-white/10 text-white/65"
                    >
                      <td className="px-5 py-4">{action}</td>
                      <td className="px-5 py-4">{recipient}</td>
                      <td className="px-5 py-4 text-white/45">
                        Nie ma miejsca
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Ponadto Twoje dane mogą zostać udostępnione odpowiednim
              organom publicznym, jeżeli będziemy zobowiązani do tego
              na podstawie obowiązujących przepisów prawa.
            </p>
          </Section>

        </div>

        {/* Zakończenie */}
        <div className="mt-16 rounded-2xl border border-[#c79b3b]/20 bg-[#181b22] p-6 sm:p-8">
          <h2 className="mb-3 text-xl font-semibold text-white">
            Masz pytania dotyczące prywatności?
          </h2>
          <p className="mb-5 text-sm leading-6 text-white/55">
            Jeśli masz pytania dotyczące przetwarzania Twoich danych
            osobowych lub chcesz skorzystać ze swoich praw,
            skontaktuj się z nami.
          </p>
          <a
            href="mailto:biuro.hejmistrzu@gmail.com"
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
