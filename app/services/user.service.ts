import prisma from "~/utils/prisma";
import { registerCredentials } from "~/schemas/user.schema";

export const UserService = {
  createUser: async (credentials: Omit<registerCredentials, "password">) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: credentials.email,
        },
      });

      if (user) {
        throw new Error("Cet email est déjà utilisé");
      }

      await prisma.user.create({ data: credentials });
      return {
        data: credentials.email,
        success: true,
      };
    } catch (e) {
      if (e instanceof Error) {
        return {
          data: e.message,
          success: false,
        };
      }
    }
  },
  getOne: async (credential: Pick<registerCredentials, "email">) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: credential.email,
        },
      });
      return {
        data: user,
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
