import { boxCatalogService } from "~/services/catalogBox.service";
import { LoaderFunctionArgs } from '@remix-run/node'

export async function CatalogBoxLoader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const q = url.searchParams.get('q') || undefined
    const acceptedBox = await boxCatalogService.getAll({ q })
    return acceptedBox
}
