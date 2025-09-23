import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import noSpanishSymbols from "./no-spanish-symbols.js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  plugins: { js, "no-spanish-symbols": { rules: { "no-spanish-symbols": noSpanishSymbols } } },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      camelcase: ["warn", { ignoreImports: true }],
      "no-unused-expressions": ["error"],
      "no-spanish-symbols/no-spanish-symbols": ["error"]
    }
  },
  pluginReact.configs.flat.recommended
]);
