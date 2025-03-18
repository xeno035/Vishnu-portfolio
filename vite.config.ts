import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Ensure TypeScript recognizes this alias
    },
  },
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      external: [], // Remove 'react-router-dom' from external
    },
  },
});
