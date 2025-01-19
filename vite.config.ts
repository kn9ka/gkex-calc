import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    build: {
      target: "es2022",
      sourcemap: true,
      minify: false,
    },
    server: {
      port: 3000,
    },
    plugins: [
      remix({
        ssr: false,
        appDirectory: "./src/app",
        // Extra guarantee that no test files are included in the build.
        ignoredRouteFiles: ["**/*.{test,spec}.[jt]s?(x)"],
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_lazyRouteDiscovery: true,
          v3_singleFetch: true,
        },
      }),
      tsconfigPaths(),
    ],
  };
});
