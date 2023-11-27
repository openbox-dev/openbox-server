import { Event, Prisma } from "@prisma/client";
import prisma from "~/utils/prisma";

export type EventWithBoxAndAnimator = Prisma.EventGetPayload<{
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
    const events: EventWithBoxAndAnimator[] = await prisma.event.findMany({
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
  getThreeClosestEvents: async (): Promise<EventWithBoxAndAnimator[]> => {
    const events = await EventService.getAllEvents();
    return (await EventService.sortByClosest(events)).slice(0, 3);
  },
  sortByClosest: async (events: EventWithBoxAndAnimator[]) => {
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
  getEventStatus: (startDate: any) => {
    const currentDate = new Date();
    const eventDate = new Date(startDate);

    if (
      currentDate.getDate() === eventDate.getDate() &&
      currentDate.getMonth() === eventDate.getMonth() &&
      currentDate.getFullYear() === eventDate.getFullYear()
    ) {
      return "AUJOURD'HUI";
    } else if (currentDate.getTime() - eventDate.getTime() < 0) {
      return "À VENIR";
    }

    return "PASSÉ";
  },
  getBoxEvents: async ({ boxId }: { boxId?: number }) => {
    try {
      if (boxId) {
        return {
          data: await prisma.event.findMany({
            where: {
              boxId: boxId,
            },
            include: {
              eventAnimator: {
                include: {
                  animator: {
                    select: {
                      firstName: true,
                      lastName: true,
                    },
                  },
                },
              },
            },
          }),
          success: true,
        };
      } else {
        return {
          data: [],
          success: true,
        };
      }
    } catch {
      return {
        data: [],
        success: false,
      };
    }
  },
};
