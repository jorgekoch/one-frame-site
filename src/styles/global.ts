import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;

    /* ================================
       One Frame — Design Tokens
       ================================ */

    /* Colors */
    --color-red: #ef1b14;
    --color-black: #080808;
    --color-paper: #f7f5ef;
    --color-background: #f4f1e9;
    --color-white: #ffffff;
    --color-text: #151515;
    --color-muted: #555555;

    /* Typography */
    --font-display: Impact, "Arial Black", sans-serif;
    --font-body: Arial, Helvetica, sans-serif;
    --font-accent: Georgia, serif;

    /* Base */
    font-family: var(--font-body);
    background: var(--color-background);
    color: var(--color-text);
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
    background: var(--color-background);
    color: var(--color-text);
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
    outline: 3px solid var(--color-red);
    outline-offset: 4px;
  }

  ::selection {
    background: var(--color-red);
    color: var(--color-white);
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
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
