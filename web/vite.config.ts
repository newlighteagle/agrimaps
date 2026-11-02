import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        home: "index.html",
        day01: "30dmc/2026/day/01/index.html",
      },
    },
  },
});
