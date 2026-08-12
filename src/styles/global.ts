import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root { color-scheme: dark; font-family: Arial, Helvetica, sans-serif; background:#050505; color:#f4f4f1; font-synthesis:none; text-rendering:optimizeLegibility; }
  * { box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { margin:0; min-width:320px; background:#050505; }
  body,button,input,textarea { font-family:inherit; }
  button,a { -webkit-tap-highlight-color:transparent; }
  a { color:inherit; text-decoration:none; }
  img { display:block; max-width:100%; }
  ::selection { background:#f4f4f1; color:#050505; }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes drift { 0%,100%{transform:translate3d(0,0,0) scale(1.04)} 50%{transform:translate3d(-2%,1%,0) scale(1.08)} }
  @keyframes float { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-10px) rotate(2deg)} }
`
