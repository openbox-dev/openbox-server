import { LinksFunction, MetaFunction } from "@remix-run/node";
import RegisterForm from "~/ui/pages/Auth/components/RegisterForm";

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
  return [{ rel: "stylesheet", href: "" }];
};

// export default Component;
// export {CatalogBoxLoader as loader, CatalogBoxAction as action};
