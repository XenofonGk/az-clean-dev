import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This site is deployed as a GitHub Pages *project* site at
// https://xenofongk.github.io/az-clean-dev/ — so every asset URL needs the
// "/az-clean-dev/" prefix. That prefix is exactly the base below.
//
// If you ever move this to its own domain (or to a Pages *user* site,
// i.e. a repo literally named "xenofongk.github.io"), change base to "/".
export default defineConfig({
  base: "/az-clean-dev/",
  plugins: [react()],
});
