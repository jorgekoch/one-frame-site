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
          <ClientName key={client} className={`client-${index + 1}`}>{client}</ClientName>
        ))}
      </ClientGrid>

      <Crown src={`${A}icon-crown.png`} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <BottomMark>CLIENTS / ARCHIVE / 05</BottomMark>
    </Clients>
  );
}

const Label = styled.span`position:relative;z-index:3;font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;opacity:.65;`;
const Texture = styled.img`position:absolute;z-index:0;top:-12%;right:-14%;width:82%;height:86%;object-fit:cover;opacity:.045;mix-blend-mode:multiply;filter:grayscale(1) contrast(1.2) rotate(3deg);pointer-events:none;`;
const Logo = styled.img`position:absolute;z-index:1;width:430px;height:430px;left:-145px;bottom:-125px;object-fit:contain;opacity:.085;mix-blend-mode:multiply;transform:rotate(-12deg);pointer-events:none;`;
const Clients = styled.section`position:relative;background:var(--color-paper);padding:95px 6vw 115px;text-align:center;overflow:hidden;h2{position:relative;z-index:3;font:clamp(58px,7.4vw,105px)/.76 var(--font-display);letter-spacing:-.075em;margin:18px 0 12px;text-transform:uppercase}em{font-family:var(--font-accent);font-weight:400;text-transform:none;color:var(--color-red)}`;
const ClientIntro = styled.p`position:relative;z-index:3;max-width:430px;margin:0 auto;font-size:11px;line-height:1.4;opacity:.65;`;
const ClientGrid = styled.div`position:relative;z-index:2;max-width:1120px;margin:70px auto 0;display:grid;grid-template-columns:repeat(12,1fr);gap:26px 12px;align-items:center;transform:translateX(6vw);.client-1{grid-column:1/4;text-align:left}.client-2{grid-column:5/9}.client-3{grid-column:10/13;text-align:right}.client-4{grid-column:2/5}.client-5{grid-column:6/8}.client-6{grid-column:9/13;text-align:right}.client-7{grid-column:1/5;text-align:left}.client-8{grid-column:5/9}.client-9{grid-column:10/13;text-align:right}.client-4,.client-9{color:var(--color-red)}.client-5,.client-7{font-size:clamp(28px,3vw,44px)}.client-1,.client-7{font-size:clamp(28px,3.2vw,46px)}@media(max-width:700px){grid-template-columns:repeat(2,1fr);gap:25px 15px;margin-top:50px;transform:none}.client-1,.client-2,.client-3,.client-4,.client-5,.client-6,.client-7,.client-8,.client-9{grid-column:auto!important;text-align:center!important}.client-1,.client-5,.client-7{font-size:22px!important}}`;
const ClientName = styled.span`position:relative;z-index:2;font:clamp(20px,2.5vw,36px)/.9 var(--font-display);letter-spacing:-.04em;cursor:default;transition:color .2s ease,transform .2s ease;&:hover{color:var(--color-red);transform:translateY(-2px)}`;
const Crown = styled.img`position:absolute;z-index:3;width:72px;right:5%;bottom:18px;transform:rotate(8deg);`;
const BottomMark = styled.span`position:absolute;left:6vw;bottom:25px;font-size:8px;font-weight:900;letter-spacing:.16em;opacity:.4;`;
