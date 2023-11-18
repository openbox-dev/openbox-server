import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

import indexStyle from "./styles/index.css?url";
import headerStyle from "./styles/header.css?url";
import footerStyle from "./styles/footer.css?url";
import Footer from "./ui/common/Footer/Footer";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: indexStyle,
  },
  {
    rel: "stylesheet",
    href: headerStyle,
  },
  {
    rel: "stylesheet",
    href: footerStyle
  }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
        <Footer></Footer>
      </body>
    </html>
  );
}
