import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { sessionStorage } from "~/utils/session.server";

export async function authLoader({ request }: LoaderFunctionArgs) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  if (session.has("access_token")) {
    return redirect("/");
  }

  const data = { error: session.get("error") };

  return json(data, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}
