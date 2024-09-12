import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TicketUpdateInput = {
  event?: EventWhereUniqueInput | null;
  ticketNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
