import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { BoxService } from "~/services/box.service";
import { EventService } from "~/services/event.service";

export async function BoxLoader({ request, params }: LoaderFunctionArgs) {
  const boxId = Number(params.boxId);

  const box = await BoxService.getBoxById({ boxId });
  const events = await EventService.getBoxEvents({ boxId });

  if (!box.success || !events.success) return redirect("/");

  return { box, events };
}
