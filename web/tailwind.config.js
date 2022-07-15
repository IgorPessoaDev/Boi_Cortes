module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        p: "Poppins, sans-serif",
        dm: "DM Sans, sans-serif",
        quiksand: "Quicksand, sans-serif",
      },
      colors: {
        shadow: "#261932",
      },
      boxShadow: {
        c: "0 10px 15px rgb(0 0 0 / 0.1)",
      },
      width: {
        0: "0%",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
