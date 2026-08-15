import styled from "styled-components";

const A = "/assets/";

export function HeroSection() {
  return (
    <Hero>
      <PaperTexture aria-hidden="true" />
      <HeroIcon src={`${A}icon-arrow.png`} $top="17%" $right="8%" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <HeroIcon src={`${A}icon-bolt.png`} $top="34%" $right="3%" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <HeroIcon src={`${A}icon-crown.png`} $bottom="9%" $right="7%" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <HeroCopy>
        <MiniLogo>ONE<br /><b>FRAME</b></MiniLogo>
        <HeroTitle>CADA<br />FRAME<br /><em>IMPORTA</em></HeroTitle>
        <HeroText>Studio Mobile onde criamos vídeos<br />que geram presença real.</HeroText>
        <CTA href="#contato">FALE CONOSCO <span>↗</span></CTA>
      </HeroCopy>
      <HeroCard>
        <CardTop><span>ONE FRAME</span><b>REC ●</b></CardTop>
        <CardScreen>
          <CardLines aria-hidden="true" />
          <CardVideo src="https://www.youtube-nocookie.com/embed/hOz8G8KFMd4?rel=0" title="Showreel One Frame" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          <CardCaption>STUDIO MOBILE / CURITIBA</CardCaption>
        </CardScreen>
      </HeroCard>
      <ScrollCue href="#sobre" aria-label="Ir para Sobre nós"><span>DESCUBRA</span><img src={`${A}icon-down.png`} alt="" aria-hidden="true" decoding="async" /></ScrollCue>
    </Hero>
  );
}

const Hero=styled.section`min-height:830px;position:relative;display:flex;align-items:center;gap:3vw;padding:150px 5vw 80px;background:var(--color-red);overflow:hidden;@media(max-width:900px){min-height:auto;flex-direction:column;align-items:stretch;gap:0;padding:96px 5vw 56px}`;
const PaperTexture=styled.div`position:absolute;inset:0;opacity:.16;background-image:radial-gradient(var(--color-black) .75px,transparent .75px);background-size:7px 7px;pointer-events:none;`;
const HeroIcon=styled.img<{ $top?:string;$right?:string;$bottom?:string }>`position:absolute;z-index:4;width:64px;height:auto;top:${p=>p.$top||"auto"};right:${p=>p.$right||"auto"};bottom:${p=>p.$bottom||"auto"};object-fit:contain;@media(max-width:900px){width:46px}@media(max-width:600px){width:40px}`;
const HeroCopy=styled.div`position:relative;z-index:3;width:48%;min-width:430px;@media(max-width:900px){width:100%;min-width:0}`;
const MiniLogo=styled.div`font:22px/.72 var(--font-display);margin-bottom:24px;transform:rotate(-2deg);color:var(--color-white);b{font-size:17px;color:var(--color-black)}@media(max-width:900px){margin-bottom:16px}`;
const HeroTitle=styled.h1`font:clamp(82px,10vw,155px)/.78 var(--font-display);letter-spacing:-.07em;margin:0;text-transform:uppercase;color:var(--color-white);text-shadow:4px 4px 0 rgba(0,0,0,.18);em{font-style:normal;color:var(--color-black)}@media(max-width:900px){font-size:clamp(72px,18vw,112px);line-height:.78}`;
const HeroText=styled.p`font-size:14px;line-height:1.2;margin:30px 0 18px;font-weight:700;max-width:390px;color:var(--color-white);@media(max-width:900px){margin:24px 0 18px;max-width:100%}`;
const CTA=styled.a`display:inline-flex;align-items:center;gap:24px;background:var(--color-black);color:var(--color-white);border:2px solid var(--color-black);border-radius:999px;padding:13px 22px;font-size:10px;font-weight:900;letter-spacing:.08em;box-shadow:4px 5px 0 var(--color-white);transition:transform .2s ease,box-shadow .2s ease;&:hover{transform:translate(-2px,-2px);box-shadow:7px 8px 0 var(--color-white)}&:focus-visible{outline:3px solid var(--color-white);outline-offset:5px}span{font-size:16px}`;
const HeroCard=styled.div`position:relative;z-index:2;width:min(48vw,650px);height:min(34vw,430px);background:var(--color-white);border:4px solid var(--color-black);border-radius:28px;padding:12px;box-shadow:12px 14px 0 var(--color-black);transform:rotate(-1.5deg);@media(max-width:900px){width:92%;height:280px;margin:28px auto 0}@media(max-width:600px){width:94%;height:270px;margin-top:24px;border-width:3px;border-radius:24px;padding:10px}`;
const ScrollCue=styled.a`position:absolute;z-index:4;right:5vw;bottom:28px;display:inline-flex;align-items:center;gap:10px;color:var(--color-white);font-size:9px;font-weight:900;letter-spacing:.16em;img{width:28px;height:28px;object-fit:contain;transition:transform .2s ease;filter:brightness(0) invert(1)}&:hover img,&:focus-visible img{transform:translateY(4px)}&:focus-visible{outline:3px solid var(--color-white);outline-offset:5px}@media(max-width:900px){display:none}`;
const CardTop=styled.div`height:25px;display:flex;justify-content:space-between;font-size:8px;font-weight:900;letter-spacing:.14em;color:var(--color-black);`;
const CardScreen=styled.div`position:relative;height:calc(100% - 25px);background:var(--color-red);overflow:hidden;display:flex;align-items:center;justify-content:center;`;
const CardVideo=styled.iframe`position:absolute;inset:0;z-index:3;width:100%;height:100%;border:0;background:var(--color-red);`;
const CardLines=styled.div`position:absolute;z-index:2;inset:-20%;background:repeating-linear-gradient(155deg,transparent 0 20px,rgba(255,255,255,.28) 21px 23px);transform:rotate(-6deg);pointer-events:none;`;
const CardCaption=styled.small`position:absolute;z-index:4;left:18px;bottom:14px;color:var(--color-white);font-size:8px;letter-spacing:.25em;font-weight:900;`;
