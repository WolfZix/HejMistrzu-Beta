export type User = {
  id: number;
  username: string;
  email: string;
  name: string;
  surname: string;
  role: "admin" | "user";
  createdAt: string;
};

export type UserFormData = Omit<User, "id" | "createdAt">;