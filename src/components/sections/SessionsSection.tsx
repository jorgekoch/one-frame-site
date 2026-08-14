import styled from "styled-components";
import { TextButton } from "../ui/TextButton";

const A = "/assets/";
const XEROX_06 = `${A}251107_LA_ONEFRAME_Tela_Fotocopia06 (2).webp`;
const XEROX_07 = `${A}251107_LA_ONEFRAME_Tela_Fotocopia07 (2).webp`;

export function SessionsSection() {
  return (
    <Sessions id="sessions">
      <SessionVisual>
        <img className="xerox-main" src={XEROX_06} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <img className="xerox-secondary" src={XEROX_07} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className="red-field" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <span className="section-number">04</span>
        <span className="vertical-label">ONE SESSIONS / MOBILE COVERAGE</span>
        <Icon src={`${A}icon-camera.png`} $size={155} $bottom="8%" $left="8%" $invert alt="" aria-hidden="true" decoding="async" />
        <SessionTitle>
          ONE
          <br />
          <b>SESSIONS</b>
        </SessionTitle>
      </SessionVisual>

      <SessionCopy>
        <CopyTexture src={XEROX_07} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <Label>04 / ONE SESSIONS</Label>
        <h2>
          O momento
          <br />
          <em>não espera.</em>
        </h2>
        <p>
          Cobertura mobile de eventos, shows e experiências. Captamos a energia
          do momento e entregamos vídeos rápidos e impactantes para o mesmo dia.
        </p>
        <TextButton href="#contato">
          QUERO UMA ONE SESSION <span>↗</span>
        </TextButton>
        <CopyMeta>
          <span>EVENTOS</span>
          <span>SHOWS</span>
          <span>EXPERIÊNCIAS</span>
        </CopyMeta>
      </SessionCopy>
    </Sessions>
  );
}

const Label = styled.span`
  position: relative;
  z-index: 3;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.62;
`;

const Icon = styled.img<{
  $size: number;
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $invert?: boolean;
}>`
  position: absolute;
  z-index: 5;
  width: ${(p) => p.$size}px;
  height: auto;
  top: ${(p) => p.$top || "auto"};
  right: ${(p) => p.$right || "auto"};
  bottom: ${(p) => p.$bottom || "auto"};
  left: ${(p) => p.$left || "auto"};
  object-fit: contain;
  ${(p) => (p.$invert ? "filter: invert(1);" : "")}
`;

const Sessions = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  min-height: 690px;
  background: var(--color-paper);
  color: var(--color-black);
  overflow: hidden;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const SessionVisual = styled.div`
  position: relative;
  min-height: 690px;
  overflow: hidden;
  isolation: isolate;
  background: var(--color-red);
  border-right: 2px solid var(--color-black);

  .xerox-main,
  .xerox-secondary {
    position: absolute;
    pointer-events: none;
    width: 112%;
    height: 112%;
    object-fit: cover;
    filter: grayscale(1) contrast(1.08) brightness(1.12);
  }

  .xerox-main {
    inset: -6% -5%;
    opacity: 0.34;
    transform: rotate(-4deg) scale(1.06);
    mix-blend-mode: multiply;
  }

  .xerox-secondary {
    right: -24%;
    bottom: -15%;
    width: 78%;
    height: 78%;
    opacity: 0.2;
    transform: rotate(9deg);
    mix-blend-mode: screen;
  }

  .red-field {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: var(--color-red);
    opacity: 0.72;
    mix-blend-mode: multiply;
    pointer-events: none;
  }

  .grain {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background-image: radial-gradient(rgba(255, 255, 255, 0.3) 0.55px, transparent 0.7px);
    background-size: 5px 5px;
    opacity: 0.18;
  }

  @media (max-width: 800px) {
    min-height: 560px;
    border-right: 0;
    border-bottom: 2px solid var(--color-black);
  }
`;

const SessionTitle = styled.div`
  position: absolute;
  z-index: 4;
  left: 8%;
  top: 17%;
  font: clamp(68px, 9vw, 132px) / 0.69 var(--font-display);
  letter-spacing: -0.085em;
  text-transform: uppercase;
  color: var(--color-white);
  transform: rotate(-4deg);
  text-shadow: 5px 5px 0 var(--color-black);

  b {
    color: var(--color-black);
    text-shadow: 2px 2px 0 var(--color-white);
  }
`;

const CopyTexture = styled.img`
  position: absolute;
  z-index: 0;
  width: 440px;
  height: 440px;
  right: -190px;
  top: -105px;
  object-fit: cover;
  opacity: 0.07;
  filter: grayscale(1) contrast(1.15);
  transform: rotate(12deg);
  pointer-events: none;
`;

const SessionCopy = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 95px 8vw 85px;
  background: var(--color-paper);
  overflow: hidden;

  h2 {
    position: relative;
    z-index: 2;
    font: clamp(62px, 7vw, 105px) / 0.78 var(--font-display);
    letter-spacing: -0.07em;
    text-transform: uppercase;
    margin: 22px 0 34px;
  }

  em {
    font-family: var(--font-accent);
    font-weight: 400;
    text-transform: none;
    letter-spacing: -0.07em;
    color: var(--color-red);
  }

  p {
    position: relative;
    z-index: 2;
    max-width: 470px;
    margin: 0 0 32px;
    font-size: 17px;
    line-height: 1.28;
  }

  ${TextButton} {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 800px) {
    padding: 75px 8vw 85px;
  }
`;

const CopyMeta = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 46px;

  span {
    padding: 7px 10px;
    border: 1px solid var(--color-black);
    border-radius: 999px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 0.12em;
  }
`;

