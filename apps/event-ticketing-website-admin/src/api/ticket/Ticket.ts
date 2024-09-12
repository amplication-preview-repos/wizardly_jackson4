import { Event } from "../event/Event";
import { User } from "../user/User";

export type Ticket = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  ticketNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
