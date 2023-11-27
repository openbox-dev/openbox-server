import { LinksFunction, MetaFunction } from "@remix-run/node";

import Event from "~/ui/pages/Nested/Event/Event";

import eventStyle from "../styles/nested.event.css?url";

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
  return [{ rel: "stylesheet", href: eventStyle }];
};

export default Event;
// export {CatalogBoxLoader as loader, CatalogBoxAction as action};
