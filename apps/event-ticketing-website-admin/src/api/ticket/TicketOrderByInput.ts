import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  ticketNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
