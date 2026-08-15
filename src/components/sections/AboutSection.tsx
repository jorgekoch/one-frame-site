import styled from "styled-components";

const A = "/assets/";

export function AboutSection() {
  return (
    <About id="sobre">
      <AboutGraphic>
        <img
          src={`${A}logo-oneframe-perfil.png`}
          alt="One Frame"
          loading="lazy"
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
          Nada de vídeos genéricos, nada de conteúdo sem alma. Aqui a gente cria
          material rápido, com personalidade, estética forte e aquela energia
          que faz o público parar de rolar o feed.
        </p>
        <p>
          Nosso trabalho é simples: fazer sua marca aparecer do jeito certo, na
          hora certa.
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
  min-height: 600px;
  background: var(--color-red);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    min-height: 600px;
    object-fit: cover;
    display: block;
  }
  @media (max-width: 800px) {
    min-height: auto;
    img {
      min-height: 0;
      aspect-ratio: 1 / 1;
    }
  }
`;

const AboutCopy = styled.div`
  padding: 100px 8vw 90px;
  max-width: 800px;
  h2 {
    font: clamp(55px, 6vw, 90px)/0.82 var(--font-display);
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
