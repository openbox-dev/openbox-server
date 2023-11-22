import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "OpenBox - OpenVote" },
    {
      description: "Page OpenVote de OpenBox",
    },
  ];
};

export default function placeHolder() {
  return <div className="soon">ici</div>;
}

import type { LoaderFunctionArgs } from "@remix-run/node";
import { SessionService } from "~/services/session.service";
import { UserService } from "~/services/user.service";
export async function loader({ request }: LoaderFunctionArgs) {
  const token = await SessionService.isTokenValid({ request });
  await UserService.getAuthorization(token, "/openvote");
  return {};
}
