import styled from "styled-components";
import { TextButton } from "../ui/TextButton";

const A = "/assets/";

export function SessionsSection() {
  return (
    <Sessions id="sessions">
      <SessionVisual>
        <img className="tear-main" src={`${A}tear-white-left.png`} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <img className="tear-secondary" src={`${A}tear-white-middle.png`} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <img className="logo-detail" src={`${A}logo-symbol-outline.png`} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className="red-overlay" />
        <div className="paper-grain" aria-hidden="true" />
        <Icon src={`${A}icon-camera.png`} $size={145} $bottom="10%" $left="9%" $invert alt="" aria-hidden="true" decoding="async" />
        <SessionTitle>ONE<br /><b>SESSIONS</b></SessionTitle>
        <span className="number">04</span>
      </SessionVisual>
      <SessionCopy>
        <Label>04 / ONE SESSIONS</Label>
        <h2>O momento<br /><em>não espera.</em></h2>
        <p>Cobertura mobile de eventos, shows e experiências. Captamos a energia do momento e entregamos vídeos rápidos e impactantes para o mesmo dia.</p>
        <TextButton href="#contato">QUERO UMA ONE SESSION <span>↗</span></TextButton>
      </SessionCopy>
    </Sessions>
  );
}

const Label = styled.span`font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;opacity:.65;`;
const Icon = styled.img<{ $size:number;$top?:string;$right?:string;$bottom?:string;$left?:string;$invert?:boolean }>`position:absolute;z-index:4;width:${p=>p.$size}px;height:auto;top:${p=>p.$top||"auto"};right:${p=>p.$right||"auto"};bottom:${p=>p.$bottom||"auto"};left:${p=>p.$left||"auto"};object-fit:contain;${p=>p.$invert?"filter:invert(1);":""}`;
const Sessions = styled.section`display:grid;grid-template-columns:1fr 1fr;background:var(--color-black);color:var(--color-white);min-height:650px;@media(max-width:800px){grid-template-columns:1fr}`;
const SessionVisual = styled.div`position:relative;min-height:650px;overflow:hidden;background:var(--color-black);.tear-main,.tear-secondary{position:absolute;inset:-10%;width:120%;height:120%;object-fit:cover;filter:grayscale(1) contrast(1.35)}.tear-main{opacity:.16;transform:rotate(-4deg) scale(1.08);mix-blend-mode:screen}.tear-secondary{opacity:.09;transform:rotate(8deg) scale(1.16);mix-blend-mode:screen}.logo-detail{position:absolute;z-index:2;width:470px;height:auto;left:-175px;bottom:-100px;opacity:.12;filter:invert(1);transform:rotate(-18deg);pointer-events:none}.red-overlay{position:absolute;inset:0;background:var(--color-red);mix-blend-mode:multiply;opacity:.8}.paper-grain{position:absolute;inset:0;z-index:2;pointer-events:none;background:radial-gradient(rgba(255,255,255,.16) .6px,transparent .7px);background-size:5px 5px;opacity:.2}`;
const SessionTitle = styled.span`position:absolute;z-index:3;left:10%;top:15%;font:clamp(60px,9vw,130px)/.7 var(--font-display);letter-spacing:-.08em;color:var(--color-white);transform:rotate(-4deg);text-shadow:4px 4px 0 var(--color-black);b{color:var(--color-black);text-shadow:0 0 3px rgba(255,255,255,.3)}`;
const SessionCopy = styled.div`position:relative;padding:100px 9vw;display:flex;flex-direction:column;justify-content:center;background:var(--color-black);overflow:hidden;&::before{content:"";position:absolute;width:420px;height:420px;right:-190px;top:-140px;background:url("/assets/tear-black-middle.png") center/cover no-repeat;opacity:.12;transform:rotate(16deg);filter:grayscale(1);pointer-events:none}&::after{content:"";position:absolute;width:300px;height:300px;left:-150px;bottom:-160px;background:url("/assets/logo-symbol-outline.png") center/contain no-repeat;opacity:.08;filter:invert(1);transform:rotate(12deg);pointer-events:none}h2{position:relative;z-index:1;font:clamp(65px,7vw,105px)/.78 var(--font-display);letter-spacing:-.07em;text-transform:uppercase;margin:22px 0 35px}em{font-family:var(--font-accent);font-weight:400;text-transform:none;color:var(--color-red)}p{position:relative;z-index:1;font-size:17px;line-height:1.25;max-width:480px;margin:0 0 35px}`;
