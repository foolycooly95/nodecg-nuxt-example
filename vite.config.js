import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import NodeCGPlugin from "vite-plugin-nodecg";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), NodeCGPlugin()],
});
