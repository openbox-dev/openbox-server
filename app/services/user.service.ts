import prisma from "~/utils/prisma";
import { registerCredentials } from "~/schemas/user.schema";
import { expireDelay } from "~/constants/token";
import { Prisma, User } from "@prisma/client";

interface AuthUserResponse {
  data: User | Error;
  success: boolean;
}

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
  getOne: async ({ email }: Pick<registerCredentials, "email">) => {
    try {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          email,
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
  addAuth: async (email: string, token: string) => {
    try {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          email,
        },
      });
      const auth = await prisma.authentification.create({
        data: {
          userId: user.id,
          agent: "",
          token: token,
          tokenEnd: new Date(Date.now() + expireDelay),
        },
      });
      return {
        data: auth,
        success: true,
      };
    } catch (e) {
      return {
        data: e,
        success: false,
      };
    }
  },
  deleteAuth: async (token: string, email: string = "") => {
    try {
      await prisma.authentification.delete({ where: { token } });
      return {
        data: null,
        success: true,
      };
    } catch (e) {
      return {
        data: e,
        success: false,
      };
    }
  },
  getAuthUser: async (token: string): Promise<AuthUserResponse> => {
    try {
      const userSelect: Prisma.AuthentificationSelect = {
        user: true,
      };
      const user = await prisma.authentification.findUniqueOrThrow({
        where: { token },
        select: userSelect,
      });
      return {
        data: user.user,
        success: true,
      };
    } catch (e) {
      return {
        data: e as Error,
        success: false,
      };
    }
  },
};
