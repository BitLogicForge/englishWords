import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import visualizer from "vite-bundle-analyzer";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
    mode === "analyze" && visualizer(),
  ].filter(Boolean),
  base: "/englishWords/",
  build: {
    // Minimize chunk size and improve loading
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@mui/material", "@mui/icons-material"],
          store: ["@reduxjs/toolkit", "react-redux"],
        },
        // Add hashing for better caching
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize dependencies
    sourcemap: false,
    minify: "terser",
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false,
    },
  },
}));
