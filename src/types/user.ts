import { InPostPoint } from "./order";

export type User = {
  id: number;
  username: string;
  email: string;
  name: string;
  surname: string;
  role: "admin" | "user";
  createdAt: string;
};

export type ProfileData = {
  name: string;
  surname: string;
  companyName: string;
  nip: string;
  phone: string;
  country: string;
  city: string;
  postalCode: string;
  address: string;
  defaultPaymentMethod: string;
  defaultDeliveryMethod: string;
  defaultInpostPoint: InPostPoint | null;
};

export type UserFormData = Omit<User, "id" | "createdAt">;