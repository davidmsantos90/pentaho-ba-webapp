import type { HvAppShellConfig } from "@hitachivantara/app-shell-vite-plugin";

export default (): HvAppShellConfig => ({
  name: "Pentaho App Shell",
  baseUrl: "/app-shell/",

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

  navigationMode: "ONLY_LEFT",
});
