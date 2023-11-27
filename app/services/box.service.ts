import prisma from "~/utils/prisma";

export const BoxService = {
  getAll: async ({ boxId }: { boxId?: number }) => {
    try {
      if (boxId) {
        return {
          data: await prisma.box.findFirst({
            where: {
              id: boxId,
            },
            include: {
              boxAdmin: {
                include: {
                  user: {
                    select: {
                      firstName: true,
                      lastName: true,
                      promo: true,
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
