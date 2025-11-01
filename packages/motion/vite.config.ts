import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "NAMMotion",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "es" : "cjs"}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "framer-motion", "@nam-ds/tokens"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "framer-motion": "FramerMotion",
          "@nam-ds/tokens": "NAMTokens",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  esbuild: {
    jsx: "automatic",
  },
});
