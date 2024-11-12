import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { logout } from "~/backend/config/session.config";

export async function loader({ request, params }: LoaderFunctionArgs) {
  return logout(request);
}
