import type { LoaderFunctionArgs } from "@remix-run/node";
import { SessionService } from "~/services/session.service";
import { UserService } from "~/services/user.service";

export async function OpenVoteLoader({ request }: LoaderFunctionArgs) {
  const token = await SessionService.isTokenValid({ request });
  return await UserService.getAuthorization(token, "/openvote");
}
