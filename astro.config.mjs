// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss(), icon(), react()],
  },

  adapter: netlify(),
});
