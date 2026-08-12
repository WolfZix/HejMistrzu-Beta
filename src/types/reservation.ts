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
  notes: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type ReservationFormData = {
  fullName: string,
  email: string,
  phone: string,
  reservationDate: string,
  reservationTime: string,
  duration: number | null,
  peopleCount: number | null,
  notes: string,
  status: string,
}

export type ReservationFormErrors = {
  fullName: string,
  email: string,
  phone: string,
  reservationDate: string,
  reservationTime: string,
  duration: string,
  peopleCount: string,
  notes: string,
  status: string,
}