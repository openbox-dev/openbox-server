import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { IdTokenResult } from "firebase/auth";
// import { getSessionToken } from "./db-firebase";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("Session secret missing");
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    // Expires can also be set (although maxAge overrides it when used in combination).
    // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
    //
    expires: new Date(Date.now() + 60 * 60 * 24 * 2 * 1000),
    httpOnly: true,
    maxAge: 60,
    path: "/",
    sameSite: "lax",
    secrets: [sessionSecret],
    // secure: true,
  },
});

export const destroyFunction = async (request: any) => {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  const newCookie = await sessionStorage.destroySession(session);

  return redirect("/login", { headers: { "Set-Cookie": newCookie } });
};
