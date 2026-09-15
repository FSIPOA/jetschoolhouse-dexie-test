import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "sw-test",
    emptyOutDir: true,
    lib: {
      name: "JetSchoolhouseServiceWorker",
      entry: "src/sw.js",
      formats: ["iife"],
      fileName: () => "sw.js"
    },
    minify: false
  }
});
