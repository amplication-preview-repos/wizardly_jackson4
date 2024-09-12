/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TicketWhereUniqueInput } from "../../ticket/base/TicketWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TicketUpdateManyWithoutUsersInput {
  @Field(() => [TicketWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TicketWhereUniqueInput],
  })
  connect?: Array<TicketWhereUniqueInput>;

  @Field(() => [TicketWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TicketWhereUniqueInput],
  })
  disconnect?: Array<TicketWhereUniqueInput>;

  @Field(() => [TicketWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TicketWhereUniqueInput],
  })
  set?: Array<TicketWhereUniqueInput>;
}

export { TicketUpdateManyWithoutUsersInput as TicketUpdateManyWithoutUsersInput };
