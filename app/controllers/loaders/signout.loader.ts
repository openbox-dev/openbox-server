import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { signOut } from "firebase/auth";
import { SessionService } from "~/services/session.service";
import { auth } from "~/utils/db-firebase";

export async function signOutLoader({ request }: LoaderFunctionArgs) {
  if (await SessionService.isTokenValid({ request })) {
    await signOut(auth);
    await SessionService.destroySession({ request }, "/");
  }

  return redirect("/login");
}
