import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        index: "index.html",
        blog: "blog/index.html",
      },
    },
  },
});
