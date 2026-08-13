import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root { color-scheme: light; font-family: Arial, Helvetica, sans-serif; background:#f7f5ef; color:#080808; font-synthesis:none; text-rendering:optimizeLegibility; }
  * { box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { margin:0; min-width:320px; background:#f7f5ef; }
  body,button,input,textarea { font-family:inherit; }
  button,a { -webkit-tap-highlight-color:transparent; }
  a { color:inherit; text-decoration:none; }
  img { display:block; max-width:100%; }
  ::selection { background:#ef1b14; color:#fff; }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }

  /* One Frame — topbar inspired by the supplied reference */
  header {
    height:96px !important;
    padding:8px 3.5vw !important;
    background:#080808 !important;
    color:#fff !important;
    box-shadow:0 1px 0 rgba(255,255,255,.06);
  }

  header::after {
    content:'' !important;
    position:absolute !important;
    left:0 !important;
    right:0 !important;
    bottom:-30px !important;
    height:38px !important;
    background:url('/assets/torn-white-divider.webp') center bottom / 100% 100% no-repeat !important;
    filter:drop-shadow(0 5px 4px rgba(0,0,0,.25));
    pointer-events:none !important;
  }

  header > a:first-child {
    position:relative;
    z-index:2;
    min-width:88px;
  }

  header > a:first-child img {
    width:54px !important;
    height:54px !important;
    object-fit:contain;
    filter:invert(1) !important;
  }

  header > a:first-child span {
    font-size:18px !important;
    line-height:.76 !important;
    letter-spacing:-.07em !important;
  }

  header nav {
    align-items:center !important;
    gap:34px !important;
    margin-left:auto;
    margin-right:30px;
  }

  header nav a {
    color:#fff !important;
    font-size:10px !important;
    font-weight:900 !important;
    letter-spacing:.04em !important;
    text-transform:uppercase !important;
    white-space:nowrap;
    transition:color .18s ease;
  }

  header nav a:hover { color:#ef1b14 !important; }

  header > a:nth-of-type(2) {
    border:0 !important;
    border-radius:0 !important;
    padding:0 !important;
    background:transparent !important;
    color:#fff !important;
    font-size:10px !important;
    font-weight:900 !important;
    letter-spacing:.04em !important;
    text-transform:uppercase !important;
    white-space:nowrap;
  }

  header > a:nth-of-type(2):hover {
    background:transparent !important;
    color:#ef1b14 !important;
  }

  header nav::after {
    content:'◎   ◉';
    color:#fff;
    font-size:22px;
    line-height:1;
    letter-spacing:2px;
    white-space:nowrap;
    margin-left:2px;
  }

  @media(max-width:900px) {
    header { height:82px !important; padding:8px 5vw !important; }
    header::after { bottom:-23px !important; height:31px !important; }
    header nav {
      top:82px !important;
      margin:0;
      padding:28px 5vw !important;
      background:#080808 !important;
    }
    header nav::after { display:none; }
    header > a:nth-of-type(2) { display:none !important; }
  }

  /* Stronger torn-paper treatment — use the supplied artwork for every section break. */
  main > div:nth-of-type(1),
  main > div:nth-of-type(3) {
    height:72px !important;
    background:#f7f5ef url('/assets/torn-black-divider.webp') center / 100% 100% no-repeat !important;
    clip-path:none !important;
  }

  main > div:nth-of-type(2),
  main > div:nth-of-type(4) {
    height:72px !important;
    background:#080808 url('/assets/torn-white-divider.webp') center / 100% 100% no-repeat !important;
    clip-path:none !important;
  }

  /* Add the paper-cut edge to the sections that currently do not have a divider. */
  main > section:nth-of-type(2)::after,
  main > section:nth-of-type(6)::after {
    content:'';
    position:absolute;
    left:0;
    right:0;
    bottom:-1px;
    height:48px;
    pointer-events:none;
    z-index:6;
  }

  main > section:nth-of-type(2)::after {
    background:url('/assets/tear-black.png') center bottom / 100% 100% no-repeat;
  }

  main > section:nth-of-type(6)::after {
    background:url('/assets/tear-white.png') center bottom / 100% 100% no-repeat;
  }

  /* Red contact block gets a real black paper bite at its top edge. */
  main > section:nth-of-type(7)::before {
    content:'';
    position:absolute;
    left:0;
    right:0;
    top:-1px;
    height:50px;
    background:url('/assets/tear-black-middle.png') center top / 100% 100% no-repeat;
    pointer-events:none;
    z-index:6;
  }

  @media(max-width:700px) {
    main > div:nth-of-type(1),
    main > div:nth-of-type(2),
    main > div:nth-of-type(3),
    main > div:nth-of-type(4) {
      height:52px !important;
    }

    main > section:nth-of-type(2)::after,
    main > section:nth-of-type(6)::after {
      height:34px;
    }

    main > section:nth-of-type(7)::before {
      height:38px;
    }
  }

  @media(prefers-reduced-motion:no-preference){html{scroll-behavior:smooth}}
`
