import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { SessionService } from "~/services/session.service";
import { sessionStorage } from "~/utils/session.server";

export async function authLoader({ request }: LoaderFunctionArgs) {
  if (await SessionService.isTokenValid({ request })) {
    return redirect("/");
  }

  return json(false);
}
