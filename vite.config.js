import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@css": path.resolve(__dirname, "src/css"),
      "@component": path.resolve(__dirname, "src/component"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});
