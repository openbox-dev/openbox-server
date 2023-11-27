import { LoaderFunctionArgs } from '@remix-run/node';
import { BoxService } from "~/services/box.service";
import { EventService } from "~/services/event.service";

export async function BoxLoader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const boxIdString = url.pathname.split('/').pop();
    if (boxIdString) {
        const boxId = parseInt(boxIdString);
        const box = await BoxService.getAll({ boxId });
        const events = await EventService.getBoxEvents({ boxId });
        return { box, events };
    }
}