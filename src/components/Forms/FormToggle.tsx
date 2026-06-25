type FormToggleProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  className?: string;
};

export default function FormToggle({
  label,
  value,
  onChange,
  className = "",
}: FormToggleProps) {
  return (
    <div className={`w-full ${className}`}>
      <label className="block mb-2">
        {label}
      </label>

        <button
          type="button"
          onClick={() => onChange(!value)}
          className={`
            w-full
            h-10
            rounded-lg
            border
            transition-all
            ${
              value
                ? "bg-primary text-black border-primary"
                : "border-primary/20 bg-background/50"
            }
          `}
        >
          {value ? "Tak" : "Nie"}
        </button>
    </div>
  );
}