import { Prisma } from "@prisma/client";
import prisma from "~/utils/prisma";

export type BoxPageData = Prisma.BoxGetPayload<{
  include: {
    boxAdmin: {
      include: {
        user: {
          select: {
            firstName: true;
            lastName: true;
            promo: true;
          };
        };
      };
    };
  };
}>;

export type BoxPageReturnType =
  | { data: BoxPageData | null; success: true }
  | { data: Error; success: false };

export const BoxService = {
  getBoxById: async ({
    boxId,
  }: {
    boxId?: number;
  }): Promise<BoxPageReturnType> => {
    try {
      return {
        data: await prisma.box.findUniqueOrThrow({
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
    } catch (e) {
      return {
        data: e as Error,
        success: false,
      };
    }
  },
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
