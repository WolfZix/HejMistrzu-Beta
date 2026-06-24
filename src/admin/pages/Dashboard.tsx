import { useState } from "react";
import DashboardSection from "../components/Dashboard/DashboardSection";
import InventorySection from "../components/Dashboard/InventorySection";

export default function Dashboard() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const SECTION_USERS = "Użytkownicy";
  const SECTION_EVENTS = "Eventy";
  const SECTION_RESERVATIONS = "Rezerwacje";
  const SECTION_SHOP = "Sklep";
  const SECTION_BATTLEPASS = "Battlepass";
  const SECTION_INVENTORY = "Magazyn"

  function toggleSection(section: string) {
  if (openSections.includes(section)) {
    setOpenSections(
      openSections.filter((s) => s !== section)
    );
  } else {
    setOpenSections([
      ...openSections,
      section,
    ]);
  }
}
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl">
          Dashboard
        </h1>

        <p className="text-muted-foreground mt-2">
          Przegląd najważniejszych statystyk.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="flex flex-col gap-6">
          <DashboardSection
            title="Użytkownicy"
            isOpen={openSections.includes(SECTION_USERS)}
            onToggle={() => toggleSection(SECTION_USERS)}
            stats={[
              {
                label: "W tym miesiącu",
                value: 12,
              },
              {
                label: "W tym roku",
                value: 85,
              },
              {
                label: "Łącznie",
                value: 124,
              },
            ]}
          />
          <DashboardSection
            title="Battlepass"
            isOpen={openSections.includes(SECTION_BATTLEPASS)}
            onToggle={() => toggleSection(SECTION_BATTLEPASS)}
            stats={[
              {
                label: "Najwyższy poziom",
                value: 32,
              },
              {
                label: "Średni poziom",
                value: 12,
              },
            ]}
            ranking={[
              {
                name: "WolfZix",
                value: 32,
              },
              {
                name: "Jan Kowalski",
                value: 28,
              },
              {
                name: "Anna Nowak",
                value: 24,
              },
              {
                name: "Michał",
                value: 22,
              },
              {
                name: "Kacper",
                value: 20,
              },
            ]}
          />
        <DashboardSection
            title="Eventy"
            isOpen={openSections.includes(SECTION_EVENTS)}
            onToggle={() => toggleSection(SECTION_EVENTS)}
            stats={[
              {
                label: "W tym miesiącu",
                value: 8,
              },
              {
                label: "W tym roku",
                value: 42,
              },
              {
                label: "Top wydarzenie",
                value: "Friday Night Magic",
              },
            ]}
            ranking={[
              {
                name: "Friday Night Magic",
                value: 42,
              },
              {
                name: "Pokemon League",
                value: 37,
              },
              {
                name: "Warhammer 40k",
                value: 31,
              },
              {
                name: "D&D One Shot",
                value: 28,
              },
              {
                name: "Lorcana Tournament",
                value: 22,
              },
            ]}
          />
        </div>
        <div className="flex flex-col gap-6">
          <DashboardSection
            title="Rezerwacje"
            isOpen={openSections.includes(SECTION_RESERVATIONS)}
            onToggle={() => toggleSection(SECTION_RESERVATIONS)}
            stats={[
              {
                label: "W tym miesiącu",
                value: 31,
              },
              {
                label: "W tym roku",
                value: 188,
              },
              {
                label: "Aktywne",
                value: 14,
              },
            ]}
          />

          <DashboardSection
            title="Sklep"
            isOpen={openSections.includes(SECTION_SHOP)}
            onToggle={() => toggleSection(SECTION_SHOP)}
            stats={[
              {
                label: "Zamówienia w tym miesiącu",
                value: 43,
              },
              {
                label: "Zamówienia w tym roku",
                value: 521,
              },
              {
                label: "Przychód w tym miesiącu",
                value: "4 320 zł",
              },
              {
                label: "Przychód w tym roku",
                value: "52 700 zł",
              },
              {
                label: "Top produkt",
                value: "Pokemon ETB",
              },
            ]}
            ranking={[
              {
                name: "Pokemon ETB",
                value: 87,
              },
              {
                name: "Dragon Shield Sleeves",
                value: 75,
              },
              {
                name: "Commander Deck",
                value: 68,
              },
              {
                name: "Booster Box",
                value: 54,
              },
              {
                name: "Dice Set",
                value: 43,
              },
            ]}
          />
          <InventorySection
            isOpen={openSections.includes(SECTION_INVENTORY)}
            onToggle={() => toggleSection(SECTION_INVENTORY)}
            outOfStock={[
              { name: "Pokemon ETB" },
              { name: "Starter Deck" },
              { name: "Citadel Black" },
            ]}
            lowStock={[
              {
                name: "Dragon Shield",
                quantity: 3,
              },
              {
                name: "Booster Box",
                quantity: 4,
              },
              {
                name: "Dice Set",
                quantity: 5,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}