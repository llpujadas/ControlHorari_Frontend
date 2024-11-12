// session.controller.ts
import { createCookie, redirect } from "@remix-run/node";

// Crear una cookie
export const authTokenCookie = createCookie("authToken", {
  maxAge: 60 * 60 * 24 * 7, // 7 dies
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  path: "/",
});

export async function getToken(request: Request){
  const cookieHeader = request.headers.get("Cookie");
  const token = await authTokenCookie.parse(cookieHeader);
  return token;
}

export async function logout(request: Request) {
  const headers = new Headers();
  headers.append("Set-Cookie", await authTokenCookie.serialize("", { expires: new Date(0) }));
  return redirect("/login", { headers });
}