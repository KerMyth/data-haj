import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // ganti dengan nama repository
  base: "/data-haj/",
});
