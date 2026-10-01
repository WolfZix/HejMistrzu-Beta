type FormFileInputProps = {
  label: string;
  required?: boolean;
  className?: string;
  onChange?: (files: File[]) => void;
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
        multiple
        onChange={(e) =>
          onChange?.(Array.from(e.target.files ?? []))
        }
        className="
          block w-full rounded-lg border border-primary/20
          bg-background/50 px-3 py-2 text-sm
          file:mr-3 file:rounded-md file:border-0
          file:bg-primary/10 file:px-3 file:py-1.5
          file:text-sm file:text-primary focus:border-primary
          focus:ring-2 focus:ring-primary/50
        "
      />
    </div>
  );
}