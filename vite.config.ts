/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components')},
      { find: '@services', replacement: path.resolve(__dirname, 'src/services')},
      { find: '@models', replacement: path.resolve(__dirname, 'src/models')},
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages')},
      { find: '@builders', replacement: path.resolve(__dirname, 'tests/builders')},
      { find: '@tests', replacement: path.resolve(__dirname, 'tests')},
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-tests.js",
  },
});
