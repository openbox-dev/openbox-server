import { MetaFunction, LinksFunction } from "@remix-run/node";

import { NestedLoader } from "~/controllers/loaders/nested.loader";
import NestedLayout from "~/ui/pages/Nested/NestedLayout";

import indexStyle from "../styles/index.css?url";
import headerStyle from "../styles/header.css?url";
import footerStyle from "../styles/footer.css?url";

export const meta: MetaFunction = () => {
  return [
    {
      title: "OpenBox - Page",
    },
    {
      description: "Pages de OpenBox",
    },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: indexStyle,
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

export default NestedLayout;
export { NestedLoader as loader };
