import { useState, useEffect } from "react";
import BattlepassGem from "./BattlepassGem";

const rewards = [
  {
    events: 1,
    title: "Start",
    claimed: true,
  },
  {
    events: 10,
    title: "10% rabatu",
    claimed: true,
  },
  {
    events: 20,
    title: "Koszulka Hej Mistrzu",
    claimed: false,
  },
  {
    events: 30,
    title: "Koszulka Hej Mistrzu",
    claimed: false,
  },
  {
    events: 40,
    title: "Ekskluzywna figurka",
    claimed: false,
  },
];

export default function BattlepassCard() {
  const START_LEVEL = 1;
  const maxEvents = rewards[rewards.length - 1].events - START_LEVEL;

  const [selectedReward, setSelectedReward] = useState(rewards[0]);
  const [battlepassPoints, setBattlepassPoints] = useState(0);
  const [claimedRewards, setClaimedRewards] = useState<number[]>([]);

  async function fetchBattlepassPoints() {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/battlepass/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });

    if (!result.ok) throw new Error("Nie udało się pobrać punktów battlepassa");
    return result.json();
  }

  async function handleClaimReward() {
  const result = await fetch(`${import.meta.env.VITE_API_URL}/battlepass/claims`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        rewardLevel: selectedReward.events,
      }),
    }
  );

  if (!result.ok) {
    const error = await result.json();
    throw new Error(error.message || "Nie udało się odebrać nagrody");
  }
  setClaimedRewards((prev) => [...prev, selectedReward.events]);
}

  useEffect(() => {
    fetchBattlepassPoints()
    .then((data) => setBattlepassPoints(data.totalPoints / 10))
    .catch(console.error);

    fetch(`${import.meta.env.VITE_API_URL}/battlepass/claims`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((result) => {
        if (!result.ok) throw new Error("Nie udało się pobrać nagród");
        return result.json();
      })
      .then((data) => setClaimedRewards(data.map((reward: { reward_level: number }) => reward.reward_level)))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-transparent border glass rounded-2xl p-6 col-span-3">
      <h2 className="font-heading text-xl mb-2">
        Battlepass
      </h2>
      <p className="text-sm text-muted-foreground mb-5">
        {battlepassPoints} / {rewards[rewards.length - 1].events} odwiedzonych wydarzeń
      </p>
      <div className="relative mt-10 mb-10">

        {/* Pasek */}
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 transition-all duration-700"
            style={{ width: `${Math.min((battlepassPoints / 40) * 100, 100)}%` }}
          />
        </div>

        {/* Checkpointy */}
        {rewards.map((reward) => {
          const left = ((reward.events - START_LEVEL) / maxEvents) * 100;

          let state: "locked" | "unlocked" | "claimed" = "locked";
          if (claimedRewards.includes(reward.events)) {
            state = "claimed";
          } else if (battlepassPoints >= reward.events) {
            state = "unlocked";
          }

          return (
            <div
              key={reward.events}
              className="absolute -translate-x-1/2"
              style={{
                left: `${left}%`,
                top: "-12px",
              }}
            >
              <button
              onClick={() => setSelectedReward(reward)}
              className="transition-transform hover:scale-110"
              >
                <BattlepassGem state={state} />
              </button>
              <p className="mt-1 text-center text-xs text-muted-foreground">
                {reward.events}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 min-h-28">
        <h3 className="font-heading text-lg">
          {selectedReward.title}
        </h3>

        <p className="text-sm text-muted-foreground mt-2">
          Odblokowanie po {selectedReward.events} wydarzeniach
        </p>

        {claimedRewards.includes(selectedReward.events) 
        ? (<p className="text-purple-400 mt-3">Nagroda odebrana!</p>) 
        : battlepassPoints >= selectedReward.events 
          ? (
          <button
            onClick={() => handleClaimReward().catch(console.error)}
            className="mt-4 rounded-lg bg-amber-500 px-4 py-2 text-black hover:bg-amber-400 transition-colors"
          >
            Odbierz nagrodę
          </button>
          ) : (
          <p className="text-muted-foreground mt-3">
            Brakuje {selectedReward.events - battlepassPoints} punktów do odblokowania.
          </p>
          )
        }
      </div>
    </div>
  );
}