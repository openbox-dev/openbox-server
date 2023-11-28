import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { EventPageData, EventService } from "~/services/event.service";
export async function NestedEventLoader({
  request,
  params,
}: LoaderFunctionArgs) {
  const pageData = await EventService.getEventPage(Number(params.eventId));
  if (!pageData.success) return redirect("/");

  return pageData.data as EventPageData;
}
