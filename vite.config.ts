import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixPWA } from "@remix-pwa/dev";
import { flatRoutes } from "remix-flat-routes";
import mkcert from 'vite-plugin-mkcert'

installGlobals();

// export default defineConfig({
//   plugins: [remix(), tsconfigPaths(), remixPWA()],
//   ignoredRouteFiles: ["**/*"],
//   routes: async (defineRoutes) => {
//     return flatRoutes("routes", defineRoutes);
//   },
// });

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*"],
      routes: async (defineRoutes) => {
        return flatRoutes("routes", defineRoutes);
      },
    }),
    tsconfigPaths(),
    remixPWA(),
    mkcert()
  ],
});
