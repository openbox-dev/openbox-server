import { LinksFunction, MetaFunction } from "@remix-run/node";
import AuthLayout from "~/ui/pages/Auth/AuthLayout";

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

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: "" }];
// };

export default AuthLayout;
// export {};
