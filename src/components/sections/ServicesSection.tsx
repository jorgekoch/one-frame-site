import styled from "styled-components";
import type { Service } from "../../data/services";

const A = "/assets/";

export function ServicesSection({ services }: { services: readonly Service[] }) {
  return (
    <Services id="servicos">
      <ServicesHead>
        <Icon src={`${A}icon-sparks.png`} $size={62} $top="-20px" $left="3%" alt="" aria-hidden="true" decoding="async" />
        <Icon src={`${A}icon-question.png`} $size={48} $top="42px" $right="5%" alt="" aria-hidden="true" decoding="async" />
        <Label>03 / SERVIÇOS</Label>
        <h2>O QUE VOCÊ<br /><em>PROCURA?</em></h2>
      </ServicesHead>
      <ServiceGrid>
        {services.map(([number, title, description, icon]) => (
          <ServiceCard key={number}>
            <div className="service-top"><span>{number}</span><img src={`${A}${icon}`} alt="" aria-hidden="true" loading="lazy" decoding="async" /></div>
            <h3>{title}</h3><p>{description}</p><span className="plus">+</span>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </Services>
  );
}

const Label = styled.span`font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;opacity:.65;`;
const Icon = styled.img<{ $size:number;$top?:string;$right?:string;$bottom?:string;$left?:string }>`position:absolute;z-index:4;width:${p=>p.$size}px;height:auto;top:${p=>p.$top||"auto"};right:${p=>p.$right||"auto"};bottom:${p=>p.$bottom||"auto"};left:${p=>p.$left||"auto"};object-fit:contain;`;
const Services = styled.section`position:relative;background:var(--color-paper);padding:110px 5vw 125px;`;
const ServicesHead = styled.div`position:relative;text-align:center;margin:0 auto 65px;h2{font:clamp(62px,8vw,115px)/.78 var(--font-display);letter-spacing:-.07em;margin:20px 0;text-transform:uppercase;}em{font-family:var(--font-accent);font-weight:400;text-transform:none;color:var(--color-red);}`;
const ServiceGrid = styled.div`display:grid;grid-template-columns:repeat(4,1fr);gap:14px;max-width:1250px;margin:auto;@media(max-width:1000px){grid-template-columns:repeat(2,1fr)}@media(max-width:600px){grid-template-columns:1fr}`;
const ServiceCard = styled.article`position:relative;background:var(--color-white);min-height:310px;padding:22px;border:2px solid var(--color-black);border-radius:10px;box-shadow:6px 7px 0 var(--color-red);overflow:hidden;.service-top{display:flex;justify-content:space-between;align-items:start;color:var(--color-red);font-size:11px;font-weight:900}.service-top img{width:48px;height:48px;object-fit:contain}h3{font:35px/.85 var(--font-display);text-transform:uppercase;letter-spacing:-.05em;margin:55px 0 20px}p{font-size:12px;line-height:1.25;max-width:260px}.plus{position:absolute;right:20px;bottom:14px;color:var(--color-red);font-size:27px}`;
