import { LinksFunction, MetaFunction } from "@remix-run/node";

import Actualite from "~/ui/pages/Nested/Actualite/Actualite";

import actualiteStyle from "../styles/nested.actualite.css?url";

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
  return [{ rel: "stylesheet", href: actualiteStyle }];
};

export default Actualite;
// export {CatalogBoxLoader as loader, CatalogBoxAction as action};
