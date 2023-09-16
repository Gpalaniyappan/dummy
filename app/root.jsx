import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";


export default function App() {
  console.log('this is loading----');
  
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{'textAlign':'center'}}>
        <h1 style={{'textAlign':'center'}}>Hi iam palani testing app-----</h1>
        <p>hi</p>
       
      </body>
    </html>
  );
}
