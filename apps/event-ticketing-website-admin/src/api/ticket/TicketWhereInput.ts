import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TicketWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  ticketNumber?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
