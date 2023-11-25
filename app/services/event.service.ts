import { Event } from "@prisma/client";
import prisma from "~/utils/prisma";

export const EventService = {
  getAllEvents: async () => {
    const events = await prisma.event.findMany({
      orderBy: {
        startDate: "asc",
      },
    });
    return events;
  },
  getThreeClosestEvents: async () => {
    const events = await EventService.getAllEvents();
    return (await EventService.sortByClosest(events)).slice(0, 3);
  },
  sortByClosest: async (events: Event[]) => {
    const currentDate = new Date();

    const sortedData = events.sort((a, b) => {
      const dateA = a.startDate;
      const dateB = b.startDate;
      if (dateA && dateB) {
        const diffA = Math.abs(dateA.getTime() - currentDate.getTime());
        const diffB = Math.abs(dateB.getTime() - currentDate.getTime());
        return diffA - diffB;
      }
      return 0;
    });

    return sortedData;
  },
};
