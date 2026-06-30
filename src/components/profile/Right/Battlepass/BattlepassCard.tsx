import { useState } from "react";
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
  const currentEvents = 15;
  const START_LEVEL = 1;
  const maxEvents = rewards[rewards.length - 1].events - START_LEVEL;
  const nextReward = rewards.find(
    (reward) => reward.events > currentEvents
  )

  const [selectedReward, setSelectedReward] = useState(rewards[0]);

  return (
    <div className="glass rounded-2xl p-6 col-span-3">
      <h2 className="font-heading text-xl mb-2">
        Battlepass
      </h2>
      <p className="text-sm text-muted-foreground mb-5">
        {currentEvents} / {rewards[rewards.length - 1].events} odwiedzonych wydarzeń
      </p>
      <div className="relative mt-10 mb-10">

        {/* Pasek */}
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 transition-all duration-700"
            style={{
              width: `${((currentEvents - START_LEVEL) / maxEvents) * 100}%`,
            }}
          />
        </div>

        {/* Checkpointy */}
        {rewards.map((reward) => {
          const left = ((reward.events - START_LEVEL) / maxEvents) * 100;

          let state: "locked" | "claimed" = "locked";

          if (reward.claimed) {
            state = "claimed";
          } else if (currentEvents < reward.events) {
            state = "locked";
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

      <div className="mt-8">
        <h3 className="font-heading text-lg">
          {selectedReward.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Odblokowanie po {selectedReward.events} wydarzeniach
        </p>
      </div>

    </div>
  );
}