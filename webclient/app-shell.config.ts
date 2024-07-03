import type { HvAppShellConfig } from "@hitachivantara/app-shell-vite-plugin";

export default (): HvAppShellConfig => ({
  name: "Pentaho App Shell",
  baseUrl: "/app-shell/",

  apps: {
    "@hv-apps/app-shell-home": "http://localhost:8080/pentaho/content/app-shell-home/webclient/",
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
