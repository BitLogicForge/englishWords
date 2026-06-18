import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import visualizer from "vite-bundle-analyzer";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === "analyze" && visualizer()].filter(Boolean),
  base: "/englishWords/",
  build: {
    // Minimize chunk size and improve loading
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes("node_modules")) return;
          if (
            id.includes("react-router-dom") ||
            id.includes("react-dom") ||
            /[\\/]react[\\/]/.test(id)
          ) {
            return "vendor";
          }
          if (id.includes("@mui/material") || id.includes("@mui/icons-material")) {
            return "ui";
          }
          if (id.includes("@reduxjs/toolkit") || id.includes("react-redux")) {
            return "store";
          }
        },
      },
    },
    minify: "oxc",
  },
  // Optimize dev server
  server: {
    host: true,
    hmr: {
      overlay: false,
    },
  },
}));
