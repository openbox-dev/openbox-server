import { LinksFunction, MetaFunction } from "@remix-run/node";
import LoginForm from "~/ui/pages/Auth/components/LoginForm";

export const meta: MetaFunction = () => {
  return [
    {
      title: "OpenBox - Connexion",
    },
    {
      description: "Page de connexion à OpenBox",
    },
  ];
};

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: "" }];
// };

export default LoginForm;
// export {};
