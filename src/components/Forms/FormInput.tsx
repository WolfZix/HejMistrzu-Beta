type FormInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
};

export default function FormInput({
  label,
  value,
  onChange,
  className = "",
  placeholder = "",
  type = "text",
  required = false,
}: FormInputProps) {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label className="text-sm">
        {label}
        {required && (
          <span className="text-red-500"> *</span>
        )}
      </label>

      <input
        type={type}
        value={value}
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
        "
      />
    </div>
  );
}