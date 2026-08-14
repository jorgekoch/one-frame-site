import { useEffect, useState } from "react";
import styled from "styled-components";

const A = "/assets/";

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
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 801px)");

    const handleChange = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <Header>
      {/* Papel para desktop */}
      <HeaderPaper
        src={`${A}papelrasgado.png`}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
      />

      {/* Papel específico para mobile */}
      <MobileHeaderPaper aria-hidden="true" />

      <HeaderContent>
        <Logo href="#top" onClick={closeMenu} aria-label="One Frame">
          <img
            className="logo-mark"
            src={`${A}logo%20transparente.png`}
            alt=""
            aria-hidden="true"
            decoding="async"
          />

          <span>
            ONE
            <br />
            FRAME
          </span>
        </Logo>

        <Nav
          id="site-navigation"
          $open={menuOpen}
          aria-label="Navegação principal"
        >
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

          <MobileContact href="#contato" onClick={closeMenu}>
            FALE CONOSCO
          </MobileContact>
        </Nav>

        {menuOpen && (
          <MenuBackdrop
            type="button"
            aria-label="Fechar menu"
            onClick={closeMenu}
          />
        )}

        <HeaderContact href="#contato" onClick={closeMenu}>
          FALE CONOSCO
        </HeaderContact>

        <MenuButton
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
        >
          <i />
          <i />
        </MenuButton>
      </HeaderContent>
    </Header>
  );
}

/* =========================================================
   HEADER
========================================================= */

const Header = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  width: 100%;
  height: 100px;

  background: transparent;

  overflow: visible;

  @media (max-width: 800px) {
    height: 75px;
  }
`;

/* =========================================================
   PAPEL — DESKTOP
========================================================= */

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

  @media (max-width: 800px) {
    top: -26px;
    left: 0;

    width: 100%;
    height: 78px;

    object-fit: cover;
    object-position: center bottom;
  }
`;

/* =========================================================
   PAPEL — MOBILE
========================================================= */

const MobileHeaderPaper = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;

    position: absolute;
    z-index: 1;

    top: -26px;
    left: 0;

    width: 100%;
    height: 78px;

    overflow: hidden;

    pointer-events: none;
    user-select: none;

    background-image: url("/assets/papelrasgado.png");
    background-repeat: no-repeat;

    /*
      Aumentamos bastante a altura da imagem
      para deixar a faixa preta mais alta.
    */
    background-size: 100% 210px;

    /*
      Subimos a imagem para esconder a área
      clara original e manter o papel preto
      atrás do logo e do menu.
    */
    background-position: center -48px;
  }
`;

/* =========================================================
   CONTEÚDO DO HEADER
========================================================= */

const HeaderContent = styled.div`
  position: relative;
  z-index: 10;

  width: 100%;
  height: 100%;

  padding: 0 4vw 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    /*
      O header continua tendo 75px,
      mas os elementos ficam concentrados
      na parte superior, acompanhando
      a faixa preta do papel.
    */
    height: 58px;

    padding: 0 5vw;

    align-items: center;
  }
`;

/* =========================================================
   LOGO
========================================================= */

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  font-family: var(--font-display);
  font-size: 22px;
  line-height: 0.78;
  letter-spacing: -0.05em;

  color: var(--color-white);
  text-shadow: 2px 2px 0 var(--color-red);

  position: relative;
  z-index: 30;

  img.logo-mark {
    display: block;
    width: 46px;
    height: 46px;
    object-fit: contain;
  }

  @media (max-width: 800px) {
    gap: 7px;
    font-size: 17px;

    img.logo-mark {
      width: 36px;
      height: 36px;
    }
  }
`;

/* =========================================================
   NAVEGAÇÃO
========================================================= */

const Nav = styled.nav<{ $open: boolean }>`
  display: flex;

  align-items: center;

  gap: 38px;

  font-size: 12px;
  font-weight: 900;

  text-transform: uppercase;

  letter-spacing: 0.1em;

  position: relative;

  z-index: 30;

  a {
    color: var(--color-white);

    text-shadow: 2px 2px 0 var(--color-red);

    transition:
      color 0.2s ease,
      text-shadow 0.2s ease;
  }

  a:hover {
    color: var(--color-red);

    text-shadow: 2px 2px 0 var(--color-black);
  }

  a:focus-visible {
    outline: 2px solid var(--color-white);

    outline-offset: 5px;
  }

  @media (max-width: 800px) {
    position: fixed;

    z-index: 40;

    top: 75px;
    left: 0;
    right: 0;

    min-height: auto;

    padding: 30px 7vw 34px;

    background: var(--color-black);

    border-top: 2px solid var(--color-red);

    display: ${(props) => (props.$open ? "flex" : "none")};

    flex-direction: column;

    align-items: stretch;

    gap: 0;

    font-size: 14px;

    overflow-y: auto;

    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.22);

    a {
      padding: 15px 0;

      border-bottom: 1px solid rgba(255, 255, 255, 0.15);

      text-shadow: none;
    }
  }
`;

/* =========================================================
   BOTÃO DE CONTATO MOBILE
========================================================= */

const MobileContact = styled.a`
  display: none;

  @media (max-width: 800px) {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    margin-top: 20px;

    padding: 12px 18px !important;

    border: 2px solid var(--color-white);

    border-radius: 999px;

    color: var(--color-white);

    text-align: center;

    font-size: 11px;

    letter-spacing: 0.08em;

    border-bottom: 2px solid var(--color-white) !important;
  }
`;

/* =========================================================
   BACKDROP DO MENU
========================================================= */

const MenuBackdrop = styled.button`
  position: fixed;

  z-index: 35;

  top: 75px;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: calc(100dvh - 75px);

  padding: 0;

  border: 0;

  background: rgba(0, 0, 0, 0.18);

  cursor: default;

  @media (min-width: 801px) {
    display: none;
  }
`;

/* =========================================================
   CONTATO DESKTOP
========================================================= */

const HeaderContact = styled.a`
  position: relative;
  z-index: 30;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 2px solid var(--color-white);
  border-radius: 999px;

  padding: 10px 19px;

  color: var(--color-white);

  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.08em;

  box-shadow: 3px 3px 0 var(--color-red);

  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: var(--color-white);
    color: var(--color-black);

    box-shadow: 4px 4px 0 var(--color-red);
    transform: translate(-1px, -1px);
  }

  &:focus-visible {
    outline: 2px solid var(--color-white);
    outline-offset: 5px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

/* =========================================================
   MENU SANDUÍCHE
========================================================= */

const MenuButton = styled.button`
  display: none;

  position: relative;

  z-index: 50;

  background: none;

  border: 0;

  padding: 10px;

  &:focus-visible {
    outline: 2px solid var(--color-white);

    outline-offset: 3px;
  }

  @media (max-width: 800px) {
    display: grid;

    gap: 5px;
  }

  i {
    display: block;

    width: 26px;
    height: 3px;

    background: var(--color-white);

    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
  }
`;
