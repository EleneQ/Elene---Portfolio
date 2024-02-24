import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colors: {
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: {
          dark: string;
        };
        secondary: {
          lightest: string;
        };
        tertiary: {
          light: string;
          medium: string;
        };
      };
      accent: {
        light: string;
        medium: string;
      };
    };

    typography: {
      fontFamily: {
        primary: string;
      };
      fontWeight: {
        regular: number;
        medium: number;
        semiBold: number;
        bold: number;
        extraBold: number;
        black: number;
      };
      fontSize: {
        small: string;
        regular: string;
        medium: string;
        large1: string;
        large2: string;
        large3: string;
        largest: string;
      };
    };
  }
}
