import { TicketCreateNestedManyWithoutEventsInput } from "./TicketCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  tickets?: TicketCreateNestedManyWithoutEventsInput;
  venue?: string | null;
};
