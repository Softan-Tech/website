import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@sections": path.resolve(__dirname, "./src/components/sections"),
      "@layout": path.resolve(__dirname, "./src/components/layout"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets")
    }
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    allowedHosts: ["2d91-105-163-157-28.ngrok-free.app"]
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "terser",
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          utils: ["lodash", "lucide-react"]
        }
      }
    }
  }
});
