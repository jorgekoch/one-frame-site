import styled from "styled-components";

const A = "/assets/";
const XEROX_01 = `${A}251107_LA_ONEFRAME_Tela_Fotocopia01 (2).webp`;
const XEROX_02 = `${A}251107_LA_ONEFRAME_Tela_Fotocopia02 (2).webp`;
const XEROX_03 = `${A}251107_LA_ONEFRAME_Tela_Fotocopia03 (2).webp`;

export function AboutSection() {
  return (
    <About id="sobre">
      <AboutGraphic>
        <img className="xerox xerox-left" src={XEROX_01} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <img className="xerox xerox-right" src={XEROX_02} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <Icon src={`${A}icon-headphones.png`} $size={72} $top="7%" $left="7%" alt="" aria-hidden="true" decoding="async" />
        <Icon src={`${A}icon-dots.png`} $size={55} $top="15%" $right="5%" alt="" aria-hidden="true" decoding="async" />
        <AboutMark>ONE<br /><span>FRA</span><br />ME</AboutMark>
        <Icon src={`${A}icon-fire.png`} $size={78} $bottom="8%" $left="6%" alt="" aria-hidden="true" decoding="async" />
      </AboutGraphic>
      <AboutCopy>
        <img className="copy-texture" src={XEROX_03} alt="" aria-hidden="true" />
        <Label>02 / SOBRE NÓS</Label>
        <h2>Somos a produtora<br />mobile que decidiu<br /><em>fazer diferente.</em></h2>
        <p>Nada de vídeos genéricos, nada de conteúdo sem alma. Aqui a gente cria material rápido, com personalidade, estética forte e aquela energia que faz o público parar de rolar o feed.</p>
        <p>Nosso trabalho é simples: fazer sua marca aparecer do jeito certo, na hora certa.</p>
        <p>Se você quer conteúdo que prende atenção, gera presença e faz sua marca parecer viva, é aqui que começa.</p>
        <TextLink href="#contato">Bora dar um upgrade na forma como o mundo vê você? <span>↗</span></TextLink>
      </AboutCopy>
    </About>
  );
}

const Label = styled.span`font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;opacity:.65;`;
const TextLink = styled.a`display:block;margin-top:35px;font-weight:900;font-size:13px;text-decoration:underline;span{margin-left:8px;color:var(--color-red);}`;
const Icon = styled.img<{ $size:number;$top?:string;$right?:string;$bottom?:string;$left?:string }>`position:absolute;z-index:4;width:${p=>p.$size}px;height:auto;top:${p=>p.$top||"auto"};right:${p=>p.$right||"auto"};bottom:${p=>p.$bottom||"auto"};left:${p=>p.$left||"auto"};object-fit:contain;`;
const About = styled.section`display:grid;grid-template-columns:1fr 1.25fr;min-height:720px;background:var(--color-paper);@media(max-width:800px){grid-template-columns:1fr}`;
const AboutGraphic = styled.div`position:relative;min-height:600px;background:var(--color-red);overflow:hidden;.xerox{position:absolute;pointer-events:none;object-fit:cover;filter:grayscale(1) contrast(1.35)}.xerox-left{width:95%;height:125%;left:-32%;top:-12%;opacity:.2;mix-blend-mode:multiply;transform:rotate(-7deg)}.xerox-right{width:82%;height:118%;right:-35%;bottom:-10%;opacity:.12;mix-blend-mode:screen;transform:rotate(9deg)}`;
const AboutMark = styled.div`position:absolute;z-index:2;left:50%;top:50%;transform:translate(-50%,-50%) rotate(-5deg);font:clamp(90px,12vw,180px)/.65 var(--font-display);text-align:center;color:var(--color-white);letter-spacing:-.09em;text-shadow:4px 4px 0 var(--color-black);span{color:var(--color-black)}`;
const AboutCopy = styled.div`position:relative;padding:100px 8vw 90px;max-width:800px;overflow:hidden;.copy-texture{position:absolute;width:470px;height:470px;right:-230px;top:5%;object-fit:cover;opacity:.045;filter:grayscale(1) contrast(1.2);transform:rotate(8deg);pointer-events:none}h2,p,a,span{position:relative;z-index:1}h2{font:clamp(55px,6vw,90px)/.82 var(--font-display);letter-spacing:-.06em;text-transform:uppercase;margin:22px 0 38px}em{font-family:var(--font-accent);font-weight:400;text-transform:none;letter-spacing:-.08em;color:var(--color-red)}p{font-size:16px;line-height:1.25;max-width:560px}`;
