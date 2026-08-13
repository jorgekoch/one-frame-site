import styled from "styled-components";
import type { Client } from "../data/clients";

const RED = "#ef1b14";
const PAPER = "#f7f5ef";

export function ClientsSection({ clients }: { clients: Client[] }) {
  return (
    <Clients>
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
      />
    </Clients>
  );
}

const Label = styled.span`
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.65;
`;
const Clients = styled.section`
  position: relative;
  background: ${PAPER};
  padding: 90px 6vw 110px;
  text-align: center;
  overflow: hidden;
  h2 {
    font:
      clamp(55px, 7vw, 100px)/0.78 Impact,
      "Arial Black";
    letter-spacing: -0.07em;
    margin: 20px 0;
    text-transform: uppercase;
  }
  em {
    font-family: Georgia, serif;
    font-weight: 400;
    text-transform: none;
    color: ${RED};
  }
  .crown {
    position: absolute;
    width: 80px;
    right: 5%;
    bottom: -12px;
  }
`;
const ClientGrid = styled.div`
  max-width: 1050px;
  margin: 65px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px 70px;
  font:
    clamp(17px, 2vw, 28px) Impact,
    "Arial Black";
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
`;
