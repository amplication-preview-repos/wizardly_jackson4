import { Ticket } from "../ticket/Ticket";

export type Event = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  name: string | null;
  tickets?: Array<Ticket>;
  updatedAt: Date;
  venue: string | null;
};
