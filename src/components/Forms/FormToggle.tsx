type FormToggleProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  className?: string;
  disabled?: boolean;
};

export default function FormToggle({
  label,
  value,
  onChange,
  className = "",
  disabled,
}: FormToggleProps) {
  return (
    <div className={`w-full ${className}`}>
      <label className="block mb-2">
        {label}
      </label>

        <button
          type="button"
          onClick={() => onChange(!value)}
          disabled={disabled}
          className={`
            w-full
            h-10
            rounded-lg
            border
            transition-all
            ${
              value
                ? "bg-primary/10 border-primary"
                : "border-primary/20 bg-background/50"
            }
          `}
        >
          {value ? "Tak" : "Nie"}
        </button>
    </div>
  );
}