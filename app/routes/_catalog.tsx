import { LinksFunction, MetaFunction } from "@remix-run/node";

import CatalogLayout from "~/ui/pages/Catalog/CatalogLayout";
import { CatalogLoader } from "~/controllers/loaders/catalog.loader";

import indexStyle from "../styles/index.css?url";
import headerStyle from "../styles/header.css?url";
import footerStyle from "../styles/footer.css?url";

export const meta: MetaFunction = () => {
  return [
    {
      title: "OpenBox - Catalogue",
    },
    {
      description: "Catalogues de OpenBox",
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

export default CatalogLayout;
export { CatalogLoader as loader };
