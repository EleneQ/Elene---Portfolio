import { DefaultTheme } from "styled-components";

const colorTokens = {
  blue: {
    900: "#28293E",
  },
  pink: {
    300: "#F3D1BF",
  },
  red: {
    400: "#F87762",
    500: "#EF6D58",
    600: "#FF3131",
  },
  brown: {
    800: "rgba(57, 20, 0, 0.64)",
    900: "#391400",
  },
  white: "#FFFFFF",
  gray: {
    400: "rgba(255, 255, 255, 0.64)",
    500: "rgba(57, 20, 0, 0.64)",
  },
  green: {
    500: "#008000",
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
        medium: colorTokens.brown[800],
        dark: colorTokens.brown[900],
      },
      secondary: {
        lightest: colorTokens.white,
      },
      tertiary: {
        light: colorTokens.gray[400],
      },
      blue: {
        900: colorTokens.blue[900],
      },
    },
    accent: {
      light: colorTokens.red[400],
      medium: colorTokens.red[500],
    },
    error: colorTokens.red[600],
    success: colorTokens.green[500],
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
