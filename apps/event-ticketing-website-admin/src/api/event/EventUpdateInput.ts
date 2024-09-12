import { TicketUpdateManyWithoutEventsInput } from "./TicketUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  tickets?: TicketUpdateManyWithoutEventsInput;
  venue?: string | null;
};
