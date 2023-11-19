import { LinksFunction, MetaFunction } from "@remix-run/node";
import ActuCatalog from "~/ui/pages/Catalog/ActuCatalog/ActuCatalog";

export const meta: MetaFunction = () => {
  return [
    {
      title: "OpenBox - Les Events",
    },
    {
      description: "Page de catalogue des évènements de OpenBox",
    },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "" }];
};

export default ActuCatalog;
// export {CatalogActuLoadr as loader, CatalogActuAction as action};
