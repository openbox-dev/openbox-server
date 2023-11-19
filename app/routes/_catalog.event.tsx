import { LinksFunction, MetaFunction } from "@remix-run/node";
import RegisterForm from "~/ui/pages/Auth/components/RegisterForm";

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

// export default Component;
// export {CatalogEventLoader as loader, CatalogEventAction as action};
