import { json, type ActionFunctionArgs, redirect } from "@remix-run/node";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ZodError } from "zod";
import { signInSchema } from "~/schemas/user.schema";
import { auth } from "~/utils/db-firebase";
import { sessionStorage } from "~/utils/session.server";
export async function signInAction({ request }: ActionFunctionArgs) {
  try {
    const data = await request.formData();
    const formResult = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const { email, password } = signInSchema.parse(formResult);
    console.log(email, password);
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    if (user) {
      let session = await sessionStorage.getSession(
        request.headers.get("Cookie")
      );
      session.set("access_token", await user.getIdToken());

      return redirect("/", {
        headers: {
          "Set-Cookie": await sessionStorage.commitSession(session, {
            expires: new Date(Date.now() + 60 * 60 * 24 * 2 * 1000),
          }),
        },
      });
    }
    return json(user);
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
