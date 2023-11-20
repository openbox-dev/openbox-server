import { LinksFunction, MetaFunction } from "@remix-run/node";
import Auth from "~/ui/pages/Auth/AuthLayout";
import CatalogLayout from "~/ui/pages/Catalog/CatalogLayout";

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

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: "" }];
// };

export default CatalogLayout;
// export {CatalogLoader as loader, CatalogAction as action};
