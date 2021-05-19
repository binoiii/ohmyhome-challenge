module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: "13px",
      sm: "14px",
      base: "15px",
      lg: "16px",
      xl: "17px",
      "2xl": "26px",
    },
    extend: {
      colors: {
        "gray-primary": "#1C1C1C",
        "gray-secondary": "#5F5F5F",
        "gray-tertiary": "#E8E8E8",
        "gray-fourth": "#EBEBEB",
        "gray-fifth": "#343434",
        "gray-sixth": "#E0E0E0",
        "gray-seventh": "#D1D1D1",
        "orange-primary": "#E55710",
        "orange-secondary": "#EE620F",
        "orange-tertiary": "#FFDAC4",
        "orange-fifth": "#FFDAC4",
      },
      fontFamily: {
        primary: ["Public Sans"],
      },
      width: {
        sm: "30rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
