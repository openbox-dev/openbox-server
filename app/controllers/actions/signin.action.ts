import { json, type ActionFunctionArgs, redirect } from "@remix-run/node";
import { ZodError } from "zod";
import { signInWithEmailAndPassword } from "firebase/auth";

import { signInSchema } from "~/schemas/user.schema";

import { auth } from "~/utils/db-firebase";
import { SessionService } from "~/services/session.service";

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
      return await SessionService.setAccessToken(await user.getIdToken(), {
        request,
      });
    } else {
      return json({
        data: null,
        success: false,
      });
    }
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(e);
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
        data: e,
        success: false,
      });
    }
  }
}
