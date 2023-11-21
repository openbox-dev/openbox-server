import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { z } from "zod";
import { registerSchema } from "~/models/user.model";
import { UserService } from "~/services/user.service";
import { auth } from "~/utils/db-firebase";

export async function registerAction({ request }: ActionFunctionArgs) {
  try {
    const data = await request.formData();
    const formResult = {
      email: data.get("email"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      promo: data.get("promo"),
      password: data.get("password"),
    };

    const { password, ...rest } = registerSchema.parse(formResult);

    const user = await createUserWithEmailAndPassword(
      auth,
      rest.email,
      password
    ).then(async (response) => {
      return json(await UserService.createUser(rest));
    });

    return redirect("/login");
  } catch (e) {
    if (e instanceof z.ZodError) {
      return json({
        data: e.issues.map((issue) => {
          return {
            path: issue.path[0],
            message: issue.message,
          };
        }),
        success: false,
      });
    } else {
      return json({
        data:
          e instanceof FirebaseError
            ? "Cet email est déjà utilisé"
            : "Erreur, veuillez réessayer",
        success: false,
      });
    }
  }
}
