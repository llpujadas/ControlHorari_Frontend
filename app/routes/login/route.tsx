import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import { authenticate } from "~/backend/controllers/auth.controller.server";
import { authTokenCookie } from "~/backend/config/session.config";
import { useLoaderData, useRouteError } from "@remix-run/react";
import { commitSession, getSession } from "~/backend/server/session.server";
import { FiX } from "react-icons/fi";

// ACTION ======================================================================
export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await authenticate(request, email, password);

  if (!user) {
    const session = await getSession(request.headers.get("Cookie"));
    session.flash("error", "Credencials incorrectes");

    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  const headers = new Headers();
  headers.append("Set-Cookie", await authTokenCookie.serialize(user));
  return redirect("/dashboard", { headers });
}

// LOADER ======================================================================
export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const error = session.get("error") || null;

  // Commit the session to remove the error
  const headers = new Headers();
  if (error) {
    session.unset("error");
    headers.append("Set-Cookie", await commitSession(session));
  }

  return json({ error }, { headers });
};

export default function LoginPage() {
  const { error } = useLoaderData<{error: any}>();

  return (
    <section className="bg-white dark:bg-gray-900 h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center mb-4">
          <img
            className="w-auto h-32"
            src="/logo_portal_fitxades.png"
            alt="SICRES App Logo"
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Portal de fitxades
        </h1>
        <form className="space-y-4" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correu electrònic
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
              placeholder="usuari@domini.cat"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Contrasenya
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Recorda'm
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-color-accent hover:underline dark:text-green-500"
            >
              Has oblidat la contrasenya?
            </a>
          </div>
          <button
            type="submit"
            className="btn w-full px-4 py-2 font-medium text-white color-accent rounded-md"
          >
            Accedir
          </button>
          {error && (
            <div
              role="alert"
              className="flex items-center p-4 text-red-700 bg-red-100 border border-red-300 rounded-md gap-2"
            >
              <FiX />
              Error a l'hora d'autenticar-se. <br />
              Si us plau, revisa les teves dades.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
