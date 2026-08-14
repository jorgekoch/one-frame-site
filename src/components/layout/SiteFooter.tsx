import styled from "styled-components";

export function SiteFooter() {
  return (
    <Footer>
      <div>
        <b>ONE<br />FRAME</b>
        <span>Studio Mobile onde criamos vídeos<br />que geram presença real.</span>
      </div>
      <nav>
        <a href="#sobre">sobre</a>
        <a href="#servicos">serviços</a>
        <a href="#projetos">trabalhos</a>
        <a href="#contato">contato</a>
      </nav>
      <small>© {new Date().getFullYear()} ONE FRAME<br />Curitiba — Brasil</small>
    </Footer>
  );
}

const Footer = styled.footer`
  background: var(--color-black);
  color: var(--color-white);
  padding: 55px 5vw 25px;
  display: grid;
  grid-template-columns: 1.5fr 1fr auto;
  gap: 40px;
  b { font: 38px/0.7 var(--font-display); }
  span { display: block; margin-top: 20px; font-size: 11px; line-height: 1.3; }
  nav { display: flex; flex-direction: column; gap: 10px; text-transform: uppercase; font-size: 10px; font-weight: 700; }
  nav a { transition: color 0.2s ease; }
  nav a:hover { color: var(--color-red); }
  nav a:focus-visible { outline: 2px solid var(--color-white); outline-offset: 4px; }
  small { font-size: 9px; line-height: 1.5; text-align: right; }
  @media (max-width: 700px) { grid-template-columns: 1fr; small { text-align: left; } }
`;
