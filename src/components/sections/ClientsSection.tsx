import styled from "styled-components";
import type { Client } from "../../data/clients";

const A = "/assets/";
const XEROX_08 = `${A}251107_LA_ONEFRAME_Tela_Fotocopia08 (2).webp`;
const LOGO = `${A}logo%20transparente.png`;

export function ClientsSection({ clients }: { clients: Client[] }) {
  return (
    <Clients>
      <Texture src={XEROX_08} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <Logo src={LOGO} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <Label>05 / CLIENTES</Label>
      <h2>QUEM JÁ<br /><em>VIVEU O FRAME.</em></h2>
      <ClientIntro>Algumas marcas que já colocaram suas histórias em movimento.</ClientIntro>

      <ClientGrid>
        {clients.map((client, index) => (
          <ClientItem key={client} className={`client-${index + 1}`}>
            <BrandWatermark aria-hidden="true">{client}</BrandWatermark>
            <ClientName>{client}</ClientName>
          </ClientItem>
        ))}
      </ClientGrid>

      <Crown src={`${A}icon-crown.png`} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <BottomMark>CLIENTS / ARCHIVE / 05</BottomMark>
    </Clients>
  );
}

const Label = styled.span`position:relative;z-index:3;font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;opacity:.65;`;
const Texture = styled.img`position:absolute;z-index:0;top:-12%;right:-14%;width:82%;height:86%;object-fit:cover;opacity:.045;mix-blend-mode:multiply;filter:grayscale(1) contrast(1.2) rotate(3deg);pointer-events:none;`;
const Logo = styled.img`position:absolute;z-index:0;width:330px;height:330px;left:-115px;bottom:-90px;object-fit:contain;opacity:.035;mix-blend-mode:multiply;transform:rotate(-12deg);pointer-events:none;`;
const Clients = styled.section`position:relative;background:var(--color-paper);padding:95px 6vw 115px;text-align:center;overflow:hidden;h2{position:relative;z-index:3;font:clamp(58px,7.4vw,105px)/.76 var(--font-display);letter-spacing:-.075em;margin:18px 0 12px;text-transform:uppercase}em{font-family:var(--font-accent);font-weight:400;text-transform:none;color:var(--color-red)}`;
const ClientIntro = styled.p`position:relative;z-index:3;max-width:430px;margin:0 auto;font-size:11px;line-height:1.4;opacity:.65;`;
const ClientGrid = styled.div`position:relative;z-index:2;max-width:1120px;margin:70px auto 0;display:grid;grid-template-columns:repeat(12,1fr);gap:26px 12px;align-items:center;`;
const ClientItem = styled.div`position:relative;min-height:70px;display:flex;align-items:center;justify-content:center;isolation:isolate;`;
const ClientName = styled.span`position:relative;z-index:2;font:clamp(20px,2.5vw,36px)/.9 var(--font-display);letter-spacing:-.04em;transition:color .2s ease,transform .2s ease;&:hover{color:var(--color-red);transform:translateY(-2px)}`;
const BrandWatermark = styled.span`position:absolute;z-index:0;left:50%;top:50%;width:max-content;max-width:170%;transform:translate(-50%,-50%) rotate(-7deg);font:clamp(55px,7vw,100px)/.8 var(--font-display);letter-spacing:-.07em;color:var(--color-black);opacity:.035;white-space:nowrap;pointer-events:none;user-select:none;`;
const Crown = styled.img`position:absolute;z-index:3;width:72px;right:5%;bottom:18px;transform:rotate(8deg);`;
const BottomMark = styled.span`position:absolute;left:6vw;bottom:25px;font-size:8px;font-weight:900;letter-spacing:.16em;opacity:.4;`;

ClientGrid.defaultProps = {};

const clientPositions = {
  1: "left",
};

void clientPositions;
