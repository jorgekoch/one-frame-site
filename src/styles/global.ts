import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root { color-scheme: dark; font-family: Arial, Helvetica, sans-serif; background:#080808; color:#fff; font-synthesis:none; text-rendering:optimizeLegibility; }
  * { box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { margin:0; min-width:320px; background:#080808; }
  body,button,input,textarea { font-family:inherit; }
  button,a { -webkit-tap-highlight-color:transparent; }
  a { color:inherit; text-decoration:none; }
  img { display:block; max-width:100%; }
  ::selection { background:#ef1b14; color:#fff; }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @media(prefers-reduced-motion:no-preference){html{scroll-behavior:smooth}}
`
