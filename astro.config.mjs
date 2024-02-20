import { defineConfig } from "astro/config";
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";


// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
  integrations: [
    {
      name: "vite-plugin-purge-css",
      hooks: {
        ["astro:config:setup"]({ updateConfig }) {
          updateConfig({
            vite: {
              plugins: [
                pluginPurgeCss()
              ]
            }
          });
        }
      }
    }
  ]
});