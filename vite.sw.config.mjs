import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "sw-test",
    emptyOutDir: true,
    lib: {
      entry: "src/sw.js",
      formats: ["es"],
      fileName: () => "sw.js"
    },
    minify: false
  }
});
