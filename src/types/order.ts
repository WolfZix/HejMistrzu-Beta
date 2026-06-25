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

export interface Order {
  id: number;
  user: OrderUser;
  items: OrderItem[];
  totalPrice: number;
  status: OrderStatus;
  createdAt: string;
}