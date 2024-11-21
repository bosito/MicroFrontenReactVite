import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    federation({
      name: "MyFirstFrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./Content": "./src/main.tsx", // Cambia la ruta según tu proyecto
      },
      shared: ["react", "react-dom"], // Asegúrate de compartir estas dependencias
    }),
  ],
  build: {
    target: "esnext",
  },
});
