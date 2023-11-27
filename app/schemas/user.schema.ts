import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import { User_promotion } from "@prisma/client";

export const baseUserSchema = {
  email: z
    .string()
    .min(1, { message: "L'email est obligatoire" })
    .email("L'email doit être valide"),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit au moins avoir 8 lettres" }),
};

export const registerSchema = z.object({
  ...baseUserSchema,
  firstName: z.string().min(1, { message: "Le prénom est obligatoire" }),
  lastName: z.string().min(1, { message: "Le nom est obligatoire" }),
  promo: z.nativeEnum(User_promotion),
});
export const registerValidator = withZod(registerSchema);
export type registerCredentials = z.infer<typeof registerSchema>;

export const signInSchema = z.object({
  ...baseUserSchema,
});
export const signInValidator = withZod(signInSchema);
export type signInCredentials = z.infer<typeof signInSchema>;
