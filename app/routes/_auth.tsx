import { LinksFunction, MetaFunction } from "@remix-run/node";
import AuthLayout from "~/ui/pages/Auth/AuthLayout";
import authStyle from "../styles/auth.css?url";

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

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: authStyle,
  },
];

export default AuthLayout;
