import { MetaFunction } from "@remix-run/node";
import { signOutLoader } from "~/controllers/loaders/signout.loader";

export const meta: MetaFunction = () => {
  return [
    {
      title: "OpenBox - Déconnexion",
    },
    {
      description: "Page de déconnexion à OpenBox",
    },
  ];
};

const LogOutPage = () => {
  return <div className="logout">logout</div>;
};
export { signOutLoader as loader };
