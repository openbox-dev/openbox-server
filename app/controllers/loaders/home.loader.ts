import { LoaderFunctionArgs, json } from "@remix-run/node";
import { ActualiteService } from "~/services/article.service";
import { SessionService } from "~/services/session.service";
import { UserService } from "~/services/user.service";

export async function HomeLoader({ request }: LoaderFunctionArgs) {
  // TODO:
  // - Get latest Newsletter
  // - Get 3 coming Events
  // - Get 2 Boxes
  const latestActualites = await ActualiteService.getLatest();
  const comingEvents: any = [];
  const popularBoxes: any = [];

  const token = await SessionService.isTokenValid({ request });
  const { data, ...rest } = await UserService.getAuthUser(token);
  return json({
    user: data instanceof Error ? undefined : data,
    latestActualites,
    comingEvents: comingEvents,
    popularBoxes: popularBoxes,
  });
}
