type FormTextareaProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;

  placeholder?: string;
  rows?: number;
  required?: boolean;
  className?: string;
};

export default function FormTextarea({
  label,
  value,
  onChange,
  placeholder = "",
  rows = 4,
  required = false,
  className = "",
}: FormTextareaProps) {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label className="text-sm">
        {label}
        {required && (
          <span className="text-red-500"> *</span>
        )}
      </label>

      <textarea
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          p-3
          rounded-lg
          bg-background/50
          border border-primary/20
          focus:border-primary
          focus:ring-2
          focus:ring-primary/50
          outline-none
          resize-none
        "
      />
    </div>
  );
}