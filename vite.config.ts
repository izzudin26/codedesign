import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      '@kourse': path.join(__dirname, "src/kourse"),
      '@digidaw': path.join(__dirname, "src/digidaw")
    },
  },
});
