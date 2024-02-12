/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "80ch",
            "blockquote p:first-of-type::before": false,
            "blockquote p:first-of-type::after": false,
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
