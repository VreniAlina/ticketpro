import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@props": path.resolve(__dirname, "src/types"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@scss": path.resolve(__dirname, "src/scss"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@translations": path.resolve(__dirname, "src/translations"),
      "@stores": path.resolve(__dirname, "src/stores"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@scss/base" as *;`,
      },
    },
  },
})
