import { type Params } from "@remix-run/react";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export type Handle = {
  breadcrumb: (params: Params<string>) => React.ReactNode;
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Content Tool</title>
        <Meta />
        <Links />
      </head>

      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export const handle: Handle = {
  breadcrumb: () => <Link to="/">Home</Link>,
};

export const HydrateFallback = () => {
  return <div>Loading...</div>;
};

export default function App() {
  return <Outlet />;
}
