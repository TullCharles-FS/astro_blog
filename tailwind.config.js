module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        space: "#1a237e", // deep space blue
        nebula: "#4A148C", // nebula purple
        star: "#FFEB3B", // star yellow
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
