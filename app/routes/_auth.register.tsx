import { LinksFunction, MetaFunction } from "@remix-run/node";

import { registerAction } from "~/controllers/actions/register.action";
import { authLoader } from "~/controllers/loaders/auth.loader";

import RegisterForm from "~/ui/pages/Auth/components/RegisterForm";

export const meta: MetaFunction = () => {
  return [
    {
      title: "OpenBox - Inscription",
    },
    {
      description: "Page d'inscription à OpenBox",
    },
  ];
};

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: "" }];
// };

export default RegisterForm;
export { registerAction as action };
