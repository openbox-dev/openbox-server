import { LinksFunction, MetaFunction } from "@remix-run/node";
import Auth from "~/ui/pages/Auth/Auth";

export const meta: MetaFunction = () => {
  return [
    {
      title: "OpenBox - Authentification",
    },
    {
      description: "Authentification à OpenBox",
    },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "" }];
};

export default Auth;
// export {};
