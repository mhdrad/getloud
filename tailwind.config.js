const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  safelist: [
    "text-black",
    "text-white",
    "text-gray",
    "text-red",
    "text-orange",
    "text-yellow",
    "text-lime",
    "text-green",
    "text-teal",
    "text-cyan",
    "text-sky",
    "text-blue",
    "text-violet",
    "text-purple",
    "text-fuchsia",
    "text-pink",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Noto Sans Mono", ...fontFamily.sans],
    },
    extend: {
      colors: {
        white: "#e6e7ec",
        black: "#262729",
        "gray-light": "#e7e8ed",
        "gray-dark": "#92a6b3",
        blue: "#5499d7",
        orange: "#dc6439",
        yellow: "#ffda54",
        sky: "#d1dfe8",
      },
      keyframes: ({ theme }) => ({
        "post-scale-in": {
          "0%": { border: "none" },
          "1%": { border: "solid 1px", borderColor: theme("colors.gray-dark") },
          "100%": {
            border: "solid 1px",
            borderColor: theme("colors.gray-dark"),
            transform: "scale(1.05)",
          },
        },
      }),
      borderColor: ({ theme }) => ({
        DEFAULT: theme("colors.gray-dark"),
      }),
      animation: {
        "post-scale-in": "post-scale-in 0.1s both",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-links": theme("colors.orange"),
            "--tw-prose-pre-code": theme("colors.black"),
            "--tw-prose-pre-bg": theme("colors.sky"),
            pre: {
              borderRadius: 0,
              padding: "14px 2.5rem",
              margin: "14px -2.5rem",
            },
            code: {
              backgroundColor: theme("colors.sky"),
              color: theme("colors.black"),
              padding: ".25rem",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
