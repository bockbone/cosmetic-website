module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        displayFirst: ["Cormorant", "serif"],
        displaySecondary: ["La Belle Aurore", "cursive"],
        body: ["Montserrat", "sans-serif"],
      },
      lineHeight: {
        "extra-large": "5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
