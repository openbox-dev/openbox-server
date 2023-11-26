import { LoaderFunctionArgs, json } from "@remix-run/node";
import { SessionService } from "~/services/session.service";
import { UserService } from "~/services/user.service";

export async function CatalogLoader({ request }: LoaderFunctionArgs) {
  const token = await SessionService.isTokenValid({ request });
  const { data, ...rest } = await UserService.getAuthUser(token);
  return json({
    user: data instanceof Error ? null : data,
  });
}
