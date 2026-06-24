type TopListProps = {
  title: string;
  items: {
    name: string;
    value: number;
  }[];
};

export default function TopList({
  title,
  items,
}: TopListProps) {
  return (
    <div className="glass rounded-xl p-6">
      <h2 className="font-heading text-lg text-primary mb-5">
        {title}
      </h2>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={item.name}
            className="
              flex
              items-center
              justify-between
              rounded-lg
              px-3
              py-2
              border
              border-transparent
              hover:bg-muted/30
              transition-all
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  w-6
                  text-center
                  text-primary
                  font-semibold
                "
              >
                {index + 1}
              </span>

              <span>{item.name}</span>
            </div>

            <span className="text-muted-foreground">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}