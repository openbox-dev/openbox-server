import { EventService } from "~/services/event.service";
import { LoaderFunctionArgs } from "@remix-run/node";

export async function eventCalendarLoader() {
  const allEventBox = await EventService.getAllEvents();
  const closestEventBox = await EventService.getThreeClosestEvents();
  return [allEventBox, closestEventBox];
}
