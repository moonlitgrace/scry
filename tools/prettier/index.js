/** @typedef {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
  printWidth: 90,
  singleQuote: true,
};

export default config;
