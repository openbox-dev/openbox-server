import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { signOut } from "firebase/auth";
import { SessionService } from "~/services/session.service";
import { UserService } from "~/services/user.service";
import { auth } from "~/utils/db-firebase";

export async function signOutLoader({ request }: LoaderFunctionArgs) {
  const token = await SessionService.isTokenValid({ request });
  if (token) {
    await signOut(auth);
    await UserService.deleteAuth(token);
    return await SessionService.destroySession({ request }, "/");
  }

  return redirect("/login");
}
