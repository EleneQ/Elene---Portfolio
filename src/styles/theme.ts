import { DefaultTheme } from "styled-components";

const colorTokens = {
  blue: {
    900: "#28293E",
  },
  pink: {
    300: "#F3D1BF",
  },
  red: {
    400: "#EF6C57",
    500: "#EF6D58",
  },
  brown: {
    900: "#391400",
  },
  white: "#FFFFFF",
  gray: {
    400: "rgba(255, 255, 255, 0.64)",
    500: "rgba(57, 20, 0, 0.64)",
  },
};

const theme: DefaultTheme = {
  breakpoints: {
    xs: "500px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  colors: {
    background: {
      primary: colorTokens.blue[900],
      secondary: colorTokens.pink[300],
    },
    text: {
      primary: {
        dark: colorTokens.brown[900],
      },
      secondary: {
        lightest: colorTokens.white,
      },
      tertiary: {
        light: colorTokens.gray[400],
        medium: colorTokens.gray[500],
      },
      blue: {
        900: colorTokens.blue[900],
      },
    },
    accent: {
      light: colorTokens.red[400],
      medium: colorTokens.red[500],
    },
  },
  typography: {
    fontFamily: {
      primary: ["Epilogue", "sans-serif"].join(","),
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
    fontSize: {
      small: "0.875rem", //14px
      regular: "1rem", //16px
      medium: "1.25rem", //20px
      large1: "1.5rem", //24px
      large2: "2.5rem", //40px
      large3: "3.5rem", //56px
      largest: "4.5rem", //72px
    },
  },
};

export default theme;
