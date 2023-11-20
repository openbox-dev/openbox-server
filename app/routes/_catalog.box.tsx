import { LinksFunction, MetaFunction } from "@remix-run/node";
import BoxCatalog from "~/ui/pages/Catalog/BoxCatalog/BoxCatalog";

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

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: "" }];
// };

export default BoxCatalog;
// export {CatalogBoxLoader as loader, CatalogBoxAction as action};
