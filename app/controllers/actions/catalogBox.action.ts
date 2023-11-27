import type { ActionFunctionArgs } from "@remix-run/node";
import prisma from "~/utils/prisma";

export async function CatalogBoxAction({ request }: ActionFunctionArgs) {
    const data = await request.formData()
    const acceptedBox = {
        data,
    }
    const findAllAcceptedBox = await prisma.box.findMany({
        where: {
            status: 'ACCEPTED'
        }
    })
    return findAllAcceptedBox
}

