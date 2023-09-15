import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import MyApp from "./sidemenu/sideMenu";

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{'textAlign':'center'}}>
        <h1 style={{'textAlign':'center'}}>Hi iam palani testing app</h1>
        <MyApp/>
      </body>
    </html>
  );
}
