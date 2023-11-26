import { Event, Prisma } from "@prisma/client";
import prisma from "~/utils/prisma";

export type EventWithBox = Prisma.EventGetPayload<{
  include: {
    box: { select: { id: true; name: true } };
    eventAnimator: {
      select: {
        animator: { select: { id: true; firstName: true; lastName: true } };
      };
    };
  };
}>;

export const EventService = {
  getAllEvents: async () => {
    const events: EventWithBox[] = await prisma.event.findMany({
      orderBy: {
        startDate: "asc",
      },
      include: {
        box: {
          select: {
            id: true,
            name: true,
          },
        },
        eventAnimator: {
          select: {
            animator: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });
    return events;
  },
  getThreeClosestEvents: async (): Promise<EventWithBox[]> => {
    const events = await EventService.getAllEvents();
    return (await EventService.sortByClosest(events)).slice(0, 3);
  },
  sortByClosest: async (events: EventWithBox[]) => {
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
