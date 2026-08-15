import { useEffect, useState } from "react";
import styled from "styled-components";

const A = "/assets/";

export function SiteHeader({ onNavigate }: { onNavigate?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => { setMenuOpen(false); onNavigate?.(); };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);

  return (
    <Header>
      <HeaderPaper src={`${A}papelrasgado.png`} alt="" aria-hidden="true" fetchPriority="high" decoding="async" />
      <HeaderContent>
        <Logo href="#top" onClick={closeMenu} aria-label="One Frame">
          <img src={`${A}logo-oneframe-horizontal.svg`} alt="One Frame" decoding="async" />
        </Logo>

        <Nav id="site-navigation" $open={menuOpen} aria-label="Navegação principal">
          <a href="#sobre" onClick={closeMenu}>sobre nós</a>
          <a href="#servicos" onClick={closeMenu}>serviços</a>
          <a href="#sessions" onClick={closeMenu}>one sessions</a>
          <a href="#projetos" onClick={closeMenu}>trabalhos</a>
          <MobileContact href="#contato" onClick={closeMenu}>FALE CONOSCO</MobileContact>
        </Nav>

        {menuOpen && <MenuBackdrop type="button" aria-label="Fechar menu" onClick={closeMenu} />}

        <HeaderContact href="#contato" onClick={closeMenu}>FALE CONOSCO</HeaderContact>
        <MenuButton
          type="button"
          onClick={() => setMenuOpen(value => !value)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
        ><i /><i /></MenuButton>
      </HeaderContent>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  z-index: 100;
  inset: 0 0 auto;
  width: 100%;
  height: 100px;
  background: var(--color-red);
  overflow: visible;

  @media (max-width: 800px) { height: 75px; }
`;

const HeaderPaper = styled.img`
  position: absolute;
  z-index: 1;
  top: -110px;
  left: 0;
  width: 100%;
  height: 320px;
  object-fit: fill;
  object-position: center bottom;
  display: block;
  pointer-events: none;
  user-select: none;
  mix-blend-mode: multiply;

  @media (max-width: 800px) {
    top: -26px;
    height: 78px;
    object-fit: cover;
  }
`;

const HeaderContent = styled.div`
  position: relative; z-index: 10; width: 100%; height: 100%; padding: 0 4vw 20px;
  display: flex; align-items: center; justify-content: space-between;
  @media (max-width: 800px) { height: 58px; padding: 0 5vw; }
`;

const Logo = styled.a`
  position: relative; z-index: 30; display: block; width: 150px; flex: 0 0 auto;
  img { display: block; width: 100%; height: auto; filter: invert(1); }
  @media (max-width: 800px) { width: 108px; }
`;

const Nav = styled.nav<{ $open: boolean }>`
  position: relative; z-index: 30; display: flex; align-items: center; gap: 38px;
  font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: .1em;
  a { color: var(--color-black); text-shadow: 2px 2px 0 var(--color-white); transition: color .2s ease, text-shadow .2s ease; }
  a:hover { color: var(--color-white); text-shadow: 2px 2px 0 var(--color-black); }
  @media (max-width: 800px) {
    position: fixed; z-index: 40; top: 75px; left: 0; right: 0; padding: 30px 7vw 34px;
    background: var(--color-black); border-top: 2px solid var(--color-red);
    display: ${props => props.$open ? "flex" : "none"}; flex-direction: column; align-items: stretch; gap: 0; font-size: 14px;
    box-shadow: 0 12px 25px rgba(0,0,0,.22);
    a { padding: 15px 0; border-bottom: 1px solid rgba(255,255,255,.15); color: var(--color-white); text-shadow: none; }
    a:hover { color: var(--color-red); text-shadow: none; }
  }
`;

const MobileContact = styled.a`
  display: none;
  @media (max-width: 800px) {
    display: inline-flex; align-items: center; justify-content: center; margin-top: 20px; padding: 12px 18px !important;
    border: 2px solid var(--color-white); border-radius: 999px; background: var(--color-red); color: var(--color-white) !important;
    text-align: center; font-size: 11px; letter-spacing: .08em; box-shadow: 3px 3px 0 var(--color-white);
  }
`;

const MenuBackdrop = styled.button`
  position: fixed; z-index: 35; top: 75px; inset-inline: 0; bottom: 0; width: 100%; height: calc(100dvh - 75px);
  padding: 0; border: 0; background: rgba(0,0,0,.18); cursor: default;
  @media (min-width: 801px) { display: none; }
`;

const HeaderContact = styled.a`
  position: relative; z-index: 30; display: inline-flex; align-items: center; justify-content: center;
  border: 2px solid var(--color-black); border-radius: 999px; padding: 10px 19px;
  background: var(--color-black); color: var(--color-white); font-size: 11px; font-weight: 900; letter-spacing: .08em;
  box-shadow: 4px 4px 0 var(--color-white); transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
  &:hover { transform: translate(-1px,-1px); box-shadow: 6px 6px 0 var(--color-white); background: var(--color-white); color: var(--color-black); }
  @media (max-width: 800px) { display: none; }
`;

const MenuButton = styled.button`
  display: none; position: relative; z-index: 50; background: none; border: 0; padding: 10px;
  @media (max-width: 800px) { display: grid; gap: 5px; }
  i { display: block; width: 26px; height: 3px; background: var(--color-white); }
`;
