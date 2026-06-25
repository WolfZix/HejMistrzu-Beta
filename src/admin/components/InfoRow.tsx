type InfoRowProps = {
  label: string;
  value: React.ReactNode;
};

export default function InfoRow({
  label,
  value,
}: InfoRowProps) {
  return (
    <div>
      <p className="text-xs text-muted-foreground mb-1">
        {label}
      </p>

      <div className="glass rounded-lg p-3">
        {value}
      </div>
    </div>
  );
}