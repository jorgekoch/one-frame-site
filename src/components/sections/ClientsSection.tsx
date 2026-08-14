import styled from "styled-components";
import type { Client } from "../../data/clients";

export function ClientsSection({ clients }: { clients: Client[] }) {
  return (
    <Clients>
      <Texture
        src="/assets/papelrasgado.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <TextureLines
        src="/assets/lines-01.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <Label>05 / CLIENTES</Label>
      <h2>
        QUEM JÁ
        <br />
        <em>VIVEU O FRAME.</em>
      </h2>
      <ClientGrid>
        {clients.map((client) => (
          <span key={client}>{client}</span>
        ))}
      </ClientGrid>
      <img
        className="crown"
        src="/assets/icon-crown.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
    </Clients>
  );
}

const Label = styled.span`
  position: relative;
  z-index: 2;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.65;
`;
const Texture = styled.img`
  position: absolute;
  z-index: 0;

  top: -12%;
  left: 0;

  width: 100%;
  height: 44%;

  object-fit: fill;

  opacity: 0.13;
  mix-blend-mode: multiply;

  pointer-events: none;
`;
const TextureLines = styled.img`
  position: absolute;
  z-index: 0;
  width: 420px;
  height: 420px;
  right: -180px;
  bottom: -150px;
  object-fit: cover;
  opacity: 0.055;
  transform: rotate(12deg);
  pointer-events: none;
`;
const Clients = styled.section`
  position: relative;
  background: var(--color-paper);
  padding: 90px 6vw 110px;
  text-align: center;
  overflow: hidden;
  h2 {
    position: relative;
    z-index: 2;
    font: clamp(55px, 7vw, 100px)/0.78 var(--font-display);
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
  .crown {
    position: absolute;
    z-index: 3;
    width: 80px;
    right: 5%;
    bottom: -12px;
  }
`;
const ClientGrid = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1050px;
  margin: 65px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px 70px;
  font: clamp(17px, 2vw, 28px) var(--font-display);
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
`;
