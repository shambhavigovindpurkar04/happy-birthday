import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Base path for GitHub Pages (must match repo name)
  base: "/happy-birthday/",

  plugins: [react()],

  // Dev server settings (used only for npm run dev)
  server: {
    port: 5173,
    open: true
  }
});
