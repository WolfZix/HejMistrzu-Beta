export type Event = {
  id: number;
  title: string;
  date: string;
  startTime: string;
  description: string;
  category: string;
  image: string;
  location: string;
  maxSlots: number;
  freeSlots: number;
  price: number;
  link: string;
};

export type EventFormData = {
  title: string;
  description: string;
  image: File | null;
  category: string;
  date: string;
  time: string;
  price: string;
  totalSlots: string;
  freeSlots: string;
  link: string;
  location: string;
}

export type EventFormErrors = {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  time: string;
  price: string;
  totalSlots: string;
  link: string;
  location: string;
}

export type EventParticipant = {
  id: number;
  eventId: number;
  userId: number | null;
  name: string;
  surname: string;
  pokemonId: string | null;
  nickname: string | null;
  username: string | null;
  email: string | null;
  createdAt: string;
}