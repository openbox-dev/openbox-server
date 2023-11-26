import { LinksFunction, MetaFunction } from "@remix-run/node";

import Box from "~/ui/pages/Nested/Box/Box";

import boxStyle from "../styles/nested.box.css?url";

export const meta: MetaFunction = () => {
  return [
    {
      title: "OpenBox - Les Box",
    },
    {
      description: "Page de catalogue des box de OpenBox",
    },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: boxStyle }];
};

export default Box;
// export {CatalogBoxLoader as loader, CatalogBoxAction as action};
