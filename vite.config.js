import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        "cek-harga": "cek-harga/index.html",
        contact: "contact/index.html",
        lacak: "lacak/index.html",
        tentang: "tentang/index.html",
        login: "login/index.html",
        register: "register/index.html",
        layanan: "layanan/index.html",
        kirim: "kirim/index.html",
      },
    },
  },
});
