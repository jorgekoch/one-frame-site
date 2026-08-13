import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
    font-family: Arial, Helvetica, sans-serif;
    background: #f7f5ef;
    color: #080808;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; min-width: 320px; background: #f7f5ef; }
  body, button, input, textarea { font-family: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  a { color: inherit; text-decoration: none; }
  img { display: block; max-width: 100%; }
  ::selection { background: #ef1b14; color: #fff; }

  /* ONE FRAME — topbar based directly on the supplied reference. */
  header {
    height: 104px !important;
    padding: 10px 4vw !important;
    background:
      radial-gradient(circle at 18% 28%, rgba(255,255,255,.055) 0 1px, transparent 1.5px),
      radial-gradient(circle at 73% 64%, rgba(255,255,255,.035) 0 1px, transparent 1.5px),
      radial-gradient(circle at 45% 82%, rgba(255,255,255,.025) 0 1px, transparent 1.5px),
      #080808 !important;
    background-size: 7px 7px, 11px 11px, 13px 13px, auto;
    color: #fff !important;
    box-shadow: none !important;
    overflow: visible !important;
  }

  header::after {
    content: '' !important;
    position: absolute !important;
    z-index: 20 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: -31px !important;
    height: 42px !important;
    background: url('/assets/torn-white-divider.webp') center bottom / 100% 100% no-repeat !important;
    filter: drop-shadow(0 5px 5px rgba(0,0,0,.28));
    pointer-events: none !important;
  }

  header > a:first-child {
    position: relative;
    z-index: 30;
    flex: 0 0 auto;
    min-width: 76px;
  }

  header > a:first-child img {
    width: 58px !important;
    height: 58px !important;
    object-fit: contain;
    filter: invert(1) !important;
  }

  header > a:first-child span {
    font-family: Impact, 'Arial Black', sans-serif !important;
    font-size: 18px !important;
    line-height: .76 !important;
    letter-spacing: -.08em !important;
  }

  header nav {
    position: relative;
    z-index: 30;
    display: flex !important;
    align-items: center !important;
    gap: clamp(20px, 3vw, 48px) !important;
    margin-left: auto !important;
    margin-right: 0 !important;
  }

  header nav a {
    color: #fff !important;
    font-size: 10px !important;
    font-weight: 900 !important;
    letter-spacing: .055em !important;
    line-height: 1 !important;
    text-transform: uppercase !important;
    white-space: nowrap;
    transition: color .18s ease;
  }

  header nav a:hover { color: #ef1b14 !important; }

  /* The reference uses social icons at the far right, not a contact pill. */
  header > a:nth-of-type(2) { display: none !important; }

  header nav::after {
    content: '◎  f';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-left: 8px;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 23px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0;
    white-space: nowrap;
  }

  @media (max-width: 900px) {
    header {
      height: 84px !important;
      padding: 8px 5vw !important;
    }

    header::after {
      bottom: -24px !important;
      height: 33px !important;
    }

    header nav {
      top: 84px !important;
      margin: 0 !important;
      padding: 28px 5vw !important;
      background: #080808 !important;
    }

    header nav::after { display: none !important; }
    header > a:nth-of-type(2) { display: none !important; }
  }

  @media (prefers-reduced-motion: no-preference) {
    html { scroll-behavior: smooth; }
  }
`
