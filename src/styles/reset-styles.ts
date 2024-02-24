import { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400..900&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: 400;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.regular};
    min-height: 100vh;
  }

  img,
  picture {
    max-width: 100%;
    display: block; 
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default CSSReset;
