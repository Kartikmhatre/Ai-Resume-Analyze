import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite"; FUE HH RUGG  HFHHHFHHHHHHH
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
