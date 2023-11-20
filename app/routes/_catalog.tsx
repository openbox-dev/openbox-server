import { LinksFunction, MetaFunction } from "@remix-run/node";
import Auth from "~/ui/pages/Auth/AuthLayout";
import CatalogLayout from "~/ui/pages/Catalog/CatalogLayout";
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
    href: headerStyle,
  },
  {
    rel: "stylesheet",
    href: footerStyle,
  },
];

export default CatalogLayout;
// export {CatalogLoader as loader, CatalogAction as action};
