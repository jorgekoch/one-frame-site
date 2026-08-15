import styled from "styled-components";
import type { Service } from "../../data/services";

const A = "/assets/";

export function ServicesSection({
  services,
}: {
  services: readonly Service[];
}) {
  return (
    <Services id="servicos">
      <ServicesHead>
        <div className="head-copy">
          <Label>03 / SERVIÇOS</Label>
          <h2>
            O QUE VOCÊ
            <br />
            <em>PROCURA?</em>
          </h2>
        </div>
        <Icon
          src={`${A}icon-question.png`}
          $size={50}
          alt=""
          aria-hidden="true"
          decoding="async"
        />
      </ServicesHead>
      <ServiceGrid>
        {services.map(([number, title, description, icon], index) => (
          <ServiceCard key={number} $index={index}>
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
            <span className="plus" aria-hidden="true">
              ↗
            </span>
          </ServiceCard>
        ))}
      </ServiceGrid>
      <FooterNote>
        CONTEÚDO QUE ACONTECE <span>AO VIVO.</span>
      </FooterNote>
    </Services>
  );
}

const Label = styled.span`
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-white);
  opacity: 0.78;
`;

const Icon = styled.img<{ $size: number }>`
  position: absolute;
  z-index: 4;
  width: ${(p) => p.$size}px;
  height: auto;
  right: 2%;
  top: 18%;
  object-fit: contain;
  filter: invert(1);
`;

const Services = styled.section`
  position: relative;
  overflow: hidden;
  background: var(--color-red);
  color: var(--color-white);
  padding: 105px 5vw 90px;
`;

const ServicesHead = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1250px;
  margin: 0 auto 55px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 1vw;

  .head-copy {
    position: relative;
  }

  h2 {
    font: clamp(62px, 8vw, 115px) / 0.76 var(--font-display);
    letter-spacing: -0.07em;
    margin: 18px 0 0;
    text-transform: uppercase;
  }

  em {
    font-family: var(--font-accent);
    font-weight: 400;
    text-transform: none;
    color: var(--color-black);
  }
`;

const ServiceGrid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  max-width: 1250px;
  margin: auto;
  align-items: stretch;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.article<{ $index: number }>`
  position: relative;
  min-height: 325px;
  padding: 20px 20px 24px;
  background: var(--color-white);
  color: var(--color-black);
  border: 2px solid var(--color-black);
  border-radius: 0;
  box-shadow: 5px 6px 0 var(--color-black);
  overflow: hidden;
  transform: rotate(${(p) => [-1.1, 0.45, 0.8, -0.55][p.$index]}deg);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    background-color 0.22s ease,
    color 0.22s ease;

  &:hover {
    transform: translateY(-6px) rotate(0deg);
    background: var(--color-black);
    color: var(--color-white);
    box-shadow: 9px 11px 0 var(--color-white);
  }

  .service-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: var(--color-red);
    font-size: 11px;
    font-weight: 900;
  }

  .service-top img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    transition: filter 0.22s ease;
  }

  &:hover .service-top img {
    filter: invert(1);
  }

  h3 {
    font: clamp(30px, 2.6vw, 39px) / 0.84 var(--font-display);
    text-transform: uppercase;
    letter-spacing: -0.055em;
    margin: 70px 0 18px;
    max-width: 230px;
  }

  p {
    font-size: 12px;
    line-height: 1.3;
    max-width: 255px;
    opacity: 0.9;
  }

  .plus {
    position: absolute;
    right: 18px;
    bottom: 14px;
    color: var(--color-red);
    font-size: 22px;
    font-weight: 900;
  }
`;

const FooterNote = styled.p`
  position: relative;
  z-index: 2;
  max-width: 1250px;
  margin: 58px auto 0;
  border-top: 1px solid rgba(255, 255, 255, 0.55);
  padding-top: 12px;
  color: var(--color-white);
  font-size: 9px !important;
  font-weight: 900;
  letter-spacing: 0.16em;
  opacity: 0.8 !important;
  text-transform: uppercase !important;

  span {
    color: var(--color-black);
  }
`;
