import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{font-family:Arial,Helvetica,sans-serif;color:#080808;background:#f5f1e8;font-synthesis:none;text-rendering:optimizeLegibility}
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;min-width:320px;background:#f5f1e8}
  body,button,input,textarea{font-family:inherit}
  button,a{-webkit-tap-highlight-color:transparent}
  a{color:inherit;text-decoration:none}
  img{display:block;max-width:100%}
  ::selection{background:#ed1c16;color:#fff}
`
