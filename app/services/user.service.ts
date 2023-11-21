import prisma from "~/utils/prisma";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm, validationError } from "remix-validated-form";
import { z } from "zod";
import { registerCredentials } from "~/models/user.model";

export const UserService = {
  createUser: async (credentials: Omit<registerCredentials, "password">) => {
    try {
      const user = await prisma.user.findFirst({
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
};
