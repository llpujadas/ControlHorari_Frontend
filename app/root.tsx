import { LinksFunction, LoaderFunctionArgs, redirect } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";
import { getToken } from "./backend/config/session.config";
import Sidebar from "./components/Sidebar";
import { Toaster } from "./components/ui/toaster";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export async function loader({ request, params }: LoaderFunctionArgs) {
  const token = await getToken(request);

  console.log("TOKEN", token);

  if (!token && !request.url.includes("login")) {
    return redirect("/login");
  }

  if (token && !request.url.includes("dashboard")) {
    return redirect("/dashboard");
  }

  return {};
}

export default function Layout() {
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <Meta />
        <link rel="manifest" href="/manifest.json"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body>
        <div className="app-container flex">
          {/* {!location.pathname.includes("login") && <Sidebar />} */}

          <main className="flex-grow bg-white">
            <Outlet />
          </main>

          {/* Shadcn toast */}
          <Toaster />

          {/* Manages scroll position for client-side transitions */}
          {/* If you use a nonce-based content security policy for scripts, you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
          <ScrollRestoration />

          {/* Script tags go here */}
          {/* If you use a nonce-based content security policy for scripts, you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
          <Scripts />

          {/* Sets up automatic reload when you change code */}
          {/* and only does anything during development */}
          {/* If you use a nonce-based content security policy for scripts, you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
          {/* <LiveReload /> */}
          {/* {!location.pathname.includes("login") && <ScreenMenu />} */}
          <ScrollRestoration />
        </div>
      </body>
    </html>
  );
}

// export default function App() {
//   return <Outlet />;
// }
