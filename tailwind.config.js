module.exports = {
  content: [
    "./src/**/*.{html,njk,md}",
    "./src/_includes/**/*.{html,njk}",
    "./src/projects/**/*.{html,md,njk}",
  ],
  theme: { extend: {} },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: ["cupcake", "dark"],
    darkTheme: "dark",
    base: true
  },
};
