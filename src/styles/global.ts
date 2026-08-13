import { createGlobalStyle } from 'styled-components'

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
  }

  body {
    margin: 0;
    min-width: 320px;
    background: #f4f1e9;
  }

  body,
  button,
  input,
  textarea {
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

  ::selection {
    background: #ef1b14;
    color: #fff;
  }

  /* Header: preto fixo + papel rasgado como camada independente. */
  header {
    height: 135px !important;
    background-color: #080808 !important;
    background-image: none !important;
    background-repeat: no-repeat !important;
    background-position: initial !important;
    background-size: initial !important;
    overflow: visible !important;
  }

  header::after {
    content: '';
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 222px;
    background-image: url('/assets/papelrasgado.png');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% auto;
    pointer-events: none;
  }

  @media (max-width: 800px) {
    header {
      height: 110px !important;
      padding: 14px 5vw 0 !important;
    }

    header::after {
      height: 160px;
      background-size: auto 160px;
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
`
