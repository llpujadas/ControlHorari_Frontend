// app/utils/session.server.js
import { createCookieSessionStorage } from "@remix-run/node";

const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    secure: process.env.NODE_ENV === "production",
    // secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 dies
    httpOnly: true,
  },
});

export const { getSession, commitSession, destroySession } = storage;
