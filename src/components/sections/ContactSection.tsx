import styled from "styled-components";
import { TextButton } from "../ui/TextButton";

const A = "/assets/";

export function ContactSection() {
  return (
    <Contact id="contato">
      <Icon src={`${A}icon-shaka.png`} $size={100} $top="11%" $left="5%" alt="" aria-hidden="true" />
      <Icon src={`${A}icon-exclamation.png`} $size={70} $top="9%" $right="8%" alt="" aria-hidden="true" />
      <Icon src={`${A}icon-music.png`} $size={80} $bottom="10%" $right="8%" alt="" aria-hidden="true" />
      <Label>07 / FALE CONOSCO</Label>
      <h2>VAMOS FAZER<br /><em>ACONTECER?</em></h2>
      <p>Tem uma ideia, evento, marca ou história para colocar em movimento?</p>
      <TextButton href="mailto:hello@oneframe.com.br">FALE COM A GENTE <span>↗</span></TextButton>
      <Signature>ONE<br /><span>FRAME</span></Signature>
    </Contact>
  );
}

const Label = styled.span`
  position: relative; z-index: 3; font-size: 9px; font-weight: 900; letter-spacing: .18em; text-transform: uppercase; opacity: .7;
`;

const Icon = styled.img<{ $size: number; $top?: string; $right?: string; $bottom?: string; $left?: string }>`
  position: absolute; z-index: 4; width: ${p => p.$size}px; height: auto; top: ${p => p.$top || "auto"}; right: ${p => p.$right || "auto"}; bottom: ${p => p.$bottom || "auto"}; left: ${p => p.$left || "auto"}; object-fit: contain;
`;

const Contact = styled.section`
  position: relative; min-height: 700px; background: var(--color-red); color: var(--color-black); display: flex; flex-direction: column;
  align-items: center; justify-content: center; text-align: center; padding: 105px 5vw 120px; overflow: hidden;
  h2, p, a { position: relative; z-index: 3; }
  h2 { font: clamp(78px, 11vw, 160px)/.72 var(--font-display); letter-spacing: -.08em; margin: 22px 0 30px; text-transform: uppercase; }
  em { font-family: var(--font-accent); font-weight: 400; text-transform: none; color: var(--color-white); }
  p { max-width: 450px; font-weight: 700; margin-bottom: 30px; line-height: 1.35; }
`;

const Signature = styled.div`
  position: absolute; z-index: 3; right: 5vw; bottom: 32px; text-align: right; font: 700 28px/.72 var(--font-display);
  letter-spacing: -.04em; line-height: .72; color: var(--color-black); transform: rotate(-3deg);
  span { color: var(--color-white); }
`;
