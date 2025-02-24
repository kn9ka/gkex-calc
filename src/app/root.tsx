import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { type Params } from '@remix-run/react';

import { AppLayout } from '@/app/layout/AppLayout';
import styles from './root.module.css';
import { Loader } from '@/shared/ui/Loader/Loader';
import Header from '@/pages/Home/ui/Header';

export type Handle = {
  breadcrumb: (params: Params<string>) => React.ReactNode;
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#240927" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <title>GK Exchange</title>
        <Meta />
        <Links />
      </head>

      <body>
        <Header />
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
  return (
    <div className={styles.hydration}>
      <Loader />
    </div>
  );
};

export default function App() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
