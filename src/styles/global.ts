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

  /* Header: use the supplied torn-paper reference as the lower edge.
     The menu and logo stay above the image so the paper never covers them. */
  header::after {
    content: '' !important;
    position: absolute !important;
    left: 0 !important;
    right: 0 !important;
    bottom: -43px !important;
    height: 88px !important;
    background: url('/assets/papelrasgado.jpg') center bottom / 100% 100% no-repeat !important;
    pointer-events: none !important;
    z-index: 1 !important;
  }

  header > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 800px) {
    header::after {
      bottom: -36px !important;
      height: 72px !important;
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
