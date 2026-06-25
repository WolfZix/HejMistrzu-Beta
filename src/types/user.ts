export type User = {
  id: number;
  username: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
};

export type UserFormData = Omit<User, "id" | "createdAt">;