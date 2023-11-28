import prisma from "~/utils/prisma";

export const ActualiteService = {
  getAll: async () => {
    try {
      return {
        data: await prisma.newsletter.findMany(),
        success: true,
      };
    } catch (e) {
      return {
        data: e,
        success: false,
      };
    }
  },
  getLatest: async () => {
    try {
      return {
        data: await prisma.newsletter.findFirst({
          orderBy: {
              createdAt: "desc",
          },
          include: {
            user: true,
          },
        }),
        success: true,
      };
    } catch (e) {
      return {
        data: e,
        success: false,
      };
    }
  },
};
