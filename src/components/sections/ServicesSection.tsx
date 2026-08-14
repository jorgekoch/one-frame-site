import styled from "styled-components";
import type { Service } from "../../data/services";

const A = "/assets/";
const LOGO = `${A}logo%20transparente.png`;
const XEROX_05 = `${A}251107_LA_ONEFRAME_Tela_Fotocopia05 (2).webp`;

export function ServicesSection({ services }: { services: readonly Service[] }) {
  return (
    <Services id="servicos">
      <Texture className="texture-left" src={LOGO} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <Texture className="texture-right" src={XEROX_05} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <ServicesHead>
        <Icon src={`${A}icon-sparks.png`} $size={62} $top="-20px" $left="3%" alt="" aria-hidden="true" decoding="async" />
        <Icon src={`${A}icon-question.png`} $size={48} $top="42px" $right="5%" alt="" aria-hidden="true" decoding="async" />
        <Label>03 / SERVIÇOS</Label>
        <h2>O QUE VOCÊ<br /><em>PROCURA?</em></h2>
      </ServicesHead>
      <ServiceGrid>{services.map(([number, title, description, icon]) => (<ServiceCard key={number}><div className="service-top"><span>{number}</span><img src={`${A}${icon}`} alt="" aria-hidden="true" loading="lazy" decoding="async" /></div><h3>{title}</h3><p>{description}</p><span className="plus">+</span></ServiceCard>))}</ServiceGrid>
    </Services>
  );
}

const Label = styled.span`font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;opacity:.65;`;
const Texture = styled.img`position:absolute;z-index:0;pointer-events:none;&.texture-left{width:45vw;max-width:640px;height:580px;left:-17vw;top:45px;opacity:.095;object-fit:contain;mix-blend-mode:multiply;transform:rotate(-7deg)}&.texture-right{width:38vw;max-width:520px;height:520px;right:-15vw;bottom:-20px;object-fit:cover;filter:grayscale(1) contrast(1.25);opacity:.065;mix-blend-mode:multiply;transform:rotate(11deg)}`;
const Icon = styled.img<{ $size:number;$top?:string;$right?:string;$bottom?:string;$left?:string }>`position:absolute;z-index:4;width:${p=>p.$size}px;height:auto;top:${p=>p.$top||"auto"};right:${p=>p.$right||"auto"};bottom:${p=>p.$bottom||"auto"};left:${p=>p.$left||"auto"};object-fit:contain;`;
const Services = styled.section`position:relative;overflow:hidden;background:var(--color-paper);padding:110px 5vw 125px;`;
const ServicesHead = styled.div`position:relative;z-index:1;text-align:center;margin:0 auto 65px;h2{font:clamp(62px,8vw,115px)/.78 var(--font-display);letter-spacing:-.07em;margin:20px 0;text-transform:uppercase}em{font-family:var(--font-accent);font-weight:400;text-transform:none;color:var(--color-red)}`;
const ServiceGrid = styled.div`position:relative;z-index:1;display:grid;grid-template-columns:repeat(4,1fr);gap:14px;max-width:1250px;margin:auto;@media(max-width:1000px){grid-template-columns:repeat(2,1fr)}@media(max-width:600px){grid-template-columns:1fr}`;
const ServiceCard = styled.article`position:relative;background:rgba(255,255,255,.94);min-height:310px;padding:22px;border:2px solid var(--color-black);border-radius:10px;box-shadow:6px 7px 0 var(--color-red);overflow:hidden;transition:transform .2s ease,box-shadow .2s ease;&:nth-child(2){transform:rotate(-.7deg)}&:nth-child(3){transform:rotate(.55deg)}&:nth-child(4){transform:rotate(-.45deg)}&:hover{transform:translateY(-4px) rotate(0deg);box-shadow:8px 10px 0 var(--color-red)}.service-top{display:flex;justify-content:space-between;align-items:start;color:var(--color-red);font-size:11px;font-weight:900}.service-top img{width:48px;height:48px;object-fit:contain}h3{font:35px/.85 var(--font-display);text-transform:uppercase;letter-spacing:-.05em;margin:55px 0 20px}p{font-size:12px;line-height:1.25;max-width:260px}.plus{position:absolute;right:20px;bottom:14px;color:var(--color-red);font-size:27px}`;
