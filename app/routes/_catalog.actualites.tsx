import { LinksFunction, MetaFunction } from "@remix-run/node";
import ActuCatalog from "~/ui/pages/Catalog/ActuCatalog/ActuCatalog";

export const meta: MetaFunction = () => {
  return [
    {
      title: "OpenBox - Les Actualités",
    },
    {
      description: "Page de catalogue des actualités de OpenBox",
    },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "" }];
};

export default ActuCatalog;
// export {CatalogActuLoader as loader, CatalogActuAction as action};
