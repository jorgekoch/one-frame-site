import styled from "styled-components";
import type { Project } from "../data/projects";
import type { Service } from "../data/services";
import type { Client } from "../data/clients";
import { ClientsSection } from "./ClientsSection";
import { ProjectsSection } from "./ProjectsSection";
import { TextButton } from "./TextButton";
import { Torn } from "./SectionChrome";

const A = "/assets/";

type PageSectionsProps = {
  projects: Project[];
  services: readonly Service[];
  clients: Client[];
};

export function PageSections({
  projects,
  services,
  clients,
}: PageSectionsProps) {
  return (
    <>
      <About id="sobre">
        <AboutGraphic>
          <img
            className="texture"
            src={`${A}lines-01.webp`}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />

          <Icon
            src={`${A}icon-headphones.png`}
            $size={72}
            $top="7%"
            $left="7%"
            alt=""
            aria-hidden="true"
            decoding="async"
          />

          <Icon
            src={`${A}icon-dots.png`}
            $size={55}
            $top="15%"
            $right="5%"
            alt=""
            aria-hidden="true"
            decoding="async"
          />

          <AboutMark>
            ONE
            <br />
            <span>FRA</span>
            <br />
            ME
          </AboutMark>

          <Icon
            src={`${A}icon-fire.png`}
            $size={78}
            $bottom="8%"
            $left="6%"
            alt=""
            aria-hidden="true"
            decoding="async"
          />
        </AboutGraphic>

        <AboutCopy>
          <Label>02 / SOBRE NÓS</Label>

          <h2>
            Somos a produtora
            <br />
            mobile que decidiu
            <br />
            <em>fazer diferente.</em>
          </h2>

          <p>
            Nada de vídeos genéricos, nada de conteúdo sem alma. Aqui a gente
            cria material rápido, com personalidade, estética forte e aquela
            energia que faz o público parar de rolar o feed.
          </p>

          <p>
            Nosso trabalho é simples: fazer sua marca aparecer do jeito certo,
            na hora certa.
          </p>

          <p>
            Se você quer conteúdo que prende atenção, gera presença e faz sua
            marca parecer viva, é aqui que começa.
          </p>

          <TextLink href="#contato">
            Bora dar um upgrade na forma como o mundo vê você? <span>↗</span>
          </TextLink>
        </AboutCopy>
      </About>

      <Torn tone="paper" />

      <Services id="servicos">
        <ServicesHead>
          <Icon
            src={`${A}icon-sparks.png`}
            $size={62}
            $top="-20px"
            $left="3%"
            alt=""
            aria-hidden="true"
            decoding="async"
          />

          <Icon
            src={`${A}icon-question.png`}
            $size={48}
            $top="42px"
            $right="5%"
            alt=""
            aria-hidden="true"
            decoding="async"
          />

          <Label>03 / SERVIÇOS</Label>

          <h2>
            O QUE VOCÊ
            <br />
            <em>PROCURA?</em>
          </h2>
        </ServicesHead>

        <ServiceGrid>
          {services.map(([number, title, description, icon]) => (
            <ServiceCard key={number}>
              <div className="service-top">
                <span>{number}</span>

                <img
                  src={`${A}${icon}`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>

              <span className="plus">+</span>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </Services>

      <Torn tone="black" />

      <Sessions id="sessions">
        <SessionVisual>
          <img
            src={`${A}lines-03.webp`}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />

          <div className="red-overlay" />

          <Icon
            src={`${A}icon-camera.png`}
            $size={145}
            $bottom="10%"
            $left="9%"
            $invert
            alt=""
            aria-hidden="true"
            decoding="async"
          />

          <SessionTitle>
            ONE
            <br />
            <b>SESSIONS</b>
          </SessionTitle>

          <span className="number">04</span>
        </SessionVisual>

        <SessionCopy>
          <Label>04 / ONE SESSIONS</Label>

          <h2>
            O momento
            <br />
            <em>não espera.</em>
          </h2>

          <p>
            Cobertura mobile de eventos, shows e experiências. Captamos a
            energia do momento e entregamos vídeos rápidos e impactantes para o
            mesmo dia.
          </p>

          <TextButton href="#contato">
            QUERO UMA ONE SESSION <span>↗</span>
          </TextButton>
        </SessionCopy>
      </Sessions>

      <Torn tone="paper" />

      <ClientsSection clients={clients} />

      <ProjectsSection projects={projects} />

      <Contact id="contato">
        <Icon
          src={`${A}icon-shaka.png`}
          $size={100}
          $top="11%"
          $left="5%"
          alt=""
          aria-hidden="true"
          decoding="async"
        />

        <Icon
          src={`${A}icon-exclamation.png`}
          $size={70}
          $top="9%"
          $right="8%"
          alt=""
          aria-hidden="true"
          decoding="async"
        />

        <Icon
          src={`${A}icon-music.png`}
          $size={80}
          $bottom="10%"
          $right="8%"
          alt=""
          aria-hidden="true"
          decoding="async"
        />

        <Label>07 / FALE CONOSCO</Label>

        <h2>
          VAMOS FAZER
          <br />
          <em>ACONTECER?</em>
        </h2>

        <p>
          Tem uma ideia, evento, marca ou história para colocar em movimento?
        </p>

        <TextButton href="mailto:hello@oneframe.com.br">
          FALE COM A GENTE <span>↗</span>
        </TextButton>
      </Contact>

      <Torn tone="black" />
    </>
  );
}

const Label = styled.span`
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.65;
`;

const TextLink = styled.a`
  display: block;
  margin-top: 35px;
  font-weight: 900;
  font-size: 13px;
  text-decoration: underline;

  span {
    margin-left: 8px;
    color: var(--color-red);
  }
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
  z-index: 4;
  width: ${(props) => props.$size}px;
  height: auto;
  top: ${(props) => props.$top || "auto"};
  right: ${(props) => props.$right || "auto"};
  bottom: ${(props) => props.$bottom || "auto"};
  left: ${(props) => props.$left || "auto"};
  object-fit: contain;

  ${(props) => (props.$invert ? "filter: invert(1);" : "")}
`;

const About = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  min-height: 720px;
  background: var(--color-paper);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const AboutGraphic = styled.div`
  position: relative;
  min-height: 600px;
  background: var(--color-red);
  overflow: hidden;

  .texture {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.2;
    mix-blend-mode: multiply;
  }
`;

const AboutMark = styled.div`
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-5deg);

  font: clamp(90px, 12vw, 180px) / 0.65 var(--font-display);

  text-align: center;
  color: var(--color-white);
  letter-spacing: -0.09em;
  text-shadow: 4px 4px 0 var(--color-black);

  span {
    color: var(--color-black);
  }
`;

const AboutCopy = styled.div`
  padding: 100px 8vw 90px;
  max-width: 800px;

  h2 {
    font: clamp(55px, 6vw, 90px) / 0.82 var(--font-display);
    letter-spacing: -0.06em;
    text-transform: uppercase;
    margin: 22px 0 38px;
  }

  em {
    font-family: var(--font-accent);
    font-weight: 400;
    text-transform: none;
    letter-spacing: -0.08em;
    color: var(--color-red);
  }

  p {
    font-size: 16px;
    line-height: 1.25;
    max-width: 560px;
  }
`;

const Services = styled.section`
  position: relative;
  background: var(--color-paper);
  padding: 110px 5vw 125px;
`;

const ServicesHead = styled.div`
  position: relative;
  text-align: center;
  margin: 0 auto 65px;

  h2 {
    font: clamp(62px, 8vw, 115px) / 0.78 var(--font-display);
    letter-spacing: -0.07em;
    margin: 20px 0;
    text-transform: uppercase;
  }

  em {
    font-family: var(--font-accent);
    font-weight: 400;
    text-transform: none;
    color: var(--color-red);
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  max-width: 1250px;
  margin: auto;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.article`
  position: relative;
  background: var(--color-white);
  min-height: 310px;
  padding: 22px;

  border: 2px solid var(--color-black);
  border-radius: 10px;

  box-shadow: 6px 7px 0 var(--color-red);

  overflow: hidden;

  .service-top {
    display: flex;
    justify-content: space-between;
    align-items: start;
    color: var(--color-red);
    font-size: 11px;
    font-weight: 900;
  }

  .service-top img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }

  h3 {
    font: 35px / 0.85 var(--font-display);
    text-transform: uppercase;
    letter-spacing: -0.05em;
    margin: 55px 0 20px;
  }

  p {
    font-size: 12px;
    line-height: 1.25;
    max-width: 260px;
  }

  .plus {
    position: absolute;
    right: 20px;
    bottom: 14px;
    color: var(--color-red);
    font-size: 27px;
  }
`;

const Sessions = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--color-black);
  color: var(--color-white);
  min-height: 650px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const SessionVisual = styled.div`
  position: relative;
  min-height: 650px;
  overflow: hidden;
  background: var(--color-red);

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.68;
    filter: contrast(1.15);
  }

  .red-overlay {
    position: absolute;
    inset: 0;
    background: var(--color-red);
    mix-blend-mode: multiply;
    opacity: 0.65;
  }
`;

const SessionTitle = styled.span`
  position: absolute;
  z-index: 3;
  left: 10%;
  top: 15%;

  font: clamp(60px, 9vw, 130px) / 0.7 var(--font-display);

  letter-spacing: -0.08em;
  color: var(--color-white);
  transform: rotate(-4deg);
  text-shadow: 4px 4px 0 var(--color-black);

  b {
    color: var(--color-black);
  }
`;

const SessionCopy = styled.div`
  padding: 100px 9vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--color-black);

  h2 {
    font: clamp(65px, 7vw, 105px) / 0.78 var(--font-display);
    letter-spacing: -0.07em;
    text-transform: uppercase;
    margin: 22px 0 35px;
  }

  em {
    font-family: var(--font-accent);
    font-weight: 400;
    text-transform: none;
    color: var(--color-red);
  }

  p {
    font-size: 17px;
    line-height: 1.25;
    max-width: 480px;
    margin: 0 0 35px;
  }
`;

const Contact = styled.section`
  position: relative;
  min-height: 700px;

  background: var(--color-red);
  color: var(--color-black);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: 100px 5vw;

  overflow: hidden;

  h2 {
    font: clamp(78px, 11vw, 160px) / 0.72 var(--font-display);
    letter-spacing: -0.08em;
    margin: 22px 0 30px;
    text-transform: uppercase;
  }

  em {
    font-family: var(--font-accent);
    font-weight: 400;
    text-transform: none;
    color: var(--color-white);
  }

  p {
    max-width: 450px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;
