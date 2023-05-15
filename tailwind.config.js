/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Stem"'],
      serif: ['"Classico URW"'],
      display: ['"Classico URW"'],
    },
    extend: {
      dropShadow: {
        custom: "0px 10px 40px rgba(173, 168, 159, 0.3)",
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)",
          light: "var(--primary-light-color)",
        },
        secondary: {
          text: "var(--text-secondary-color)",
        },
        body: "var(--body-color)",
        black: "var(--text-primary-color)",
        card: "var(--card-color)",
      },
      boxShadow: {
        primary: "var(--shadow-primary)",
        white: "0px 4px 40px rgba(250, 248, 246, 0.8)",
      },
    },
  },
  plugins: [],
};
