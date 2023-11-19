import prisma from "~/utils/prisma";

export const ActualiteService = {
  getAll: async () => {
    // logic
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
        data: await prisma.newsletter.findFirstOrThrow(),
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
