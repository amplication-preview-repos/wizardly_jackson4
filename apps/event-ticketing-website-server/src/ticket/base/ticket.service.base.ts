/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Ticket as PrismaTicket,
  Event as PrismaEvent,
  User as PrismaUser,
} from "@prisma/client";

export class TicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TicketCountArgs, "select">): Promise<number> {
    return this.prisma.ticket.count(args);
  }

  async tickets(args: Prisma.TicketFindManyArgs): Promise<PrismaTicket[]> {
    return this.prisma.ticket.findMany(args);
  }
  async ticket(
    args: Prisma.TicketFindUniqueArgs
  ): Promise<PrismaTicket | null> {
    return this.prisma.ticket.findUnique(args);
  }
  async createTicket(args: Prisma.TicketCreateArgs): Promise<PrismaTicket> {
    return this.prisma.ticket.create(args);
  }
  async updateTicket(args: Prisma.TicketUpdateArgs): Promise<PrismaTicket> {
    return this.prisma.ticket.update(args);
  }
  async deleteTicket(args: Prisma.TicketDeleteArgs): Promise<PrismaTicket> {
    return this.prisma.ticket.delete(args);
  }

  async getEvent(parentId: string): Promise<PrismaEvent | null> {
    return this.prisma.ticket
      .findUnique({
        where: { id: parentId },
      })
      .event();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.ticket
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
