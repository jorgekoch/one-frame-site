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

  /*
   * O papel rasgado possui áreas transparentes acima e abaixo da faixa.
   * O Header estava mostrando somente a área transparente superior.
   * O deslocamento vertical coloca o preto/textura atrás do menu e o
   * papel branco rasgado exatamente na base do topbar.
   */
  header {
    height: clamp(112px, 10.833vw, 208px) !important;
    background-color: transparent !important;
    background-size: 100% auto !important;
    background-position: center -10.95vw !important;
    background-repeat: no-repeat !important;
    overflow: visible !important;
  }

  @media (max-width: 800px) {
    header {
      height: 96px !important;
      padding: 14px 5vw 0 !important;
      background-size: 100% auto !important;
      background-position: center -8vw !important;
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
