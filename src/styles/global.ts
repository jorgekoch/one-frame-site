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

  header {
    height: 154px !important;
    background-color: #080808 !important;
    background-image: url('/assets/papelrasgado-topbar.svg') !important;
    background-repeat: no-repeat !important;
    background-position: center -30px !important;
    background-size: 100% auto !important;
    overflow: visible !important;
  }

  @media (max-width: 800px) {
    header {
      height: 112px !important;
      background-size: auto 142px !important;
      background-position: center -18px !important;
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
