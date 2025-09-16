module.exports = {
  content: [
    "./src/**/*.{html,njk,md}",   // all templates in src
    "./src/_includes/**/*.{html,njk}", // partials
    "./src/projects/**/*.{html,md,njk}" // project pages
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
