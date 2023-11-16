import { Prisma } from "@prisma/client";
import type { ActionFunctionArgs } from "@remix-run/node";
import prisma from "~/utils/prisma";

export async function HomeAction({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const articleInputs = {
    data,
  };

  const user = await prisma.user.findFirst();
  if (!user) {
    return;
  }

  const userSelect: Prisma.NewsletterSelect = {
    id: true,
  };

  return await prisma.newsletter.create({
    data: {
      title: articleInputs.data.get("title") as string,
      content: "contenu de zinzolin",
      image: "url",
      heading: "a",
      writer: user?.id,
    },
    select: userSelect,
  });
}
