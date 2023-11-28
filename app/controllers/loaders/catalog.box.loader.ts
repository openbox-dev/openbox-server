import { boxCatalogService } from "~/services/catalog.box.service";
import { LoaderFunctionArgs } from "@remix-run/node";

export async function CatalogBoxLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("q") || undefined;
  const acceptedBox = await boxCatalogService.getAll({ search });

  return acceptedBox;
}
