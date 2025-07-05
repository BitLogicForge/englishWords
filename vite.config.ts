import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import visualizer from "vite-bundle-analyzer";
import compression from "vite-plugin-compression";
// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), compression(), mode === "analyze" && visualizer()],
  base: "/englishWords/",
  build: {
    // Minimize chunk size and improve loading
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@mui/material", "@mui/icons-material"],
        },
      },
    },
  },
}));
