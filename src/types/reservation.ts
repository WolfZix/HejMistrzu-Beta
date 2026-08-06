export type Reservation = {
  id: number;
  userId: number | null;
  fullName: string;
  email: string;
  phone: string;
  reservationDate: string;
  reservationTime: string;
  duration: number | null;
  peopleCount: number | null;
  noites: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};