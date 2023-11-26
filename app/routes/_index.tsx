import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Home from "~/ui/pages/Home/Home";
import indexStyle from "../styles/index.css?url";
import homeStyle from "../styles/home.css?url";
import headerStyle from "../styles/header.css?url";
import footerStyle from "../styles/footer.css?url";
import { HomeLoader } from "~/controllers/loaders/home.loader";
import { HomeAction } from "~/controllers/actions/home.action";

export const meta: MetaFunction = () => {
  return [
    { title: "OpenBox - Accueil" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: indexStyle,
  },
  {
    rel: "stylesheet",
    href: homeStyle,
  },
  {
    rel: "stylesheet",
    href: headerStyle,
  },
  {
    rel: "stylesheet",
    href: footerStyle,
  },
];

export default Home;
export { HomeLoader as loader, HomeAction as action };
