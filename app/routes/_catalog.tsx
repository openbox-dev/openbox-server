import { LinksFunction, MetaFunction } from "@remix-run/node";
import Auth from "~/ui/pages/Auth/Auth";

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

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "" }];
};

// export default Component;
// export {CatalogLoader as loader, CatalogAction as action};
