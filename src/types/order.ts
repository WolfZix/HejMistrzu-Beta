export type OrderStatus =
  | "PENDING"
  | "PAID"
  | "READY"
  | "COMPLETED"
  | "CANCELED";

export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}

export interface OrderUser {
  id: number;
  username: string;
  email: string;
}

export type DeliveryMethodType = 
  "InPost Paczkomat 24/7" |
  "InPost Kurier" |
  "InPost Paczkomat Pobranie" |
  "InPost Kurier Pobranie" |
  "Odbiór Osobisty" |
  null;

export type PaymentMethodType = 
  "Przelewy24" |
  "Karta Kredytowa" |
  "Google Pay" |
  "BLIK" |
  null;

export interface Order {
  id: number;
  user: OrderUser;
  items: OrderItem[];
  totalPrice: number;
  status: OrderStatus;
  createdAt: string;
}

export interface OrderData {
  name: string;
  surname: string;
  companyName: string;
  nip: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  city: string;
  postalCode: string;
  deliveryMethod: DeliveryMethodType;
  paymentMethod: PaymentMethodType;
}

export type ValidationErrorsType = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  city: string;
  postalCode: string;
  deliveryMethod: string;
  paymentMethod: string;
}