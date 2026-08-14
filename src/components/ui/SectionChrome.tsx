import styled from "styled-components";

export function Band() {
  return (
    <BandBar>
      <span>01</span>
      <b>ONE FRAME</b>
      <span>STUDIO MOBILE</span>
      <span>CURITIBA / BR</span>
    </BandBar>
  );
}

export function Torn({ tone }: { tone: "paper" | "black" }) {
  return <TornEdge $tone={tone} aria-hidden="true" />;
}

const BandBar = styled.div`
  background:var(--color-black);color:var(--color-white);display:flex;justify-content:space-between;gap:20px;padding:15px 5vw;font-size:10px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;span:nth-child(2){color:var(--color-red)}@media(max-width:600px){flex-wrap:wrap}
`;

const TornEdge = styled.div<{ $tone:"paper"|"black" }>`
  position:relative;z-index:8;height:72px;margin:-1px 0;background:${p=>p.$tone==="paper"?"var(--color-paper)":"var(--color-black)"};
  background-image:${p=>p.$tone==="paper"?'url("/assets/tear-white-middle.png")':'url("/assets/tear-black-middle.png")'};
  background-repeat:no-repeat;background-position:center;background-size:100% 100%;
  filter:contrast(1.03);
  clip-path:inset(0 0 0 0);

  &::after{content:"";position:absolute;inset:0;background:${p=>p.$tone==="paper"?"var(--color-paper)":"var(--color-black)"};opacity:.12;mix-blend-mode:multiply;pointer-events:none}

  @media(max-width:600px){height:48px}
`;
