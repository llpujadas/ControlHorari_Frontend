import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";
import { getToken } from "~/backend/config/session.config";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// export async function loader({ request, params }: LoaderFunctionArgs) {
//   const token = await getToken(request);

//   console.log("TOKEN", token);
  
//   if (!token && !request.url.includes("/dashboard")) {
//     return redirect("/login");
//   } else {
//     return redirect("/dashboard");
//   }

//   return {};
// }

export default function Index() {
  return (
    <>
      {/* <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}> */}
      <div>
        <h1 className="bg-red-400">Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
