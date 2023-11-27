import { json, type ActionFunctionArgs } from "@remix-run/node";
import { ZodError } from "zod";
import { signInWithEmailAndPassword } from "firebase/auth";

import { signInSchema } from "~/schemas/user.schema";

import { auth } from "~/utils/db-firebase";
import { SessionService } from "~/services/session.service";
import { UserService } from "~/services/user.service";
import { FirebaseError } from "firebase/app";

export async function signInAction({ request }: ActionFunctionArgs) {
  try {
    const data = await request.formData();
    const formResult = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const { email, password } = signInSchema.parse(formResult);

    const { user } = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      const userToken = await user.getIdToken();
      await UserService.addAuth(email, userToken);
      return await SessionService.setAccessToken(userToken, {
        request,
      });
    }
  } catch (e) {
    return json({
      data:
        e instanceof FirebaseError
          ? "Erreur, veuillez réessayer"
          : "Données invalides, vérifiez que vous avez créé un compte",
      success: false,
    });
  }
}
