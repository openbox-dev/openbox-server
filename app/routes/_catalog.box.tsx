import { LinksFunction, MetaFunction } from "@remix-run/node";
import BoxCatalog from "~/ui/pages/Catalog/BoxCatalog/BoxCatalog";
import { CatalogBoxLoader } from "~/controllers/loaders/catalog.box.loader";
import { CatalogBoxAction } from "~/controllers/actions/catalog.box.action";
import catalogStyle from "../styles/catalog.css?url";

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
  return [{ rel: "stylesheet", href: catalogStyle }];
};

export default BoxCatalog;
export { CatalogBoxLoader as loader, CatalogBoxAction as action };
