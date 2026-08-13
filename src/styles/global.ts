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

  /*
   * HEADER REBUILD
   *
   * The supplied papelrasgado.png is used directly as the header
   * background. There is no pseudo-element, no second image layer
   * and no fixed overlay. The black area is the topbar and the torn
   * white edge of the PNG becomes the divider before the hero.
   */
  header {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    height: 210px !important;
    min-height: 210px !important;
    padding: 18px 4vw 0 !important;
    display: flex !important;
    align-items: flex-start !important;
    justify-content: space-between !important;
    background-color: #080808 !important;
    background-image: url('/assets/papelrasgado.png') !important;
    background-repeat: no-repeat !important;
    background-position: center top !important;
    background-size: 100% auto !important;
    color: #fff !important;
    overflow: visible !important;
  }

  header > * {
    position: relative !important;
    z-index: 5 !important;
  }

  @media (max-width: 800px) {
    header {
      height: 125px !important;
      min-height: 125px !important;
      padding: 14px 5vw 0 !important;
      background-size: auto 210px !important;
      background-position: center top !important;
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
