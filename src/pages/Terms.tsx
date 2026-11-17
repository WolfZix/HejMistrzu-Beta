const sections = [
  ["§ 1 Definicje", "definicje"],
  ["§ 2 Kontakt ze Sprzedawcą", "kontakt"],
  ["§ 3 Wymogi techniczne", "wymogi-techniczne"],
  ["§ 4 Zakupy w Sklepie", "zakupy"],
  ["§ 5 Płatności", "platnosci"],
  ["§ 6 Realizacja zamówienia", "realizacja"],
  ["§ 7 Prawo odstąpienia od umowy", "odstapienie"],
  ["§ 8 Wyjątki od prawa odstąpienia od umowy", "wyjatki"],
  ["§ 9 Reklamacje", "reklamacje"],
  ["§ 10 Dane osobowe", "dane-osobowe"],
  ["§ 11 Zastrzeżenia", "zastrzezenia"],
  ["Załącznik nr 1: Wzór formularza odstąpienia od umowy", "formularz"],
];

const content: { type: string; id?: string; text: string }[] = [
  {
    "type": "paragraph",
    "text": "Regulamin sklepu"
  },
  {
    "type": "paragraph",
    "text": "internetowego Hej Mistrzu"
  },
  {
    "type": "paragraph",
    "text": "określający m.in. zasady zawierania umów poprzez Sklep, zawierający najważniejsze informacje o Sprzedawcy, Sklepie oraz o prawach Konsumenta"
  },
  {
    "type": "heading",
    "id": "definicje",
    "text": "§ 1 DEFINICJE"
  },
  {
    "type": "paragraph",
    "text": "Dni robocze – dni od poniedziałku do piątku za wyjątkiem dni ustawowo wolnych od pracy w Polsce."
  },
  {
    "type": "paragraph",
    "text": "Kodeks cywilny – polska ustawa z dnia 23 kwietnia 1964 r. Kodeks cywilny."
  },
  {
    "type": "paragraph",
    "text": "Konsument – Kupujący będący osobą fizyczną, kupujący w Sklepie lub podejmujący czynności zmierzające do dokonania zakupu, bez bezpośredniego związku z jego działalnością gospodarczą lub zawodową."
  },
  {
    "type": "paragraph",
    "text": "Konto – uregulowana odrębnym regulaminem usługa cyfrowa w rozumieniu Ustawy o prawach konsumenta, dzięki której Kupujący może nieodpłatnie skorzystać z dodatkowych funkcji w Sklepie."
  },
  {
    "type": "paragraph",
    "text": "Kupujący – każdy podmiot kupujący w Sklepie lub podejmujący czynności zmierzające do dokonania zakupu."
  },
  {
    "type": "paragraph",
    "text": "Kupujący uprzywilejowany – Konsument lub Przedsiębiorca uprzywilejowany."
  },
  {
    "type": "paragraph",
    "text": "Przedsiębiorca uprzywilejowany – Kupujący będący osobą fizyczną, zawierający lub zamierzający zawrzeć ze Sprzedawcą umowę na podstawie Regulaminu bezpośrednio związaną z jego działalnością gospodarczą, ale nieposiadającą dla niego charakteru zawodowego."
  },
  {
    "type": "paragraph",
    "text": "Regulamin – niniejszy regulamin."
  },
  {
    "type": "paragraph",
    "text": "Sklep – sklep internetowy Hej Mistrzu prowadzony przez Sprzedawcę pod adresem https\\://www.hejmistrzu.pl."
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca –"
  },
  {
    "type": "paragraph",
    "text": "Tomasz Szachta,"
  },
  {
    "type": "paragraph",
    "text": "przedsiębiorca prowadzący działalność gospodarczą pod firmą"
  },
  {
    "type": "paragraph",
    "text": "Hej Mistrzu Tomasz Szachta,"
  },
  {
    "type": "paragraph",
    "text": "wpisany do Centralnej Ewidencji i Informacji o Działalności Gospodarczej"
  },
  {
    "type": "paragraph",
    "text": "prowadzonej przez ministra właściwego do spraw gospodarki i prowadzenia"
  },
  {
    "type": "paragraph",
    "text": "Centralnej Ewidencji i Informacji o Działalności Gospodarczej, NIP"
  },
  {
    "type": "paragraph",
    "text": "5882520393,"
  },
  {
    "type": "paragraph",
    "text": "nr REGON 529933682,"
  },
  {
    "type": "paragraph",
    "text": "Cegielniana 57B/1, 84-230 Rumia."
  },
  {
    "type": "paragraph",
    "text": "Treści cyfrowe – dane wytwarzane i dostarczane w postaci cyfrowej."
  },
  {
    "type": "paragraph",
    "text": "Ustawa o prawach konsumenta – polska ustawa z dnia 30 maja 2014 r. o prawach konsumenta."
  },
  {
    "type": "paragraph",
    "text": "Postanowienia Regulaminu dotyczące produktów mają zastosowanie zarówno do rzeczy ruchomych (towarów), jak i Treści cyfrowych."
  },
  {
    "type": "heading",
    "id": "kontakt",
    "text": "§ 2 KONTAKT ZE SPRZEDAWCĄ"
  },
  {
    "type": "paragraph",
    "text": "Adres pocztowy:"
  },
  {
    "type": "paragraph",
    "text": "Cegielniana 57B/1, 84-230 Rumia"
  },
  {
    "type": "paragraph",
    "text": "Adres e-mail: biuro.hejmistrzu@gmail.com"
  },
  {
    "type": "paragraph",
    "text": "Telefon: 508302733"
  },
  {
    "type": "paragraph",
    "text": "Koszt połączenia telefonicznego lub transmisji danych wykonywanych przez Kupującego wynika z podstawowej taryfy operatora telekomunikacyjnego lub dostawcy usług internetowych, z którego usług korzysta Kupujący. Sprzedawca zwraca uwagę, że koszt połączenia międzynarodowego lub międzynarodowej transmisji danych może być wyższy niż koszt połączenia lub transmisji krajowej – w zależności od taryfy przyjętej przez operatora telekomunikacyjnego lub dostawcę usług internetowych, z usług którego korzysta Kupujący."
  },
  {
    "type": "heading",
    "id": "wymogi-techniczne",
    "text": "§ 3 WYMOGI TECHNICZNE"
  },
  {
    "type": "paragraph",
    "text": "Dla prawidłowego funkcjonowania Sklepu potrzebne jest:"
  },
  {
    "type": "paragraph",
    "text": "urządzenie z dostępem do Internetu"
  },
  {
    "type": "paragraph",
    "text": "przeglądarka internetowa obsługująca JavaScript oraz pliki cookies."
  },
  {
    "type": "paragraph",
    "text": "Dla złożenia zamówienia w Sklepie, poza wymogami określonymi w ust. 1, niezbędne jest aktywne konto e-mail."
  },
  {
    "type": "heading",
    "id": "zakupy",
    "text": "§ 4 ZAKUPY W SKLEPIE"
  },
  {
    "type": "paragraph",
    "text": "Ceny produktów widoczne w Sklepie są całkowitymi cenami za produkt."
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca zwraca uwagę, że na całkowitą cenę zamówienia składają się wskazane w Sklepie: cena za produkt oraz, jeśli w danym przypadku ma to zastosowanie, koszty dostawy towaru."
  },
  {
    "type": "paragraph",
    "text": "Wybrany do kupienia produkt należy dodać do koszyka w Sklepie."
  },
  {
    "type": "paragraph",
    "text": "Następnie Kupujący wybiera"
  },
  {
    "type": "paragraph",
    "text": "sposób dostawy towaru oraz"
  },
  {
    "type": "paragraph",
    "text": "metodę płatności za zamówienie spośród dostępnych w Sklepie opcji, a także podaje dane niezbędne do zrealizowania złożonego zamówienia."
  },
  {
    "type": "paragraph",
    "text": "Zamówienie zostaje złożone w momencie potwierdzenia jego treści i zaakceptowania Regulaminu przez Kupującego."
  },
  {
    "type": "paragraph",
    "text": "Złożenie zamówienia jest tożsame z zawarciem umowy pomiędzy Kupującym a Sprzedawcą."
  },
  {
    "type": "paragraph",
    "text": "Kupujący może zarejestrować się w Sklepie, tj. założyć w nim Konto, lub dokonywać zakupów bez rejestracji poprzez podawanie swoich danych przy każdym ewentualnym zamówieniu."
  },
  {
    "type": "heading",
    "id": "platnosci",
    "text": "§ 5 PŁATNOŚCI"
  },
  {
    "type": "paragraph",
    "text": "W Sklepie dostępne są następujące metody płatności:"
  },
  {
    "type": "paragraph",
    "text": "za pomocą karty płatniczej:"
  },
  {
    "type": "paragraph",
    "text": "Visa"
  },
  {
    "type": "paragraph",
    "text": "Visa Electron"
  },
  {
    "type": "paragraph",
    "text": "MasterCard"
  },
  {
    "type": "paragraph",
    "text": "MasterCard Electronic"
  },
  {
    "type": "paragraph",
    "text": "Maestro"
  },
  {
    "type": "paragraph",
    "text": "za pośrednictwem platformy płatniczej:"
  },
  {
    "type": "paragraph",
    "text": "PayPal"
  },
  {
    "type": "paragraph",
    "text": "Przelewy24"
  },
  {
    "type": "paragraph",
    "text": "za pobraniem, tj."
  },
  {
    "type": "paragraph",
    "text": "kartą lub gotówką"
  },
  {
    "type": "paragraph",
    "text": "w momencie dostarczenia towaru do Kupującego;"
  },
  {
    "type": "paragraph",
    "text": "kartą lub gotówką"
  },
  {
    "type": "paragraph",
    "text": "w momencie odbioru osobistego towaru."
  },
  {
    "type": "paragraph",
    "text": "W przypadku wybrania przez Kupującego płatności z góry, za zamówienie należy zapłacić w"
  },
  {
    "type": "paragraph",
    "text": "terminie 20 Dni roboczych od złożenia zamówienia."
  },
  {
    "type": "paragraph",
    "text": "Dokonując zakupów w Sklepie, Kupujący akceptuje stosowanie faktur elektronicznych przez Sprzedawcę."
  },
  {
    "type": "paragraph",
    "text": "Kupujący ma prawo wycofać swoją akceptację."
  },
  {
    "type": "heading",
    "id": "realizacja",
    "text": "§ 6 REALIZACJA ZAMÓWIENIA"
  },
  {
    "type": "paragraph",
    "text": "Termin realizacji zamówienia wynosi 5 Dni roboczych."
  },
  {
    "type": "paragraph",
    "text": "W przypadku gdy Kupujący wybrał płatność z góry za zamówienie, Sprzedawca przystąpi do realizacji zamówienia po"
  },
  {
    "type": "paragraph",
    "text": "jego opłaceniu."
  },
  {
    "type": "paragraph",
    "text": "Towar dostarczany jest wyłącznie na terytorium Rzeczypospolitej Polskiej."
  },
  {
    "type": "paragraph",
    "text": "W Sklepie dostępne są następujące metody dostawy:"
  },
  {
    "type": "paragraph",
    "text": "za pośrednictwem firmy kurierskiej;"
  },
  {
    "type": "paragraph",
    "text": "do paczkomatów InPost;"
  },
  {
    "type": "paragraph",
    "text": "drogą elektroniczną, na adres e-mail podany przez Kupującego podczas składania zamówienia – w przypadku Treści cyfrowych."
  },
  {
    "type": "paragraph",
    "text": "Kupujący może odebrać towar osobiście w siedzibie firmy w godzinach jej otwarcia."
  },
  {
    "type": "paragraph",
    "text": "W przypadku wybrania odbioru osobistego przez Kupującego, towar będzie gotowy do odbioru we wskazanym terminie realizacji zamówienia."
  },
  {
    "type": "heading",
    "id": "odstapienie",
    "text": "§ 7 PRAWO ODSTĄPIENIA OD UMOWY"
  },
  {
    "type": "paragraph",
    "text": "Kupujący uprzywilejowany ma prawo odstąpić od umowy zawartej ze Sprzedawcą za pośrednictwem Sklepu, z zastrzeżeniem § 8"
  },
  {
    "type": "paragraph",
    "text": "Regulaminu, w terminie 14 dni bez podania jakiejkolwiek przyczyny."
  },
  {
    "type": "paragraph",
    "text": "Termin do odstąpienia od umowy wygasa po upływie 14 dni"
  },
  {
    "type": "paragraph",
    "text": "od dnia:"
  },
  {
    "type": "paragraph",
    "text": "w którym Kupujący uprzywilejowany wszedł w posiadanie towaru lub w którym osoba trzecia inna niż przewoźnik i wskazana"
  },
  {
    "type": "paragraph",
    "text": "przez Kupującego uprzywilejowanego weszła w posiadanie tego towaru;"
  },
  {
    "type": "paragraph",
    "text": "w którym Kupujący uprzywilejowany wszedł w posiadanie ostatniego towaru, partii lub części lub w którym osoba trzecia, inna niż przewoźnik i wskazana przez Kupującego uprzywilejowanego, weszła w posiadanie ostatniego towaru, partii lub części, w przypadku umowy zobowiązującej do przeniesienia własności wielu towarów, które dostarczane są osobno, partiami lub w częściach;"
  },
  {
    "type": "paragraph",
    "text": "zawarcia umowy – w przypadku umowy o dostarczenie Treści cyfrowych."
  },
  {
    "type": "paragraph",
    "text": "Aby Kupujący uprzywilejowany mógł skorzystać z prawa odstąpienia od umowy musi poinformować Sprzedawcę, korzystając z danych"
  },
  {
    "type": "paragraph",
    "text": "podanych w § 2 Regulaminu, o swojej decyzji o odstąpieniu od umowy w drodze jednoznacznego oświadczenia (na"
  },
  {
    "type": "paragraph",
    "text": "przykład pismo wysłane pocztą lub pocztą elektroniczną)."
  },
  {
    "type": "paragraph",
    "text": "Kupujący uprzywilejowany może skorzystać z wzoru formularza odstąpienia od umowy umieszczonego na końcu Regulaminu, jednak nie"
  },
  {
    "type": "paragraph",
    "text": "jest to obowiązkowe."
  },
  {
    "type": "paragraph",
    "text": "Aby zachować termin do odstąpienia od umowy wystarczy, że Kupujący uprzywilejowany wyśle informację dotyczącą wykonania"
  },
  {
    "type": "paragraph",
    "text": "przysługującego mu prawa odstąpienia od umowy przed upływem terminu do odstąpienia od umowy."
  },
  {
    "type": "subheading",
    "text": "SKUTKI ODSTĄPIENIA OD UMOWY"
  },
  {
    "type": "paragraph",
    "text": "W przypadku odstąpienia od zawartej umowy Sprzedawca zwraca Kupującemu uprzywilejowanemu wszystkie otrzymane od niego"
  },
  {
    "type": "paragraph",
    "text": "płatności, w tym koszty dostarczenia towaru (z wyjątkiem dodatkowych kosztów wynikających z wybranego przez Kupującego uprzywilejowanego sposobu dostarczenia innego niż najtańszy zwykły sposób dostarczenia oferowany przez Sprzedawcę),"
  },
  {
    "type": "paragraph",
    "text": "niezwłocznie, a w każdym przypadku nie później niż 14 dni od dnia, w którym Sprzedawca został poinformowany o decyzji"
  },
  {
    "type": "paragraph",
    "text": "Kupującego uprzywilejowanego o wykonaniu prawa odstąpienia od umowy."
  },
  {
    "type": "paragraph",
    "text": "Zwrotu płatności Sprzedawca dokona przy użyciu takich samych sposobów płatności, jakie zostały przez"
  },
  {
    "type": "paragraph",
    "text": "Kupującego uprzywilejowanego użyte w pierwotnej transakcji, chyba że Kupujący uprzywilejowany zgodzi się na inne"
  },
  {
    "type": "paragraph",
    "text": "rozwiązanie, w każdym przypadku Kupujący uprzywilejowany nie poniesie żadnych opłat w związku z tym zwrotem."
  },
  {
    "type": "paragraph",
    "text": "Jeżeli Sprzedawca nie zaproponował, że sam odbierze towar od Kupującego uprzywilejowanego, może wstrzymać się ze zwrotem płatności do czasu otrzymania towaru lub do czasu dostarczenia mu"
  },
  {
    "type": "paragraph",
    "text": "dowodu jego odesłania, w zależności od tego, które zdarzenie nastąpi wcześniej."
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca prosi o zwracanie towaru na adres:"
  },
  {
    "type": "paragraph",
    "text": "Cegielniana 57B/1, 84-230 Rumia niezwłocznie, a w każdym razie nie później niż 14 dni od dnia, w którym Kupujący uprzywilejowany poinformował"
  },
  {
    "type": "paragraph",
    "text": "Sprzedawcę o odstąpieniu od umowy sprzedaży. Termin jest zachowany, jeżeli Kupujący uprzywilejowany odeśle towar"
  },
  {
    "type": "paragraph",
    "text": "przed upływem terminu 14 dni."
  },
  {
    "type": "paragraph",
    "text": "Kupujący uprzywilejowany ponosi bezpośrednie koszty zwrotu towaru."
  },
  {
    "type": "paragraph",
    "text": "Kupujący uprzywilejowany odpowiada tylko za zmniejszenie wartości towaru wynikające z korzystania z niego"
  },
  {
    "type": "paragraph",
    "text": "w sposób inny niż było to konieczne do stwierdzenia charakteru, cech i funkcjonowania towaru."
  },
  {
    "type": "paragraph",
    "text": "Jeśli towar ze względu na swój charakter nie może zostać odesłany w zwykłym trybie pocztą, Kupujący"
  },
  {
    "type": "paragraph",
    "text": "uprzywilejowany również będzie musiał ponieść bezpośrednie koszty zwrotu towarów. O szacowanej wysokości tych"
  },
  {
    "type": "paragraph",
    "text": "kosztów Kupujący uprzywilejowany zostanie poinformowany przez Sprzedawcę w opisie towaru w Sklepie lub podczas"
  },
  {
    "type": "paragraph",
    "text": "składania zamówienia."
  },
  {
    "type": "paragraph",
    "text": "W przypadku wystąpienia konieczności zwrotu środków za transakcję dokonaną przez Kupującego uprzywilejowanego"
  },
  {
    "type": "paragraph",
    "text": "kartą płatniczą, Sprzedawca dokona zwrotu na rachunek bankowy przypisany do tej karty płatniczej."
  },
  {
    "type": "heading",
    "id": "wyjatki",
    "text": "§ 8 WYJĄTKI OD PRAWA ODSTĄPIENIA OD UMOWY"
  },
  {
    "type": "paragraph",
    "text": "Prawo odstąpienia od umowy zawartej na odległość, o którym mowa w § 7 Regulaminu, nie przysługuje w odniesieniu do"
  },
  {
    "type": "paragraph",
    "text": "umowy:"
  },
  {
    "type": "paragraph",
    "text": "w której przedmiotem świadczenia jest towar nieprefabrykowany, wyprodukowany według specyfikacji"
  },
  {
    "type": "paragraph",
    "text": "Kupującego uprzywilejowanego lub służący zaspokojeniu jego zindywidualizowanych potrzeb;"
  },
  {
    "type": "paragraph",
    "text": "w której przedmiotem świadczenia jest towar ulegający szybkiemu zepsuciu lub mający krótki termin"
  },
  {
    "type": "paragraph",
    "text": "przydatności do użycia;"
  },
  {
    "type": "paragraph",
    "text": "w której przedmiotem świadczenia jest towar dostarczany w zapieczętowanym opakowaniu, którego po otwarciu"
  },
  {
    "type": "paragraph",
    "text": "opakowania nie można zwrócić ze względu na ochronę zdrowia lub ze względów higienicznych, jeżeli"
  },
  {
    "type": "paragraph",
    "text": "opakowanie zostało otwarte po dostarczeniu;"
  },
  {
    "type": "paragraph",
    "text": "w której przedmiotem świadczenia są towary, które po dostarczeniu, ze względu na swój charakter, zostają"
  },
  {
    "type": "paragraph",
    "text": "nierozłącznie połączone z innymi rzeczami;"
  },
  {
    "type": "paragraph",
    "text": "w której przedmiotem świadczenia są nagrania dźwiękowe lub wizualne albo programy komputerowe"
  },
  {
    "type": "paragraph",
    "text": "dostarczane w zapieczętowanym opakowaniu, jeżeli opakowanie zostało otwarte po dostarczeniu;"
  },
  {
    "type": "paragraph",
    "text": "o dostarczanie dzienników, periodyków lub czasopism, z wyjątkiem umowy o prenumeratę;"
  },
  {
    "type": "paragraph",
    "text": "w której cena lub wynagrodzenie zależy od wahań na rynku finansowym, nad którymi Sprzedawca nie"
  },
  {
    "type": "paragraph",
    "text": "sprawuje kontroli, i które mogą wystąpić przed upływem terminu do odstąpienia od umowy;"
  },
  {
    "type": "paragraph",
    "text": "o dostarczanie Treści cyfrowych, za które Kupujący uprzywilejowany jest zobowiązany do zapłaty ceny, jeżeli spełnione zostaną łącznie następujące warunki:"
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca rozpoczął świadczenie za wyraźną i uprzednią zgodą Kupującego uprzywilejowanego;"
  },
  {
    "type": "paragraph",
    "text": "Kupujący uprzywilejowany został poinformowany przed rozpoczęciem świadczenia, że po spełnieniu świadczenia przez Sprzedawcę utraci prawo do odstąpienia od umowy i przyjął to do wiadomości;"
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca przekazał Kupującemu uprzywilejowanemu zgodne z prawem potwierdzenie zawarcia umowy na odległość, obejmujące informację o ww. zgodzie, na trwałym nośniku w rozsądnym czasie po zawarciu umowy, najpóźniej przed rozpoczęciem świadczenia."
  },
  {
    "type": "heading",
    "id": "reklamacje",
    "text": "§ 9 REKLAMACJE"
  },
  {
    "type": "subheading",
    "text": "I POSTANOWIENIA OGÓLNE"
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca ponosi wobec Kupującego uprzywilejowanego odpowiedzialność za zgodność świadczenia z umową, przewidzianą przez powszechnie obowiązujące przepisy prawa, w tym zwłaszcza przez przepisy Ustawy o prawach konsumenta."
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca prosi o składanie reklamacji (w tym dotyczących działania Sklepu) na adres pocztowy lub elektroniczny wskazany w § 2 Regulaminu."
  },
  {
    "type": "paragraph",
    "text": "Jeśli na produkt została udzielona gwarancja, informacja o niej, a także o jej warunkach, jest dostępna w Sklepie."
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca ustosunkuje się do reklamacji w terminie 14 dni od dnia jej otrzymania."
  },
  {
    "type": "subheading",
    "text": "II KUPUJĄCY UPRZYWILEJOWANI"
  },
  {
    "type": "subheading",
    "text": "Towary"
  },
  {
    "type": "paragraph",
    "text": "W przypadku braku zgodności towaru z umową, Kupujący uprzywilejowany ma możliwość skorzystania z uprawnień określonych w rozdziale 5a Ustawy o prawach konsumenta."
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca ponosi odpowiedzialność za brak zgodności towaru z umową, istniejący w chwili jego dostarczenia i ujawniony w ciągu dwóch lat od tej chwili, chyba że termin przydatności towaru do użycia, określony przez Sprzedawcę, jego poprzedników prawnych lub osoby działające w ich imieniu, jest dłuższy."
  },
  {
    "type": "paragraph",
    "text": "Na podstawie przepisów Ustawy o prawach konsumenta, w przypadku braku zgodności z umową, Kupujący uprzywilejowany może żądać:"
  },
  {
    "type": "paragraph",
    "text": "wymiany towaru,"
  },
  {
    "type": "paragraph",
    "text": "naprawy towaru."
  },
  {
    "type": "paragraph",
    "text": "Dodatkowo, Kupujący uprzywilejowany może złożyć oświadczenie o:"
  },
  {
    "type": "paragraph",
    "text": "obniżeniu ceny,"
  },
  {
    "type": "paragraph",
    "text": "odstąpieniu od umowy"
  },
  {
    "type": "paragraph",
    "text": "w sytuacji, gdy:"
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca odmówił doprowadzenia towaru do zgodności z umową zgodnie z art. 43d ust. 2 Ustawy o prawach konsumenta;"
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca nie doprowadził towaru do zgodności z umową zgodnie z art. 43d ust. 4-6 Ustawy o prawach konsumenta;"
  },
  {
    "type": "paragraph",
    "text": "brak zgodności towaru z umową występuje nadal, pomimo że Sprzedawca próbował doprowadzić towar do zgodności z umową;"
  },
  {
    "type": "paragraph",
    "text": "brak zgodności towaru z umową jest na tyle istotny, że uzasadnia obniżenie ceny albo odstąpienie od umowy bez uprzedniego skorzystania ze środków ochrony określonych w art. 43d Ustawy o prawach konsumenta;"
  },
  {
    "type": "paragraph",
    "text": "z oświadczenia Sprzedawcy lub okoliczności wyraźnie wynika, że nie doprowadzi on towaru do zgodności z umową w rozsądnym czasie lub bez nadmiernych niedogodności dla Kupującego uprzywilejowanego."
  },
  {
    "type": "paragraph",
    "text": "W przypadku towaru podlegającego naprawie lub wymianie, Kupujący uprzywilejowany powinien udostępnić ten towar Sprzedawcy. Sprzedawca odbiera od Kupującego uprzywilejowanego towar na swój koszt."
  },
  {
    "type": "paragraph",
    "text": "Kupujący uprzywilejowany nie może odstąpić od umowy, jeżeli brak zgodności towaru z umową jest nieistotny."
  },
  {
    "type": "paragraph",
    "text": "W razie odstąpienia od umowy, o którym mowa w niniejszej sekcji (dotyczącej towarów), Kupujący uprzywilejowany niezwłocznie zwraca towar Sprzedawcy na jego koszt, na adres"
  },
  {
    "type": "paragraph",
    "text": "Cegielniana 57B/1, 84-230 Rumia."
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca zwraca Kupującemu uprzywilejowanemu cenę niezwłocznie, nie później niż w terminie 14 dni od dnia otrzymania towaru lub dowodu jego odesłania."
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca zwraca Kupującemu uprzywilejowanemu kwoty należne wskutek skorzystania z prawa obniżenia ceny niezwłocznie, nie później niż w terminie 14 dni od dnia otrzymania oświadczenia Kupującego uprzywilejowanego o obniżeniu ceny."
  },
  {
    "type": "subheading",
    "text": "Treści cyfrowe"
  },
  {
    "type": "paragraph",
    "text": "W przypadku niewłaściwej realizacji przez Sprzedawcę umowy o dostarczenie Treści cyfrowych, Kupujący uprzywilejowany ma możliwość skorzystania z uprawnień uregulowanych w rozdziale 5b Ustawy o prawach konsumenta."
  },
  {
    "type": "paragraph",
    "text": "Jeżeli Sprzedawca nie dostarczył Treści cyfrowych, Kupujący uprzywilejowany może wezwać go do ich dostarczenia. Jeżeli mimo to Sprzedawca nie dostarczy Treści cyfrowych niezwłocznie lub w dodatkowym, wyraźnie uzgodnionym przez Kupującego uprzywilejowanego i Sprzedawcę terminie, Kupujący uprzywilejowany może odstąpić od umowy."
  },
  {
    "type": "paragraph",
    "text": "Kupujący uprzywilejowany może odstąpić od umowy bez wzywania do dostarczenia Treści cyfrowych, jeżeli:"
  },
  {
    "type": "paragraph",
    "text": "z oświadczenia Sprzedawcy lub z okoliczności wyraźnie wynika, że nie dostarczy Treści cyfrowych lub"
  },
  {
    "type": "paragraph",
    "text": "Kupujący uprzywilejowany i Sprzedawca uzgodnili, lub z okoliczności zawarcia umowy wyraźnie wynika, że określony termin dostarczenia Treści cyfrowych miał istotne znaczenie dla Kupującego uprzywilejowanego, a Sprzedawca nie dostarczył ich w tym terminie."
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca ponosi odpowiedzialność za brak zgodności Treści cyfrowych z umową, który istniał w chwili ich dostarczenia i ujawnił się w ciągu dwóch lat od tej chwili."
  },
  {
    "type": "paragraph",
    "text": "Jeżeli Treści cyfrowe są niezgodne z umową, Kupujący uprzywilejowany może żądać doprowadzenia do ich zgodności z umową."
  },
  {
    "type": "paragraph",
    "text": "W przypadku braku zgodności Treści cyfrowych z umową, Kupujący uprzywilejowany ma obowiązek współpracy ze Sprzedawcą, w rozsądnym zakresie i przy zastosowaniu najmniej uciążliwych dla siebie środków technicznych, w celu ustalenia, czy brak zgodności Treści cyfrowych z umową w odpowiednim czasie wynika z cech środowiska cyfrowego Kupującego uprzywilejowanego."
  },
  {
    "type": "paragraph",
    "text": "Dodatkowo, jeżeli Treści cyfrowe są niezgodne z umową, Kupujący uprzywilejowany może złożyć oświadczenie o:"
  },
  {
    "type": "paragraph",
    "text": "obniżeniu ceny,"
  },
  {
    "type": "paragraph",
    "text": "odstąpieniu od umowy,"
  },
  {
    "type": "paragraph",
    "text": "gdy:"
  },
  {
    "type": "paragraph",
    "text": "doprowadzenie do zgodności Treści cyfrowych z umową jest niemożliwe albo wymaga nadmiernych kosztów stosownie do art. 43m ust. 2 i 3 Ustawy o prawach konsumenta;"
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca nie doprowadził Treści cyfrowych do zgodności z umową w rozsądnym czasie od chwili, w której Sprzedawca został poinformowany przez Kupującego uprzywilejowanego o braku zgodności z umową, i bez nadmiernych niedogodności dla Kupującego uprzywilejowanego, uwzględniając ich charakter oraz cel, w jakim są wykorzystywane;"
  },
  {
    "type": "paragraph",
    "text": "brak zgodności Treści cyfrowych z umową występuje nadal, mimo że Sprzedawca próbował doprowadzić Treści cyfrowe do zgodności z umową;"
  },
  {
    "type": "paragraph",
    "text": "brak zgodności Treści cyfrowych z umową jest na tyle istotny, że uzasadnia obniżenie ceny albo odstąpienie od umowy bez uprzedniego skorzystania ze środka ochrony określonego w art. 43m Ustawy o prawach konsumenta (tj. żądania doprowadzenia Treści cyfrowych do zgodności z umową);"
  },
  {
    "type": "paragraph",
    "text": "z oświadczenia Sprzedawcy lub okoliczności wyraźnie wynika, że nie doprowadzi on Treści cyfrowych do zgodności z umową w rozsądnym czasie lub bez nadmiernych niedogodności dla Kupującego uprzywilejowanego."
  },
  {
    "type": "paragraph",
    "text": "Kupujący uprzywilejowany nie może odstąpić od umowy na podstawie poprzedniego postanowienia, jeżeli Treści cyfrowe są dostarczane w zamian za zapłatę ceny, a brak zgodności Treści cyfrowych z umową jest nieistotny."
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca ma obowiązek dokonać zwrotu Kupującemu uprzywilejowanemu ceny należnej wskutek skorzystania z prawa odstąpienia od umowy, o którym mowa w niniejszej sekcji (dotyczącej Treści cyfrowych), lub obniżenia ceny, niezwłocznie, nie później niż w terminie 14 dni od dnia otrzymania oświadczenia Kupującego uprzywilejowanego o odstąpieniu od umowy lub obniżeniu ceny."
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca dokonuje zwrotu ceny przy użyciu takiego samego sposobu zapłaty, jakiego użył Kupujący uprzywilejowany, chyba że Kupujący uprzywilejowany wyraźnie zgodził się na inny sposób zwrotu, który nie wiąże się dla niego z żadnymi kosztami."
  },
  {
    "type": "subheading",
    "text": "Pozasądowe sposoby rozpatrywania reklamacji i dochodzenia roszczeń"
  },
  {
    "type": "paragraph",
    "text": "Sprzedawca informuje Konsumenta o możliwości skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń. Zasady dostępu do tych procedur dostępne są w siedzibach lub na stronach internetowych podmiotów uprawnionych do pozasądowego rozpatrywania sporów. Konsument może skorzystać m.in. z:"
  },
  {
    "type": "paragraph",
    "text": "pomocy odpowiedniego Europejskiego Centrum Konsumenckiego z Sieci Europejskich Centrów Konsumenckich. Centra udzielają informacji o prawach konsumentów i pomagają w rozwiązaniu sporu w przypadku zakupów transgranicznych. Pomoc Europejskich Centrów Konsumenckich jest co do zasady bezpłatna. Lista Centrów Konsumenckich właściwych dla danego państwa znajduje się pod adresem:"
  },
  {
    "type": "paragraph",
    "text": "https\\://konsument.gov.pl/eck-w-europie/"
  },
  {
    "type": "paragraph",
    "text": "internetowej platformy ODR (Online Dispute Resolution), zapewnianej przez Komisję Europejską, dostępnej pod adresem:"
  },
  {
    "type": "paragraph",
    "text": "https\\://ec.europa.eu/consumers/odr"
  },
  {
    "type": "paragraph",
    "text": "Ponadto, na terenie Rzeczypospolitej Polskiej można skorzystać z następujących form wsparcia:"
  },
  {
    "type": "paragraph",
    "text": "mediacji prowadzonej przez właściwy terenowo Wojewódzki Inspektorat Inspekcji Handlowej, do którego należy się zwrócić z wnioskiem o mediację. Co do zasady postępowanie jest bezpłatne. Wykaz Inspektoratów znajduje się tutaj:"
  },
  {
    "type": "paragraph",
    "text": "https\\://uokik.gov.pl/wojewodzkie_inspektoraty_inspekcji_handlowej.php"
  },
  {
    "type": "paragraph",
    "text": "pomocy właściwego terenowo stałego polubownego sądu konsumenckiego działającego przy Wojewódzkim Inspektoracie Inspekcji Handlowej, do którego należy złożyć wniosek o rozpatrzenie sprawy przed sądem polubownym. Co do zasady postępowanie jest bezpłatne. Wykaz sądów dostępny jest pod adresem:"
  },
  {
    "type": "paragraph",
    "text": "https\\://uokik.gov.pl/stale_sady_polubowne.php"
  },
  {
    "type": "paragraph",
    "text": "Poprzednie postanowienie ma charakter informacyjny i nie stanowi zobowiązania Sprzedawcy do skorzystania z pozasądowych sposobów rozwiązywania sporów."
  },
  {
    "type": "paragraph",
    "text": "Skorzystanie z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń jest dobrowolne zarówno dla Sprzedawcy jak i Konsumenta."
  },
  {
    "type": "paragraph",
    "text": "Konsument może dodatkowo skorzystać z bezpłatnej pomocy miejskiego lub powiatowego rzecznika konsumentów."
  },
  {
    "type": "subheading",
    "text": "III KUPUJĄCY INNI NIŻ KUPUJĄCY UPRZYWILEJOWANI"
  },
  {
    "type": "paragraph",
    "text": "W przypadku wystąpienia wady towaru, Kupujący inny niż Kupujący uprzywilejowany ma możliwość reklamowania wadliwego towaru na podstawie uregulowanej w Kodeksie cywilnym rękojmi."
  },
  {
    "type": "paragraph",
    "text": "Wobec Kupującego innego niż Kupujący uprzywilejowany Sprzedawca odpowiada z tytułu rękojmi, jeżeli wada fizyczna zostanie stwierdzona przed upływem dwóch lat od dnia wydania towaru Kupującemu."
  },
  {
    "type": "paragraph",
    "text": "Zgodnie z Kodeksem cywilnym, Kupujący będący przedsiębiorcą innym niż Przedsiębiorca uprzywilejowany, traci uprawnienia z tytułu rękojmi, jeżeli nie zbadał towaru w czasie i w sposób przyjęty przy towarach tego rodzaju i nie zawiadomił niezwłocznie Sprzedawcy o wadzie, a w przypadku gdy wada wyszła na jaw dopiero później – jeżeli nie zawiadomił Sprzedawcy niezwłocznie po jej stwierdzeniu. Do zachowania powyższego terminu wystarczy wysłanie przed jego upływem zawiadomienia o wadzie."
  },
  {
    "type": "paragraph",
    "text": "Korzystając z rękojmi, Kupujący inny niż Kupujący uprzywilejowany może, na zasadach określonych w Kodeksie cywilnym:"
  },
  {
    "type": "paragraph",
    "text": "złożyć oświadczenie o obniżeniu ceny,"
  },
  {
    "type": "paragraph",
    "text": "przy wadzie istotnej – złożyć oświadczenie o odstąpieniu od umowy,"
  },
  {
    "type": "paragraph",
    "text": "żądać wymiany towaru na wolny od wad,"
  },
  {
    "type": "paragraph",
    "text": "żądać usunięcia wady."
  },
  {
    "type": "paragraph",
    "text": "Jeśli okaże się, że dla rozpatrzenia reklamacji konieczne jest dostarczenie wadliwego towaru do Sprzedawcy, Kupujący inny niż Kupujący uprzywilejowany jest zobowiązany do dostarczenia tego towaru na adres"
  },
  {
    "type": "paragraph",
    "text": "Cegielniana 57B/1, 84-230 Rumia."
  },
  {
    "type": "heading",
    "id": "dane-osobowe",
    "text": "§ 10 DANE OSOBOWE"
  },
  {
    "type": "paragraph",
    "text": "Administratorem danych osobowych przekazanych przez Kupującego podczas korzystania ze Sklepu jest Sprzedawca."
  },
  {
    "type": "paragraph",
    "text": "Szczegółowe informacje dotyczące przetwarzania danych osobowych przez Sprzedawcę – w tym o pozostałych celach"
  },
  {
    "type": "paragraph",
    "text": "oraz podstawach przetwarzania danych, a także o odbiorcach danych – znajdują się w dostępnej w Sklepie polityce"
  },
  {
    "type": "paragraph",
    "text": "prywatności – ze względu na zasadę przejrzystości, zawartą w ogólnym rozporządzeniu Parlamentu Europejskiego i"
  },
  {
    "type": "paragraph",
    "text": "Rady (UE) o ochronie danych – „RODO”."
  },
  {
    "type": "paragraph",
    "text": "Celem przetwarzania danych Kupującego przez Sprzedawcę, podanych przez Kupującego w związku z zakupami w"
  },
  {
    "type": "paragraph",
    "text": "Sklepie, jest realizacja zamówień. Podstawą przetwarzania danych osobowych w tym przypadku jest:"
  },
  {
    "type": "paragraph",
    "text": "umowa lub działania podejmowane na żądanie Kupującego, zmierzające do jej zawarcia (art. 6"
  },
  {
    "type": "paragraph",
    "text": "ust. 1 lit. b RODO),"
  },
  {
    "type": "paragraph",
    "text": "ciążący na Sprzedawcy obowiązek prawny związany z rachunkowością (art. 6 ust. 1 lit. c RODO) oraz"
  },
  {
    "type": "paragraph",
    "text": "prawnie uzasadniony interes Sprzedawcy, polegający na przetwarzaniu danych w celu ustalenia, dochodzenia"
  },
  {
    "type": "paragraph",
    "text": "lub obrony ewentualnych roszczeń (art. 6 ust. 1 lit. f RODO)."
  },
  {
    "type": "paragraph",
    "text": "Podanie danych przez Kupującego jest dobrowolne, ale jednocześnie konieczne do zawarcia umowy. Niepodanie danych uniemożliwi zawarcie umowy w Sklepie."
  },
  {
    "type": "paragraph",
    "text": "Dane Kupującego podane w związku z zakupami w Sklepie będą przetwarzane do momentu, w którym:"
  },
  {
    "type": "paragraph",
    "text": "przestanie obowiązywać umowa zawarta między Kupującym a Sprzedawcą;"
  },
  {
    "type": "paragraph",
    "text": "na Sprzedawcy przestanie ciążyć obowiązek prawny, zobowiązujący go do przetwarzania danych Kupującego;"
  },
  {
    "type": "paragraph",
    "text": "ustanie możliwość dochodzenia roszczeń przez Kupującego lub Sprzedawcę, związanych z umową zawartą przez Sklep;"
  },
  {
    "type": "paragraph",
    "text": "zostanie przyjęty sprzeciw Kupującego wobec przetwarzania jego danych osobowych – w przypadku gdy"
  },
  {
    "type": "paragraph",
    "text": "podstawą przetwarzania danych był uzasadniony interes Sprzedawcy"
  },
  {
    "type": "paragraph",
    "text": "– w zależności od tego, co ma zastosowanie w danym przypadku."
  },
  {
    "type": "paragraph",
    "text": "Kupującemu przysługuje prawo żądania:"
  },
  {
    "type": "paragraph",
    "text": "dostępu do swoich danych osobowych,"
  },
  {
    "type": "paragraph",
    "text": "ich sprostowania,"
  },
  {
    "type": "paragraph",
    "text": "usunięcia,"
  },
  {
    "type": "paragraph",
    "text": "ograniczenia przetwarzania,"
  },
  {
    "type": "paragraph",
    "text": "przeniesienia danych do innego administratora"
  },
  {
    "type": "paragraph",
    "text": "a także prawo:"
  },
  {
    "type": "paragraph",
    "text": "wniesienia w dowolnym momencie sprzeciwu wobec przetwarzania danych z przyczyn związanych ze szczególną"
  },
  {
    "type": "paragraph",
    "text": "sytuacją Kupującego – wobec przetwarzania dotyczących go danych osobowych, opartego na art. 6 ust. 1"
  },
  {
    "type": "paragraph",
    "text": "lit. f RODO (tj. na prawnie uzasadnionych interesach realizowanych przez Sprzedawcę)."
  },
  {
    "type": "paragraph",
    "text": "W celu realizacji swoich praw, Kupujący powinien skontaktować się ze Sprzedawcą przy wykorzystaniu danych z § 2"
  },
  {
    "type": "paragraph",
    "text": "Regulaminu."
  },
  {
    "type": "paragraph",
    "text": "W przypadku gdy Kupujący uzna, że jego dane są przetwarzane niezgodnie z prawem, Kupujący może złożyć skargę do"
  },
  {
    "type": "paragraph",
    "text": "organu właściwego dla ochrony danych osobowych. W Polsce jest nim Prezes Urzędu Ochrony Danych Osobowych."
  },
  {
    "type": "heading",
    "id": "zastrzezenia",
    "text": "§ 11 ZASTRZEŻENIA"
  },
  {
    "type": "paragraph",
    "text": "Zakazane jest dostarczanie przez Kupującego treści o charakterze bezprawnym."
  },
  {
    "type": "paragraph",
    "text": "Każdorazowo składane w Sklepie zamówienie stanowi odrębną umowę i wymaga osobnej akceptacji"
  },
  {
    "type": "paragraph",
    "text": "Regulaminu. Umowa zawierana jest na czas i w celu realizacji zamówienia."
  },
  {
    "type": "paragraph",
    "text": "Wszelkie umowy zawierane na podstawie niniejszego Regulaminu podlegają przepisom prawa polskiego, z zastrzeżeniem ust. 4."
  },
  {
    "type": "paragraph",
    "text": "Wybór prawa polskiego dla umów zawartych na podstawie Regulaminu z Konsumentem nie uchyla i nie ogranicza praw tego Kupującego, przysługujących mu na podstawie bezwzględnie obowiązujących przepisów prawa, znajdujących zastosowanie dla Konsumenta w sytuacji, w których nie ma miejsca wybór prawa. Oznacza to w szczególności, że jeśli właściwe dla danego Konsumenta przepisy krajowe przewidują ochronę szerszą niż wynikająca z niniejszego Regulaminu lub prawa polskiego – stosuje się tę ochronę szerszą."
  },
  {
    "type": "paragraph",
    "text": "Umowy zawierane na podstawie Regulaminu zawierane są w języku polskim."
  },
  {
    "type": "paragraph",
    "text": "W przypadku ewentualnego sporu z Kupującym niebędącym Kupującym uprzywilejowanym, związanego z umową zawartą za pośrednictwem Sklepu, sądem właściwym będzie sąd"
  },
  {
    "type": "paragraph",
    "text": "właściwy dla siedziby Sprzedawcy."
  },
  {
    "type": "heading",
    "id": "formularz",
    "text": "Załącznik nr 1 do Regulaminu – pobierz"
  },
  {
    "type": "paragraph",
    "text": "Poniżej znajduje się wzór formularza odstąpienia od umowy, z którego Konsument lub Przedsiębiorca uprzywilejowany może,"
  },
  {
    "type": "paragraph",
    "text": "ale nie musi skorzystać:"
  },
  {
    "type": "subheading",
    "text": "WZÓR FORMULARZA ODSTĄPIENIA OD UMOWY"
  },
  {
    "type": "paragraph",
    "text": "(formularz ten należy wypełnić i odesłać tylko w przypadku chęci odstąpienia od umowy)"
  },
  {
    "type": "paragraph",
    "text": "Hej Mistrzu Tomasz Szachta"
  },
  {
    "type": "paragraph",
    "text": "Cegielniana 57B/1, 84-230 Rumia"
  },
  {
    "type": "paragraph",
    "text": "adres e-mail: biuro.hejmistrzu@gmail.com"
  },
  {
    "type": "paragraph",
    "text": "– Ja/My(\\) …………………………………………………………… niniejszym informuję/informujemy(\\)"
  },
  {
    "type": "paragraph",
    "text": "o moim/naszym odstąpieniu od umowy sprzedaży następujących towarów(\\) / o świadczenie następującej usługi(\\) / o dostarczenie treści cyfrowych w postaci(\\*):"
  },
  {
    "type": "paragraph",
    "text": "…………………………………………………………………………………………………………………………………………………………"
  },
  {
    "type": "paragraph",
    "text": "…………………………………………………………………………………………………………………………………………………………"
  },
  {
    "type": "paragraph",
    "text": "…………………………………………………………………………………………………………………………………………………………"
  },
  {
    "type": "paragraph",
    "text": "– Data zawarcia umowy(\\)/odbioru(\\)"
  },
  {
    "type": "paragraph",
    "text": "…………………………………………………………………………………………………………………………………………………………"
  },
  {
    "type": "paragraph",
    "text": "– Imię i nazwisko Konsumenta(-ów) / Przedsiębiorcy(-ów) uprzywilejowanego(-ych):"
  },
  {
    "type": "paragraph",
    "text": "…………………………………………………………………………………………………………………………………………………………"
  },
  {
    "type": "paragraph",
    "text": "– Adres Konsumenta(-ów) / Przedsiębiorcy(-ów) uprzywilejowanego(-ych):"
  },
  {
    "type": "paragraph",
    "text": "…………………………………………………………………………………………………………………………………………………………"
  },
  {
    "type": "paragraph",
    "text": "…………………………………………………………………………………………………………………………………………………………"
  },
  {
    "type": "paragraph",
    "text": "…………………………………………………………………………………"
  },
  {
    "type": "paragraph",
    "text": "Podpis Konsumenta(-ów) / Przedsiębiorcy(-ów) uprzywilejowanego(-ych)"
  },
  {
    "type": "paragraph",
    "text": "(tylko jeżeli formularz jest przesyłany w wersji papierowej)"
  },
  {
    "type": "paragraph",
    "text": "Data …………………………………….."
  },
  {
    "type": "paragraph",
    "text": "(\\*) Niepotrzebne skreślić."
  }
];

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
