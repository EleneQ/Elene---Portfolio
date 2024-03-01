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
        tertiary: string;
      };
      text: {
        primary: {
          medium: string;
          dark: string;
        };
        secondary: {
          lightest: string;
        };
        tertiary: {
          light: string;
        };
        blue: {
          900: string;
        };
      };
      accent: {
        light: string;
        medium: string;
      };
      error: string;
      success: string;
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
        medium2: string;
        large1: string;
        large2: string;
        large3: string;
        largest: string;
      };
    };
  }
}
