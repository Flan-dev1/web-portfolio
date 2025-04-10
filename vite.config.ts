import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import postcssNested from "postcss-nested";
import autoPrefixer from "autoprefixer";
import tailwindpostcss from "@tailwindcss/postcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [tailwindpostcss, postcssNested, autoPrefixer],
    },
  },
  base: "/web-portfolio",
});
