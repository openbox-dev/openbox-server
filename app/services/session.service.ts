import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { expireDelay } from "~/constants/token";
import { sessionStorage } from "~/utils/session.server";
import { UserService } from "./user.service";

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
          expires: new Date(Date.now() + expireDelay),
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
    const token = session.get("access_token");
    const { data, success } = await UserService.getAuthUser(token);

    if (!success && session.has("access_token")) {
      await UserService.deleteAuth(token);
      return "";
    }

    return session.has("access_token") ? token : "";
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
    const token = session.get("access_token");
    await UserService.deleteAuth(token);
    return redirect(redirectTo, {
      headers: {
        "Set-Cookie": await sessionStorage.destroySession(session),
      },
    });
  },
};
