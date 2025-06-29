const path = require("path");
const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react-swc").default;
const { componentTagger } = require("lovable-tagger");

module.exports = defineConfig(({ mode }) => ({
  base: "/slidesparma-mobile-magic/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" ? componentTagger() : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
