import { useEffect, useState } from "react";
import styled from "styled-components";

const A = "/assets/";
const BLACK = "#080808";
const RED = "#ef1b14";

type SiteHeaderProps = {
  onNavigate?: () => void;
};

export function SiteHeader({ onNavigate }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
    onNavigate?.();
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) =>
      event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Header>
      <HeaderPaper src={`${A}papelrasgado.png`} alt="" aria-hidden="true" />
      <HeaderContent>
        <Logo href="#top" onClick={closeMenu} aria-label="One Frame">
          <img
            className="logo-mark"
            src={`${A}logo%20transparente.png`}
            alt=""
            aria-hidden="true"
          />
          <span>
            ONE
            <br />
            FRAME
          </span>
        </Logo>
        <Nav $open={menuOpen}>
          <a href="#sobre" onClick={closeMenu}>
            sobre nós
          </a>
          <a href="#servicos" onClick={closeMenu}>
            serviços
          </a>
          <a href="#sessions" onClick={closeMenu}>
            one sessions
          </a>
          <a href="#projetos" onClick={closeMenu}>
            trabalhos
          </a>
        </Nav>
        <HeaderContact href="#contato" onClick={closeMenu}>
          FALE CONOSCO
        </HeaderContact>
        <MenuButton
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <i />
          <i />
        </MenuButton>
      </HeaderContent>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: transparent;
  overflow: visible;
`;

const HeaderPaper = styled.img`
  position: absolute;
  z-index: 1;
  top: clamp(-260px, -14vw, -80px);
  left: 0;
  width: 100%;
  height: auto;
  display: block;
  pointer-events: none;
  user-select: none;
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  padding: 0 4vw 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 22px;
  line-height: 0.78;
  letter-spacing: -0.05em;
  color: #fff;
  position: relative;
  z-index: 3;

  img.logo-mark {
    display: block;
    width: 46px;
    height: 46px;
    object-fit: contain;
  }

  @media (max-width: 800px) {
    gap: 8px;
    font-size: 18px;
    img.logo-mark {
      width: 38px;
      height: 38px;
    }
  }
`;

const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 38px;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 3;

  a {
    color: #fff;
    text-shadow: 2px 2px 0 ${RED};
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${RED};
    text-shadow: 2px 2px 0 ${BLACK};
  }

  @media (max-width: 800px) {
    position: fixed;
    top: 75px;
    left: 0;
    right: 0;
    padding: 28px 5vw;
    background: ${BLACK};
    display: ${(props) => (props.$open ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    font-size: 14px;
  }
`;

const HeaderContact = styled.a`
  position: relative;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 999px;
  padding: 10px 19px;
  color: #fff;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.08em;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #fff;
    color: ${BLACK};
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  position: relative;
  z-index: 3;
  background: none;
  border: 0;
  padding: 10px;

  @media (max-width: 800px) {
    display: grid;
    gap: 5px;
  }

  i {
    display: block;
    width: 26px;
    height: 3px;
    background: #fff;
  }
`;
