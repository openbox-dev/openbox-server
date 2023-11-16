import prisma from "~/utils/prisma";

export const ArticleService = {
  getAll: async () => {
    // logic
    try {
      return {
        data: await prisma.newsletter.findMany(),
        success: true,
      };
    } catch {
      return {
        data: [],
        success: false,
      };
    }
  },
};
