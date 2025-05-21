import { config as baseConfig } from "./base.js";
import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * NestJS-specific ESLint config extending the base config.
 * @type {import("eslint").Linter.Config}
 */
export const nestJsConfig = [
  ...baseConfig,
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
    },
  },
];
