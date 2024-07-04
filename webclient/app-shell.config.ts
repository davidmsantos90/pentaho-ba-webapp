import type { AppShellVitePluginOptions, HvAppShellConfig } from "@hitachivantara/app-shell-vite-plugin";

export default (
  _opts: AppShellVitePluginOptions,
  env: Record<string, string>
): HvAppShellConfig => ({
  name: "Pentaho App Shell",
  baseUrl: env.VITE_BASE_URL || "/app-shell/",

  apps: {
    "@hv-apps/app-shell-home": env.VITE_HOME || "http://localhost:8080/pentaho/content/app-shell-home/webclient/",
  },

  header: {
    actions: [
      {
        bundle: "@hv/help-client/button.js",
        config: {
          url: "https://www.hitachivantara.com/",
          description: "Hitachi Vantara Help Link"
        }
      },
      {
        bundle: "@hv/theming-client/colorModeSwitcher.js"
      },
    ]
  },

  menu: [
    {
      label: "Home",
      target: "/"
    }
  ],

  mainPanel: {
    maxWidth: "xl",
    views: [{
      bundle: "@hv-apps/app-shell-home/pages/Home.js",
      route: "/",
    },]
  },

  navigationMode: "ONLY_LEFT"
});
