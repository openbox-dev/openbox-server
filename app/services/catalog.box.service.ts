import prisma from "~/utils/prisma";

export const boxCatalogService = {
  getAll: async ({ search }: { search?: string }) => {
    try {
      if (search) {
        return {
          data: await prisma.box.findMany({
            where: {
              status: "ACCEPTED",
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
          }),
          success: true,
        };
      } else {
        return {
          data: await prisma.box.findMany({
            where: {
              status: "ACCEPTED",
            },
          }),
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
