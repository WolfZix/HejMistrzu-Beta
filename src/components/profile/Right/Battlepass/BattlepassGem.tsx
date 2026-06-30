type BattlepassGemProps = {
  state: "locked" | "claimed";
  size?: number;
};

export default function BattlepassGem({
  state,
  size = 20,
}: BattlepassGemProps) {
  const colors = {
    locked: {
      top: "hsl(var(--muted-foreground))",
      bottom: "hsl(var(--card))",
      glow: "none",
    },
    claimed: {
      top: "#d78cff",
      bottom: "#7d2cff",
      glow: "drop-shadow(0px 0px 10px rgba(185, 92, 255, .9))",
    },
  };

  const color = colors[state];

  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 40 56"
      style={{
        overflow: "visible",
        filter: color.glow,
      }}
      className={state === "claimed" ? "animate-battlepass-glow" : ""}
    >
      <polygon
        points="20,2 34,20 20,54 6,20"
        fill={color.bottom}
        stroke={color.top}
        strokeWidth="2"
      />

      <polyline
        points="20,2 20,54"
        stroke={color.top}
        strokeWidth="1"
        opacity=".45"
      />

      <polyline
        points="6,20 20,28 34,20"
        stroke={color.top}
        strokeWidth="1"
        opacity=".45"
      />

      <polygon
        points="20,4 30,20 20,28 10,20"
        fill={color.top}
        opacity=".7"
      />
    </svg>
  );
}