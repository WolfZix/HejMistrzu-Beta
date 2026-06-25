import FormInput from "@/components/Forms/FormInput";
import FormSelect from "@/components/Forms/FormSelect";
import type { UserFormData } from "@/types/user";

type UsersFormProps = {
  formData: UserFormData;
  setFormData: React.Dispatch<React.SetStateAction<UserFormData>>;
  handleSubmit: (e: React.FormEvent) => void;
  closeModal: () => void;
}

export default function UserForm({ formData, setFormData, handleSubmit, closeModal}: UsersFormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <div className="flex gap-4 items-end justify-between">
        <div className="flex flex-col gap-4 w-full">
          <FormInput
            label="Nazwa użytkownika"
            value={formData.username}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                username: value,
              }))
            }
            placeholder="WolfZix"
            required
          />
    
          <FormInput
            label="Email"
            value={formData.email}
            onChange={(value) =>
              setFormData((prev) => ({
                  ...prev,
                email: value,
              }))
            }
            placeholder="user@example.com"
            type="email"
            required
          />
    
          <FormSelect
            label="Rola"
            value={formData.role}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                role: value as UserFormData["role"],
              }))
            }
            options={[
              {
                value: "admin",
                label: "Administrator",
              },
              {
                value: "user",
                label: "Użytkownik",
              },
            ]}
          />
        </div>
      </div>
    
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={closeModal}
          className="
            flex-1
            py-2
            rounded-md
            border
            border-muted-foreground/20
            hover:bg-foreground/10
            transition-all duration-200
          "
        >
          Anuluj
        </button>
    
        <button
          type="submit"
          className="
            flex-1
            py-2
            rounded-md
            font-heading
            font-semibold
            bg-primary/70
            text-primary-foreground
            hover:bg-primary
            transition-all
            duration-200
          "
        >
          Zapisz
        </button>
      </div>
    </form>
  )
}