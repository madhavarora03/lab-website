/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import flowbite from "flowbite/plugin";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  daisyui: {
    themes: ["light"],
  },

  theme: {
    extend: {},
  },
  plugins: [flowbite, daisyui],
};
