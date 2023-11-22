import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { sessionStorage } from "~/utils/session.server";

export const SessionService = {
  setAccessToken: async (
    userToken: string,
    {
      request,
    }: Pick<LoaderFunctionArgs, "request"> | Pick<ActionFunctionArgs, "request">
  ) => {
    let session = await sessionStorage.getSession(
      request.headers.get("Cookie")
    );
    session.set("access_token", userToken);

    return redirect("/", {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(session, {
          expires: new Date(Date.now() + 60 * 60 * 24 * 5 * 1000),
        }),
      },
    });
  },
  isTokenValid: async ({
    request,
  }:
    | Pick<LoaderFunctionArgs, "request">
    | Pick<ActionFunctionArgs, "request">) => {
    let session = await sessionStorage.getSession(
      request.headers.get("Cookie")
    );

    return session.has("access_token");
  },
  destroySession: async (
    {
      request,
    }:
      | Pick<LoaderFunctionArgs, "request">
      | Pick<ActionFunctionArgs, "request">,
    redirectTo: string
  ) => {
    let session = await sessionStorage.getSession(
      request.headers.get("Cookie")
    );

    return redirect(redirectTo, {
      headers: {
        "Set-Cookie": await sessionStorage.destroySession(session),
      },
    });
  },
};
