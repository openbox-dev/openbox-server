import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { IdTokenResult } from "firebase/auth";
import { expireDelay } from "~/constants/token";
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
    // expires: new Date(Date.now() + 60 * 60 * 24 * 2 * 1000),
    httpOnly: true,
    maxAge: expireDelay,
    path: "/",
    sameSite: "lax",
    secrets: [sessionSecret],
    // secure: true,
  },
});
