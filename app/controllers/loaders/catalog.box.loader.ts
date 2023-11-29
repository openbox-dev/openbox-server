import { LoaderFunctionArgs } from "@remix-run/node";
import { BoxService } from "~/services/box.service";

export async function CatalogBoxLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("q") || undefined;
  const acceptedBox = await BoxService.getAll({ search });

  return acceptedBox;
}
