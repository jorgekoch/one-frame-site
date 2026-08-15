import styled from "styled-components";
import { TextButton } from "../ui/TextButton";

const A = "/assets/";

export function SessionsSection() {
  return (
    <Sessions id="sessions">
      <Poster>
        <PosterTitle>
          ONE
          <br />
          <b>SESSIONS</b>
        </PosterTitle>
        <PosterAccent>AO VIVO</PosterAccent>
        <Camera src={`${A}icon-camera.png`} alt="" aria-hidden="true" decoding="async" />
        <PosterMark>04</PosterMark>
      </Poster>

      <SessionCopy>
        <Label>04 / ONE SESSIONS</Label>
        <h2>
          O momento
          <br />
          <em>não espera.</em>
        </h2>
        <p>
          Eventos, shows e experiências registrados enquanto tudo acontece.
          Conteúdo rápido, vertical e pronto para entrar no feed no mesmo dia.
        </p>
        <SessionBottom>
          <TextButton href="#contato">
            QUERO UMA ONE SESSION <span>↗</span>
          </TextButton>
          <Meta>
            <span>EVENTOS</span>
            <span>SHOWS</span>
            <span>EXPERIÊNCIAS</span>
          </Meta>
        </SessionBottom>
        <ContentNote>MOBILE CONTENT / REAL TIME</ContentNote>
      </SessionCopy>

      <SessionFooter>
        <span>CAPTAR</span>
        <i />
        <span>EDITAR</span>
        <i />
        <span>PUBLICAR</span>
        <i />
        <span>NO MESMO DIA</span>
      </SessionFooter>
    </Sessions>
  );
}

const Sessions = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  grid-template-rows: minmax(650px, 1fr) auto;
  min-height: 790px;
  background: var(--color-paper);
  color: var(--color-black);
  overflow: hidden;
  border-top: 2px solid var(--color-black);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
`;

const Poster = styled.div`
  position: relative;
  min-height: 650px;
  overflow: hidden;
  background: var(--color-red);
  isolation: isolate;
  border-right: 2px solid var(--color-black);
`;

const PosterTitle = styled.div`
  position: absolute;
  z-index: 5;
  left: 7%;
  top: 8%;
  font: clamp(76px, 10vw, 148px) / 0.68 var(--font-display);
  letter-spacing: -0.09em;
  text-transform: uppercase;
  color: var(--color-white);
  transform: rotate(-3deg);
  text-shadow: 5px 5px 0 var(--color-black);

  b {
    color: var(--color-black);
    text-shadow: 2px 2px 0 var(--color-white);
  }
`;

const PosterAccent = styled.span`
  position: absolute;
  z-index: 6;
  top: 9%;
  right: 7%;
  padding: 7px 11px;
  border: 2px solid var(--color-black);
  border-radius: 999px;
  background: var(--color-paper);
  color: var(--color-black);
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.16em;
  transform: rotate(5deg);
`;

const Camera = styled.img`
  position: absolute;
  z-index: 7;
  width: 105px;
  left: 7%;
  bottom: 7%;
  filter: invert(1);
  transform: rotate(-8deg);
`;

const PosterMark = styled.span`
  position: absolute;
  z-index: 7;
  right: 7%;
  bottom: 6%;
  font: 100px / 0.8 var(--font-display);
  letter-spacing: -0.08em;
  color: var(--color-white);
  opacity: 0.9;
`;

const Label = styled.span`
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-red);
`;

const SessionCopy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 85px 8vw 70px;
  background: var(--color-paper);
  position: relative;

  h2 {
    position: relative;
    z-index: 1;
    margin: 20px 0 32px;
    font: clamp(65px, 7vw, 108px) / 0.76 var(--font-display);
    letter-spacing: -0.075em;
    text-transform: uppercase;
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
    z-index: 1;
    max-width: 470px;
    margin: 0 0 34px;
    font-size: 17px;
    line-height: 1.3;
  }

  @media (max-width: 800px) {
    padding: 70px 8vw 65px;
  }
`;

const SessionBottom = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;

  span {
    padding: 7px 9px;
    border: 1px solid var(--color-black);
    border-radius: 999px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 0.1em;
  }
`;

const ContentNote = styled.span`
  position: absolute;
  right: 8vw;
  bottom: 26px;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.45;

  @media (max-width: 800px) {
    position: static;
    margin-top: 30px;
  }
`;

const SessionFooter = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 45px;
  padding: 0 3.5vw;
  border-top: 2px solid var(--color-black);
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.15em;

  i {
    width: 34px;
    height: 1px;
    background: var(--color-black);
  }

  span:last-child {
    color: var(--color-red);
  }

  @media (max-width: 800px) {
    flex-wrap: wrap;
    gap: 10px;
    padding: 12px 5vw;
  }
`;
