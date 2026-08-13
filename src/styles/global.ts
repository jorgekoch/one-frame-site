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

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; min-width: 320px; background: #f4f1e9; }
  body, button, input, textarea { font-family: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; }
  img { display: block; max-width: 100%; }
  ::selection { background: #ef1b14; color: #fff; }

  /* Black topbar + torn-paper layer positioned as a divider. */
  header {
    height: 120px !important;
    background-color: #080808 !important;
    background-image: none !important;
    overflow: visible !important;
  }

  header::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 195px;
    background-color: transparent;
    background-image: url('/assets/papelrasgado.png');
    background-repeat: no-repeat;
    background-position: center -80px;
    background-size: 100% auto;
    pointer-events: none;
  }

  @media (max-width: 800px) {
    header {
      height: 100px !important;
      padding: 14px 5vw 0 !important;
    }

    header::after {
      height: 165px;
      background-position: center -60px;
      background-size: 100% auto;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
`
