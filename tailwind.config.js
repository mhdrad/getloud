module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
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
    },
  },
  plugins: [],
};
