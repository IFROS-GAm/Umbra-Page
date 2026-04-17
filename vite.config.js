import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const htmlEntry = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    port: 2023,
    strictPort: true,
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: htmlEntry("./index.html"),
        funciones: htmlEntry("./funciones/index.html"),
        interfaz: htmlEntry("./interfaz/index.html"),
        descargas: htmlEntry("./descargas/index.html"),
        terminos: htmlEntry("./terminos-de-uso/index.html"),
        privacy: htmlEntry("./privacy-policy/index.html"),
        safety: htmlEntry("./safety-center/index.html"),
        contact: htmlEntry("./contactanos/index.html"),
      },
    },
  },
});
