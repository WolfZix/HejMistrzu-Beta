type FormFileInputProps = {
  label: string;
  required?: boolean;
  className?: string;
  onChange?: (file: File | null) => void;
};

export default function FormFileInput({
  label,
  required = false,
  className = "",
  onChange,
}: FormFileInputProps) {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label className="text-sm">
        {label}
        {required && (
          <span className="text-red-500"> *</span>
        )}
      </label>

      <input
        type="file"
        onChange={(e) =>
          onChange?.(e.target.files?.[0] ?? null)
        }
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