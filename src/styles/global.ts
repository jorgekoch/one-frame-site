import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
    font-family: Arial, Helvetica, sans-serif;
    background: #f4f1e9;
    color: #151515;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
  }

  body {
    margin: 0;
    min-width: 320px;
    background: #f4f1e9;
  }

  body,
  button,
  input,
  textarea,
  select {
    font-family: inherit;
  }

  button,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  :focus-visible {
    outline: 3px solid #ef1b14;
    outline-offset: 4px;
  }

  ::selection {
    background: #ef1b14;
    color: #fff;
  }

  @media (max-width: 800px) {
    html {
      scroll-padding-top: 80px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
`;
