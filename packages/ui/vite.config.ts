import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  test: {
    environment: "happy-dom",
    setupFiles: ["./src/test-setup.ts"],
    globals: true,
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "NAMUI",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "es" : "cjs"}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "framer-motion",
        "@nam-ds/tokens",
        "@nam-ds/motion",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "framer-motion": "FramerMotion",
          "@nam-ds/tokens": "NAMTokens",
          "@nam-ds/motion": "NAMMotion",
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
