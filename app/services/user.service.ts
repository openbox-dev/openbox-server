import prisma from "~/utils/prisma";
import { registerCredentials } from "~/schemas/user.schema";
import { expireDelay } from "~/constants/token";
import { Prisma, User } from "@prisma/client";
import { redirect } from "@remix-run/node";

type AuthUserResponse =
  | { data: User | null; success: true }
  | { data: Error; success: false };

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
  getOne: async ({
    email,
  }: Pick<registerCredentials, "email">): Promise<AuthUserResponse> => {
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
        data: e as Error,
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
      const auth = await prisma.authentification.upsert({
        where: {
          userId: user.id,
        },
        create: {
          userId: user.id,
          agent: "",
          token: token,
          tokenEnd: new Date(Date.now() + expireDelay),
        },
        update: {
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
      const result = email ? await UserService.getOne({ email }) : null;
      if (result) {
        if (result.success && result.data) {
          await prisma.authentification.delete({
            where: { userId: result.data.id },
          });
        }
      } else {
        await prisma.authentification.delete({ where: { token } });
      }
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
      const result = await prisma.authentification.findUnique({
        where: { token },
        select: userSelect,
      });
      if (result) {
        return {
          data: result.user,
          success: true,
        };
      } else {
        return {
          data: null,
          success: true,
        };
      }
    } catch (e) {
      return {
        data: e as Error,
        success: false,
      };
    }
  },
  getAuthorization: async (token: string, path: string) => {
    try {
      if (!token) {
        return redirect("/login");
      }

      const result = await UserService.getAuthUser(token);
      if (result.success && result.data) {
        return {
          role: result.data.role,
        };
      }
    } catch (e) {
      return {
        data: e as Error,
        success: false,
      };
    }
  },
};
