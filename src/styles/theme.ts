export const colorTokens = {
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

const theme = {
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
    },
    surface: {
      accent: {
        light: colorTokens.red[400],
        medium: colorTokens.red[500],
      },
    },
  },
  typography: {},
};

export default theme;
